import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store";
import { createEndpoint } from "../api/axiosClient";

// Primary button
// Just something
const ButtonPrimary = ({ text, isActive, action }) => {
    return (
        <Button className={`button__primary ${isActive ? "active" : ""}`} onClick={action}>
            {text}
        </Button>
    );
};

// something something
ButtonPrimary.propTypes = {
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    action: PropTypes.func
};

// Secondary button
// Yes, just copy pasted
const ButtonSecondary = ({ text, isActive, action }) => {
    return (
        <Button className={`button__secondary ${isActive ? "active" : ""}`} onClick={action}>
            {text}
        </Button>
    );
};

// something something
ButtonSecondary.propTypes = {
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    action: PropTypes.func
};

// General button for submits in forms
const ButtonSubmit = ({ style, text }) => {
    return <Button className={style || "button__submit" } as="input" type="submit" value={text} />;
};

// prop type for button submit
ButtonSubmit.propTypes = {
    style: PropTypes.string,
    text: PropTypes.string.isRequired
};

// Custom hero button on hero section
const ButtonHero = ({ text, path }) => {
    return (
        <Button className="button__hero" type="button" href={path}>
            <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
            </span>
            <span className="button__hero_text">{text}</span>
        </Button>
    );
};

// Prop type for ButtonHero
ButtonHero.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};

// Button for contact section on home
// Style can be signup or login
const ButtonContact = ({ style, path, text }) => {
    return (
        <Button
            className={`button__contact ${style}`}
            type="button"
            href={path}
        >
            {text}
        </Button>
    );
};

// Prop type for ButtonContact
ButtonContact.propTypes = {
    style: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

// Button for auth
// Like facebook or google
// Also for create account
// The icon can be svg
const ButtonAuth = ({ path, icon, text }) => {
    return (
        <Button className="button__auth" type="button" href={path}>
            <div className="button__auth_icon">{icon}</div>
            <span className="button__auth_text">{text}</span>
        </Button>
    );
};

// Prop type for button auth
ButtonAuth.propTypes = {
    path: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
};

// Button for dashboard
// Mostly for handling the crud actions
// Has transparent background
// THe button has some onaction, that will trigger stuff
const ButtonMuted = ({ text, onAction }) => {
    return (
        <Button className="button__muted" onClick={onAction}>
            {text}
        </Button>
    );
};

// prop type for button muted
ButtonMuted.propTypes = {
    text: PropTypes.string.isRequired,
    onAction: PropTypes.func
};

// Button for google sign in
// Logic still needs to go elsewhere
// But my brain is too tired
const ButtonGoogleSignIn = observer(() => {
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
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
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

export {
    ButtonPrimary,
    ButtonSecondary,
    ButtonSubmit,
    ButtonHero,
    ButtonContact,
    ButtonAuth,
    ButtonMuted,
    ButtonGoogleSignIn
};
