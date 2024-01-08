import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";

// Sitemap page
const Sitemap = () => {
    // Translation
    const { t: translate } = useTranslation("sitemap");

    // Create a const to save all the pages on this site
    // Afterwards just simply loop over the items and display them accordingly
    const pageLinks = [
        {
            title: translate("links.frontpage.title"),
            subPages: [{ name: translate("links.frontpage.home"), path: "/" }]
        },
        {
            title: translate("links.components.title"),
            subPages: [
                {
                    name: translate("links.components.about"),
                    path: "/over-ons"
                },
                {
                    name: translate("links.components.expertise"),
                    path: "/expertise"
                },
                {
                    name: translate("links.components.news"),
                    path: "/actueel"
                },
                {
                    name: translate("links.components.contact"),
                    path: "/contact"
                },
                {
                    name: translate("links.components.signup"),
                    path: "/signup"
                },
                {
                    name: translate("links.components.signin"),
                    path: "/login"
                }
            ]
        },
        {
            title: translate("links.other.title"),
            subPages: [
                {
                    name: translate("links.other.sitemap"),
                    path: "/sitemap"
                },
                {
                    name: translate("links.other.privacy"),
                    path: "/privacy-policy"
                },
                {
                    name: translate("links.other.cookies"),
                    path: "/cookies"
                }
            ]
        }
    ];

    return (
        <>
            <Header />
            <div className="sitemap__page">
                <div className="sitemap__page_banner">
                    <Shape section="sitemap" position={["right", "left"]} />
                </div>
                <Container className="sitemap__page_container">
                    <h1>{translate("pageTitle")}</h1>
                    <p className="text-muted">{translate("lastModified")}</p>
                    <p>{translate("intro")}</p>
                    {pageLinks.map((section, index) => (
                        <div key={index}>
                            <h4>{section.title}</h4>
                            {section.subPages.map((subPage, subIndex) => (
                                <p key={subIndex}>
                                    <a href={subPage.path}>{subPage.name}</a>
                                </p>
                            ))}
                        </div>
                    ))}
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Sitemap;
