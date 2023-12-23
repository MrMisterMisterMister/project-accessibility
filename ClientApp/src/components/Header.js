import { Link } from "react-router-dom";
import { useState } from "react";
import { Container, NavbarBrand } from "reactstrap";
import { useTranslation } from "react-i18next";
import { NavDesktop, NavMobile } from "./Nav";
import LanguageSwitcher from "./LanguageSwitcher";

// Header component
const Header = () => {
    // Translation
    const { t: translate, i18n } = useTranslation();

    // Initialize state
    // Default NL
    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "nl"
    );

    // Language change
    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value);
        localStorage.setItem("language", event.target.value);
    };

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
                <NavbarBrand tag={Link} to="/">
                    <img
                        src={require("../assets/img/brand/logo_black_text_light.png")}
                        width="278"
                        height="60"
                        alt="Logo"
                        title="Project Accessibility"
                    />
                </NavbarBrand>
                <NavDesktop links={websiteLinks} />
                <NavMobile links={websiteLinks} />
                <LanguageSwitcher
                    language={language}
                    handleChangeLanguage={handleChangeLanguage}
                />{" "}
                {/* TODO FIX STYLING AND POSITION */}
            </Container>
        </header>
    );
};

export default Header;
