import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../provider/authProvider";
import Cookies from "js-cookie";

const CLIENT_ID = "207599687687-b8qecsbfsauc1p6orj6266lgcl5p169d.apps.googleusercontent.com";

function GoogleSignInButton () {
    const { token, setToken } = useAuth();

    // userobject is the decoded JWT token.
    function handleCallbackResponse (response) {
        console.log("Encoded JWT ID token: " + response.credential);
        const userObject = jwtDecode(response.credential);
        console.log(userObject);

        // Set the token in the authProvider
        setToken(response.credential);

        // Store token in a cookie named "token"
        Cookies.set("token", response.credential);
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
    }, [setToken]);

    // Checking if the token is set
    useEffect(() => {
        if (token) {
            console.log("Token set in authProvider: " + token);
        }
    }, []);

    return (
        <div id="signInDiv"></div>
    );
}

export default GoogleSignInButton;
