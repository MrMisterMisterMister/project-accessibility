import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { getRequest } from "../api/axiosClient";

function GoogleSignIn() {
    // Handle the Google sign-in callback response
    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        const userObject = jwtDecode(response.credential);
        console.log(userObject);
    }

    useEffect(() => {
        async function fetchGoogleClientId() {
            try {
                // Fetch the Google client ID from the server
                getRequest("GoogleSignIn/googleClientId")
                    .then(response => {
                        // Initialize the Google sign-in button
                        /* global google */
                        google.accounts.id.initialize({
                            client_id: response.data.clientId,
                            callback: handleCallbackResponse
                        });
                        
                        // Render the Google sign-in button
                        google.accounts.id.renderButton(
                            document.getElementById("signInDiv"),
                            { theme: "outline", size: "large", locale: "nl" }
                        );
                        
                        // Prompt the user to select a Google account
                        google.accounts.id.prompt();
                    })
                    .catch(error => {
                        console.log("Error fetching client ID: ", error);
                    });
            } catch (error) {
                console.log("Error axiosing client ID: " + error);
            }
        }
        // Fetch the Google client ID from the server
        fetchGoogleClientId();
    }, []);

    return (
        <div id="signInDiv"></div>
    );
}

export default GoogleSignIn;
