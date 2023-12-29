import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import axiosClient from "../api/axiosClient";

// Primary button. To be made
const ButtonPrimary = () => {
    return <></>;
};

// Secondary button. To be made
const ButtonSecondary = () => {
    return <></>;
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
        <Button className={`button__contact ${style}`} type="button" href={path}>
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

// Button for signup
const ButtonSignup = ({ text }) => {
    return (
        <Button className="button__signup" as="input" type="submit" value={text} />
    );
};

// Prop type for ButtonSignup
ButtonSignup.propTypes = {
    text: PropTypes.string.isRequired
};

// Button for login
const ButtonLogin = ({ text }) => {
    return (
        <Button className="button__login" as="input" type="submit" value={text} />
    );
};

// Prop type for ButtonSignup
ButtonLogin.propTypes = {
    text: PropTypes.string.isRequired
};

// Button for auth
// Like facebook or google
// Also for create account
// The icon can be svg
const ButtonAuth = ({ path, icon, text, provider }) => {
    const handleSignIn = async () => {
        switch (provider) {
            case "google":
                handleGoogleSignIn();
                break;
            case "microsoft":
                handleMicrosoftSignIn();
                break;
            // idk if we need more
            default:
                break;
        }
    };

    // Get request
    async function getGoogleClientId() {
    try {
        const response = await axiosClient.getRequest('GoogleSignIn/googleClientId');
        return response.data;
    } catch (error) {
        console.error('Error fetching client ID:', error);
        throw error;
    }
}

    const handleGoogleSignIn = async () => {
        try {
            // Fetch the client ID from the server
            const { clientId } = await getGoogleClientId();
    
            // Use the obtained client ID for Google sign-in
            const auth2 = window.gapi.auth2.getAuthInstance({
                client_id: clientId,
            });
    
            auth2.signIn()
                .then((googleUser) => {
                    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
                    // Perform actions after successful sign-in
                })
                .catch((error) => {
                    console.error('Sign-in failed: ' + error);
                    // sign-in failure
                });
        } catch (error) {
            console.error('Error fetching client ID:', error);
            // Handle error fetching client ID
        }
    };

    const handleMicrosoftSignIn = () => {
        // Logic for Microsoft authentication
        // implement Microsoft authentication flow here
    };
    return (
        <Button className="button__auth" type="button" href={path} onClick={handleSignIn}>
            <div className="button__auth_icon">{icon}</div>
            <span className="button__auth_text">{text}</span>
        </Button>
    );
};

// Prop type for button auth
ButtonAuth.propTypes = {
    path: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    provider: PropTypes.string,
};

export { ButtonPrimary, ButtonSecondary, ButtonHero, ButtonContact, ButtonSignup, ButtonLogin, ButtonAuth };
