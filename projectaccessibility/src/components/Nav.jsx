import React, { useState } from "react";
import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";

// Render hamburger menu for mobile menu
const renderMenuSpans = () => {
    const spans = [];
    for (let i = 0; i < 6; i++) {
        spans.push(<span key={i} className="nav__header_mobile__span" />);
    }
    return spans;
};

// Nav for desktop
// Links as parameter with path and name
const NavDesktop = ({ links }) => {
    return (
        <div className="nav__header_desktop">
            <Nav className="nav__header_desktop__navlist">
                {links.map((link, index) => (
                    <Nav.Item
                        key={index}
                        className="nav__header_desktop__navitem">
                        <Nav.Link
                            className="nav__header_desktop__navlink"
                            href={link.path}>
                            {link.name}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </div>
    );
};

// Prop types for navdesktop
NavDesktop.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

// Nav for mobile
// Uses react hooks to toggle the menu state and assign proper class to body to prevent scrollable menu
const NavMobile = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuState = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle("site__header_nav_is__open");
    };

    return (
        <div className="nav__header_mobile">
            <input
                type="checkbox"
                className="nav__header_mobile__checkbox"
                id="site__header_nav__toggle"
            />
            <label
                className="nav__header_mobile__label"
                htmlFor="site__header_nav__toggle"
                onClick={toggleMenuState}>
                <span className="nav__header_mobile__icon">
                    {renderMenuSpans()}
                </span>
            </label>
            <div className="nav__header_mobile__background" />
            <div className="nav__header_mobile__menu">
                <Nav className="nav__header_mobile__navlist">
                    {links.map((link, index) => (
                        <Nav.Item
                            key={index}
                            className="nav__header_mobile__navitem">
                            <Nav.Link
                                className="nav__header_mobile__navlink"
                                href={link.path}>
                                {link.name}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
            </div>
        </div>
    );
};

// Prop types for navmobile
NavMobile.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

// Nav for footer menu
// Parameters are title and array of links with their path and name
const NavFooterMenu = ({ title, links }) => {
    return (
        <>
            <h2 className="nav__footer_menu__title">{title}</h2>
            <Nav className="nav__footer_menu__navlist">
                {links.map((link, index) => (
                    <Nav.Item key={index} className="nav__footer_menu__navitem">
                        <Nav.Link
                            className="nav__footer_menu__navlink"
                            href={link.path}>
                            {link.name}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </>
    );
};

// Prop types for navfootermenu
NavFooterMenu.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

// Nav for footer bottombar
// Inputable array of links with path and name
const NavFooterBottombar = ({ links }) => {
    return (
        <div className="nav__footer_bottombar">
            <Nav className="nav__footer_bottombar__navlist">
                {links.map((link, index) => (
                    <Nav.Item
                        key={index}
                        className="nav__footer_bottombar__navitem">
                        <Nav.Link
                            className="nav__footer_bottombar__navlink"
                            href={link.path}>
                            {link.name}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </div>
    );
};

// Prop types for navfooterbottombar
NavFooterBottombar.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

export { NavDesktop, NavMobile, NavFooterMenu, NavFooterBottombar };
