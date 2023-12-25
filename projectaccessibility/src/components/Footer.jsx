import React from "react";
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

// Footer component
const Footer = () => {
    // Translation
    const { t: translate } = useTranslation();

    // FooterMenu links
    const footerLinks = {
        goto: {
            title: translate("footer.menu.goto.title"),
            links: [
                { name: translate("footer.menu.goto.links.home"), path: "/" },
                {
                    name: translate("footer.menu.goto.links.about"),
                    path: "/over-ons"
                },
                {
                    name: translate("footer.menu.goto.links.expertise"),
                    path: "/expertise"
                },
                {
                    name: translate("footer.menu.goto.links.news"),
                    path: "/actueel"
                },
                {
                    name: translate("footer.menu.goto.links.contact"),
                    path: "/contact"
                }
            ]
        },
        // TODO put in translation.json
        expertise: {
            title: "Expertise",
            links: [
                { name: "Lorem ipsum", path: "/" },
                { name: "Lorem ipsum", path: "/" },
                { name: "Lorem ipsum", path: "/" }
            ]
        },
        // TODO put in translation.json
        tools: {
            title: "Tools",
            links: [
                { name: "Lorem ipsum", path: "/" },
                { name: "Lorem ipsum", path: "/" },
                { name: "Lorem ipsum", path: "/" },
                { name: "Lorem ipsum", path: "/" }
            ]
        }
    };

    // FooterBottombar links
    const generalLinks = [
        {
            name: translate("footer.menu.bottombar.links.sitemap"),
            path: "/sitemap"
        },
        {
            name: translate("footer.menu.bottombar.links.privacypolicy"),
            path: "/privacy-policy"
        },
        {
            name: translate("footer.menu.bottombar.links.cookies"),
            path: "/cookies"
        }
    ];

    return (
        <footer className="site__footer">
            <Container className="site__footer_container">
                <div className="site__footer_menu">
                    <div className="site__footer_menu__logo">
                        <img
                            src="src/assets/img/brand/logo.png"
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
                    <NavFooterBottombar links={generalLinks} />
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
