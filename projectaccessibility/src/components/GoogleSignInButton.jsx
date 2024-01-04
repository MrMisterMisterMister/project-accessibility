import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const CLIENT_ID = "207599687687-b8qecsbfsauc1p6orj6266lgcl5p169d.apps.googleusercontent.com";

function GoogleSignInButton () {
    // userobject is the decoded JWT token.
    function handleCallbackResponse (response) {
        console.log("Encoded JWT ID token: " + response.credential);
        const userObject = jwtDecode(response.credential);
        console.log(userObject);
    }

    useEffect(() => {
        // Tells the lint that we are using a global variable from Google in  index.hmtl
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

        // Access Token

        // Prompt the user to select a Google account to sign in with
        google.accounts.id.prompt();
    }, []);

    return (
        <div id="signInDiv"></div>
    );
}

export default GoogleSignInButton;
