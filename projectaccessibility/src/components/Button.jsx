import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

// Primary button. To be made
const ButtonPrimary = () => {
    return <></>;
};

// Secondary button. To be made
const ButtonSecondary = () => {
    return <></>;
};

// Custom hero button on hero section
const ButtonHero = ({ text }) => {
    return (
        <Button className="button__hero" role="button">
            <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
            </span>
            <span className="button__hero_text">{text}</span>
        </Button>
    );
};

// Prop type for ButtonHero
ButtonHero.propTypes = {
    text: PropTypes.string.isRequired
};

// Button for contact section on home
// Style can be signup or login
const ButtonContact = ({ style, path, text }) => {
    return (
        <Link className={`button__contact ${style}`} role="button" to={path}>
            {text}
        </Link>
    );
};

// Prop type for ButtonContact
ButtonContact.propTypes = {
    style: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

// Button for signup
const ButtonSignup = () => {
    return (
        <input className="button button__auth_login" type="submit" value="Sign Up" id="auth_signup" />
    );
};

export { ButtonPrimary, ButtonSecondary, ButtonHero, ButtonContact, ButtonSignup };
