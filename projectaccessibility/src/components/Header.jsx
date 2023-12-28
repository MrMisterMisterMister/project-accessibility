import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { NavDesktop, NavMobile } from "./Nav";

// Header component
const Header = () => {
    // Translation
    const { t: translate } = useTranslation();

    // Header nav links
    const websiteLinks = [
        { name: translate("header.menu.home"), path: "/" },
        { name: translate("header.menu.about"), path: "/over-ons" },
        { name: translate("header.menu.expertise"), path: "/expertise" },
        { name: translate("header.menu.news"), path: "/actueel" },
        { name: translate("header.menu.contact"), path: "/contact" },
        { name: translate("header.menu.signup"), path: "/signup" },
        { name: translate("header.menu.signin"), path: "/login" }
    ];

    return (
        <header className="site__header">
            <Container className="site__header_container" fluid>
                <Navbar.Brand href="/">
                    <img
                        src="img/brand/logo_black_text_light.png"
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
