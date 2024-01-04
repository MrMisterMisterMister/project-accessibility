import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function GoogleSignInButton () {

    function handleCallbackResponse (response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "207599687687-b8qecsbfsauc1p6orj6266lgcl5p169d.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large", width:1000, locale: "nl" }
        );

        google.accounts.id.prompt();

    }, []);

    return (
        <div id="signInDiv"></div>
    );
}

export default GoogleSignInButton;
