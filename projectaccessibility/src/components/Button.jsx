import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

// Primary button
// Just something
const ButtonPrimary = ({ text, action }) => {
    return (
        <Button className="button__primary" onClick={action}>
            {text}
        </Button>
    );
};

// something something
ButtonPrimary.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func
};

// Secondary button
// Yes, just copy pasted
const ButtonSecondary = ({ text, action }) => {
    return (
        <Button className="button__secondary" onClick={action}>
            {text}
        </Button>
    );
};

// something something
ButtonSecondary.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func
};

// General button for submits in forms
const ButtonSubmit = ({ style, text }) => {
    return <Button className={style} as="input" type="submit" value={text} />;
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

export {
    ButtonPrimary,
    ButtonSecondary,
    ButtonSubmit,
    ButtonHero,
    ButtonContact,
    ButtonAuth,
    ButtonMuted
};
