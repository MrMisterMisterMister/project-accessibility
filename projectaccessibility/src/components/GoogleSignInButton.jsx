import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../provider/authProvider";
import Cookies from "js-cookie";
import { postRequest } from "../api/axiosClient";

const CLIENT_ID = "207599687687-b8qecsbfsauc1p6orj6266lgcl5p169d.apps.googleusercontent.com";

function GoogleSignInButton () {
    const { setToken } = useAuth();

    function setAuthToken(authToken) {
        setToken(authToken);
        Cookies.set("token", authToken);
        console.log("Token set in authProvider: " + authToken);
    }

    // userobject is the decoded JWT token.
    function handleCallbackResponse (response) {
        console.log("Encoded JWT ID token: " + response.credential);
        const userObject = jwtDecode(response.credential);
        console.log(userObject);

        const currentTimeInSeconds = Math.floor(Date.now() / 1000); // Current time in seconds

        if (currentTimeInSeconds > userObject.exp) {
            console.log("Token has expired");
        } else {
            console.log("Token is still valid");
        }

        if(response.credential) {
            // Check if user is signing in or signing up
            signUpOrSignInWithGoogle(response.credential);
        } else {
            console.log("Invalid credential received.");
        }
    }

    async function signUpOrSignInWithGoogle(credential) {
        try {
            const response = await postRequest("GoogleSignInButton/google-signup/", credential);

            // Check if the error code indicates the user already exists
            if (response.data.code === "EmailTaken") {
                // If user exists, proceed with signing in
                setAuthToken(credential);
            } else {
                console.error("Error signing in or signing up:", response.data.description);
            }
        } catch (error) {
            console.error("Error signing in or signing up:", error);
        }
    }

    useEffect(() => {
        // Inintialize starts the auth flow
        const google = window.google;
        google.accounts.id.initialize({
            client_id: CLIENT_ID,
            callback: handleCallbackResponse
        });

        // Renders the button
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large", width: 1000, locale: "nl" }
        );

        // Prompt the user to select a Google account to sign in with
        google.accounts.id.prompt();
    }, []);

    return (
        <div id="signInDiv"></div>
    );
}

export default GoogleSignInButton;
