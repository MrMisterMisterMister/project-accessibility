import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { NavDesktop, NavMobile } from "./Nav";

// Header component
const Header = () => {
    // Translation
    const { t: translate } = useTranslation("header");

    // Header nav links
    const websiteLinks = [
        { name: translate("menu.home"), path: "/" },
        { name: translate("menu.about"), path: "/over-ons" },
        { name: translate("menu.expertise"), path: "/expertise" },
        { name: translate("menu.news"), path: "/actueel" },
        { name: translate("menu.contact"), path: "/contact" },
        { name: translate("menu.signup"), path: "/signup" },
        { name: translate("menu.signin"), path: "/login" }
    ];

    return (
        <header className="site__header">
            <Container className="site__header_container" fluid>
                <Navbar.Brand href="/">
                    <img
                        src="/img/brand/logo_black_text_light.png"
                        width="278"
                        height="60"
                        alt="Logo"
                        title="Project Accessibility"
                    />
                </Navbar.Brand>
                <NavDesktop links={websiteLinks} />
                <NavMobile links={websiteLinks} />
            </Container>
        </header>
    );
};

export default Header;
