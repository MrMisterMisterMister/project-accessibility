import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

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
const ButtonSubmit = ({ style, text, isDisabled }) => {
    return <Button className={style || "button__submit"} as="input" type="submit" value={text} disabled={isDisabled} />;
};

// prop type for button submit
ButtonSubmit.propTypes = {
    style: PropTypes.string,
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool
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
const ButtonAuth = ({ path, icon, text, action }) => {
    return (
        <Button className="button__auth" type="button" onClick={() => action()} href={path}>
            <div className="button__auth_icon">{icon}</div>
            <span className="button__auth_text">{text}</span>
        </Button>
    );
};

// Prop type for button auth
ButtonAuth.propTypes = {
    path: PropTypes.string,
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    action: PropTypes.func
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

// button that actually has redirect
// idk why I dont have one
const ButtonLink = ({ path, text }) => {
    return (
        <Button className="button__link" href={path}>
            {text}
        </Button>
    );
};

// prop type for button link
ButtonLink.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export {
    ButtonPrimary,
    ButtonSecondary,
    ButtonSubmit,
    ButtonHero,
    ButtonContact,
    ButtonAuth,
    ButtonMuted,
    ButtonLink
};
