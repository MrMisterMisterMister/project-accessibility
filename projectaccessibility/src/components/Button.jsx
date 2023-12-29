import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

// Primary button. To be made
const ButtonPrimary = () => {
    return <></>;
};

// Secondary button. To be made
const ButtonSecondary = () => {
    return <></>;
};

// General button for submits in forms
const ButtonSubmit = ({ style, text }) => {
    return (
        <Button className={style} as="input" type="submit" value={text} />
    );
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

export {
    ButtonPrimary,
    ButtonSecondary,
    ButtonSubmit,
    ButtonHero,
    ButtonContact,
    ButtonAuth
};
