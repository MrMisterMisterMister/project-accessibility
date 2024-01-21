import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { NavFooterMenu, NavFooterBottombar } from "./Nav";

// Footer copyright
function FooterCopyright ({ title }) {
    return (
        <span className="site__footer_copyright">
            &copy; {new Date().getFullYear()} {title}
        </span>
    );
}

// Prop type for footercopyright
FooterCopyright.propTypes = {
    title: PropTypes.string.isRequired
};

// Footer component
const Footer = () => {
    // Translation
    const { t: translate, i18n } = useTranslation("footer");

    // Initialize state
    // Default NL
    const [language, setLanguage] = useState(i18n.language || "nl");

    // Language change
    const changeLanguage = (language) => {
        setLanguage(language);
        i18n.changeLanguage(language);
        localStorage.setItem("i18nextLng", language);
    };

    // FooterMenu links
    const footerLinks = {
        goto: {
            title: translate("menu.goto.title"),
            links: [
                {
                    name: translate("menu.goto.links.home"),
                    path: "/"
                },
                {
                    name: translate("menu.goto.links.about"),
                    path: "/over-ons"
                },
                {
                    name: translate("menu.goto.links.expertise"),
                    path: "/expertise"
                },
                {
                    name: translate("menu.goto.links.news"),
                    path: "/news"
                },
                {
                    name: translate("menu.goto.links.contact"),
                    path: "/contact"
                }
            ]
        },
        tools: {
            title: translate("menu.tools.title"),
            links: [
                { name: translate("menu.tools.links.scan"), path: "#" },
                { name: translate("menu.tools.links.analysis"), path: "#" },
                { name: translate("menu.tools.links.reporting"), path: "#" }
            ]
        },
        service: {
            title: translate("menu.service.title"),
            links: [
                { name: translate("menu.service.links.audits"), path: "#" },
                { name: translate("menu.service.links.userResearch"), path: "#" },
                { name: translate("menu.service.links.training"), path: "#" },
                { name: translate("menu.service.links.advice"), path: "#" }
            ]
        }
    };

    // FooterBottombar links
    const generalLinks = [
        {
            name: translate("menu.bottombar.links.sitemap"),
            path: "/sitemap"
        },
        {
            name: translate("menu.bottombar.links.privacypolicy"),
            path: "/privacy-policy"
        },
        {
            name: translate("menu.bottombar.links.cookies"),
            path: "/cookies"
        }
    ];

    return (
        <footer className="site__footer">
            <Container className="site__footer_container">
                <div className="site__footer_menu">
                    <div className="site__footer_menu__logo">
                        <img
                            src="/img/brand/logo.png"
                            width="124.5"
                            height="150"
                            alt="Logo"
                            title="Project Accessibility"
                        />
                    </div>
                    {Object.keys(footerLinks).map((category, index) => (
                        <div key={index} className="site__footer_menu__column">
                            <NavFooterMenu
                                title={footerLinks[category].title}
                                links={footerLinks[category].links}
                            />
                        </div>
                    ))}
                </div>
            </Container>
            <Container className="site__footer_container">
                <div className="site__footer_bottombar border-top">
                    <FooterCopyright title="Stichting Accessibility" />
                    <div>
                        <NavFooterBottombar
                            links={generalLinks}
                            language={language}
                            changeLanguage={changeLanguage}
                        />
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
