import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';


// Render hamburger menu for mobile menu
const renderMenuSpans = () => {
    let spans = [];
    for (let i = 0; i < 6; i++) {
        spans.push(<span key={i} className="nav__header_mobile__span" />);
    }
    return spans;
}

// Nav for desktop
// Links as parameter with path and name
const NavDesktop = ({ links }) => {
    return (
        <div className="nav__header_desktop">
            <Nav className="nav__header_desktop__navlist">
                {links.map((link, index) => (
                    <NavItem key={index} className="nav__header_desktop__navitem">
                        <NavLink tag={Link} className="nav__header_desktop__navlink" to={link.path}>{link.name}</NavLink>
                    </NavItem>
                ))}
            </Nav>
        </div>
    );
}

// Nav for mobile
// Uses react hooks to toggle the menu state and assign proper class to body to prevent scrollable menu
const NavMobile = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuState = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle("site__header_nav_is__open");
    }

    return (
        <div className="nav__header_mobile">
            <input type="checkbox" className="nav__header_mobile__checkbox" id="site__header_nav__toggle" />
            <label className="nav__header_mobile__label" htmlFor="site__header_nav__toggle" onClick={toggleMenuState}>
                <span className="nav__header_mobile__icon">
                    {renderMenuSpans()}
                </span>
            </label>
            <div className="nav__header_mobile__background" />
            <div className="nav__header_mobile__menu">
                <Nav className="nav__header_mobile__navlist">
                    {links.map((link, index) => (
                        <NavItem key={index} className="nav__header_mobile__navitem">
                            <NavLink tag={Link} className="nav__header_mobile__navlink" to={link.path}>{link.name}</NavLink>
                        </NavItem>
                    ))}
                </Nav>
            </div>
        </div>
    );
}

// Nav for footer menu
// Parameters are title and array of links with their path and name
const NavFooterMenu = ({ title, links }) => {
    return (
        <>
            <h2 className="nav__footer_menu__title">{title}</h2>
            <Nav className="nav__footer_menu__navlist">
                {links.map((link, index) => (
                    <NavItem key={index} className="nav__footer_menu__navitem">
                        <NavLink tag={Link} className="nav__footer_menu__navlink" to={link.path}>{link.name}</NavLink>
                    </NavItem>
                ))}
            </Nav>
        </>
    );
}

// Nav for footer bottombar
// Inputable array of links with path and name
const NavFooterBottombar = ({ links }) => {
    return (
        <div className="nav__footer_bottombar">
            <Nav className="nav__footer_bottombar__navlist">
                {links.map((link, index) => (
                    <NavItem key={index} className="nav__footer_bottombar__navitem">
                        <NavLink tag={Link} className="nav__footer_bottombar__navlink" to={link.path}>{link.name}</NavLink>
                    </NavItem>
                ))}
            </Nav>
        </div>
    );
}

export { NavDesktop, NavMobile, NavFooterMenu, NavFooterBottombar };