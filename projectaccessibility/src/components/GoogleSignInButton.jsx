import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../provider/authProvider";
import Cookies from "js-cookie";
import { postRequest } from "../api/axiosClient";
import { useNavigate } from "react-router-dom";

const CLIENT_ID = "207599687687-b8qecsbfsauc1p6orj6266lgcl5p169d.apps.googleusercontent.com";

function GoogleSignInButton () {
    // To handle navigation
    const navigate = useNavigate();

    const { setToken } = useAuth();

    function setAuthToken (authToken) {
        setToken(authToken);
        Cookies.set("token", authToken);
        console.log("Token set in authProvider: " + authToken);
    }

    // userobject is the decoded JWT token.
    function handleCallbackResponse (response) {
        console.log("Encoded JWT ID token: " + response.credential);
        const userObject = jwtDecode(response.credential);
        console.log(userObject);

        if (response.credential) {
            // Check if user is signing in or signing up
            signUpOrSignInWithGoogle(response.credential);
        } else {
            console.log("Invalid credential received.");
        }
    }

    async function signUpOrSignInWithGoogle (credential) {
        try {
            const response = await postRequest("GoogleSignInButton/google-signup/", { GoogleJWTToken: credential });

            // The backend will return a JWT token if the user is signed in or signed up successfully
            if (response.data && response.data.token) {
                setAuthToken(response.data.token);
                navigate("/dashboard", { replace: true });
            } else {
                console.error("Error signing in or signing up:", response.data?.description);
            }
        } catch (error) {
            console.error("Error during Google sign-in/sign-up:", error);
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
