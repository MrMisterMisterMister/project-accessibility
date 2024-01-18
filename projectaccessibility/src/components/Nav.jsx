import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Navbar, Nav } from "react-bootstrap";

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
                        className="nav__header_desktop__navitem"
                    >
                        <Nav.Link
                            className="nav__header_desktop__navlink"
                            href={link.path}
                        >
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
                onClick={toggleMenuState}
                data-testid="nav-menu-toggle"
            >
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
                            className="nav__header_mobile__navitem"
                        >
                            <Nav.Link
                                className="nav__header_mobile__navlink"
                                href={link.path}
                            >
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
                            href={link.path}
                        >
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
const NavFooterBottombar = ({ links, language, changeLanguage }) => {
    return (
        <div className="nav__footer_bottombar">
            <Nav className="nav__footer_bottombar__navlist">
                {links.map((link, index) => (
                    <Nav.Item
                        key={index}
                        className="nav__footer_bottombar__navitem"
                    >
                        <Nav.Link
                            className="nav__footer_bottombar__navlink"
                            href={link.path}
                        >
                            {link.name}
                        </Nav.Link>
                    </Nav.Item>
                ))}
                <Nav.Item className="nav__footer_bottombar__navitem">
                    <Nav.Link
                        className="nav__footer_bottombar__navlink"
                        onClick={() => changeLanguage(language === "nl" ? "en" : "nl")}
                        aria-label="Language switcher"
                        role="button"
                    >
                        {language === "nl" ? "English" : "Nederlands"}
                    </Nav.Link>
                </Nav.Item>
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
    ).isRequired,
    changeLanguage: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired
};

// The nav for dashboard page
// For now the username and profile picture are props
const NavDashboardTopNav = ({
    picturePath,
    pictureAlt,
    userName,
    userMenuItems,
    onNavItemClick
}) => {
    // State to check if the dropdown is open or not
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);

    // Function to toggle the dropdown
    const toggleDropdown = () => {
        setUserMenuOpen(!isUserMenuOpen);
    };

    return (
        <div className="nav__dashboard_topnav">
            <Container className="nav__dashboard_topnav__container">
                <div className="nav__dashboard_topnav__brand">
                    <Navbar.Brand href="/dashboard">
                        <img
                            src="/img/brand/logo_white_text_dark.png"
                            width="278"
                            height="60"
                            alt="Logo"
                            title="Project Accessibility"
                        />
                    </Navbar.Brand>
                </div>
                <div className="nav__dashboard_topnav__profile">
                    <Nav.Link
                        className="nav__dashboard_topnav__user"
                        aria-expanded={isUserMenuOpen ? "true" : "false"}
                        onClick={toggleDropdown}
                        id="userProfileDropdown"
                    >
                        <img
                            className="nav__dashboard_topnav__user_picture"
                            src={picturePath}
                            alt={pictureAlt}
                        />
                        <span className="nav__dashboard_topnav__user_name">
                            {userName}
                        </span>
                    </Nav.Link>
                    {isUserMenuOpen && (
                        <div
                            className="nav__dashboard_topnav__user_dropdown"
                            aria-labelledby="userProfileDropdown"
                        >
                            {userMenuItems.map((item, index) => (
                                <Nav.Link
                                    key={index}
                                    className="nav__dashboard_topnav__user_dropdown__item"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onNavItemClick(item.page);
                                    }}
                                >
                                    <span className="nav__dashboard_topnav__user_dropdown__icon">
                                        {item.icon}
                                    </span>
                                    <span className="nav__dashboard_topnav__user_dropdown__label">
                                        {item.label}
                                    </span>
                                </Nav.Link>
                            ))}
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

// Prop types for navdashboardtopnav
NavDashboardTopNav.propTypes = {
    picturePath: PropTypes.string.isRequired,
    pictureAlt: PropTypes.string.isRequired,
    userName: PropTypes.string,
    userMenuItems: PropTypes.arrayOf(
        PropTypes.shape({
            page: PropTypes.node,
            icon: PropTypes.object.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    onNavItemClick: PropTypes.func.isRequired
};

// The bottom part of the nav for dashboard page
// Can load in components to get the right one for each portal
const NavDashboardBottomNav = ({ navItems, onNavItemClick }) => {
    return (
        <div className="nav__dashboard_bottomnav">
            <Container>
                <Nav className="nav__dashboard_bottomnav__menu_nav ">
                    {navItems.map((item, index) => (
                        <Nav.Item
                            key={index}
                            className={`nav__dashboard_bottomnav__menu_item ${item.active ? "active" : ""}`}
                        >
                            <Nav.Link
                                className="nav__dashboard_bottomnav__menu_link "
                                onClick={(e) => {
                                    e.preventDefault(); // so it doesn't trigger the default behavior of a tag
                                    onNavItemClick(item.page);
                                }}
                            >
                                <span className="nav__dashboard_bottomnav__menu_icon">
                                    {item.icon}
                                </span>
                                <span className="nav__dashboard_bottomnav__menu_title">
                                    {item.title}
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
            </Container>
        </div>
    );
};

// prop types for nav dashboard bottom nav
NavDashboardBottomNav.propTypes = {
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            page: PropTypes.node,
            icon: PropTypes.object.isRequired,
            title: PropTypes.string.isRequired,
            active: PropTypes.bool
        })
    ).isRequired,
    onNavItemClick: PropTypes.func.isRequired
};

export {
    NavDesktop,
    NavMobile,
    NavFooterMenu,
    NavFooterBottombar,
    NavDashboardTopNav,
    NavDashboardBottomNav
};
