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
        <Button className="button button__signup" as="input" type="submit" value={text} />
    );
};

// Prop type for ButtonSignup
ButtonSignup.propTypes = {
    text: PropTypes.string.isRequired
};

export { ButtonPrimary, ButtonSecondary, ButtonHero, ButtonContact, ButtonSignup };
