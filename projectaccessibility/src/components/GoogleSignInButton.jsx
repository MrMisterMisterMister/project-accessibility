import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createEndpoint } from "../api/axiosClient";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store";

const CLIENT_ID = "207599687687-b8qecsbfsauc1p6orj6266lgcl5p169d.apps.googleusercontent.com";

const GoogleSignInButton = observer(() => {
    // To handle navigation
    const navigate = useNavigate();

    const { userStore, authStore } = useStore();

    // userobject is the decoded JWT token.
    const handleCallbackResponse = (response) => {
        if (response.credential) {
            // Check if user is signing in or signing up
            signUpOrSignInWithGoogle(response.credential);
        } else {
            console.log("Invalid credential received.");
        }
    };

    const signUpOrSignInWithGoogle = async (credential) => {
        try {
            const response = await createEndpoint("login/google").post(credential);

            // The backend will return a JWT token if the user is signed in or signed up successfully
            if (response.data && response.data.token) {
                authStore.setToken(response.data.token);
                userStore.getUser();
                navigate("/dashboard", { replace: true });
            } else {
                console.error("Error signing in or signing up:", response.data?.description);
            }
        } catch (error) {
            console.error("Error during Google sign-in/sign-up:", error);
        }
    };

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
});

export default GoogleSignInButton;
