import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";

// Sitemap page
const Sitemap = () => {
    // Translation
    const { t: translate } = useTranslation();

    // Create a const to save all the pages on this site
    // Afterwards just simply loop over the items and display them accordingly
    const pageLinks = [
        {
            title: translate("sitemap.links.frontpage.title"),
            subPages: [
                { name: translate("sitemap.links.frontpage.home"), path: "/" }
            ]
        },
        {
            title: translate("sitemap.links.components.title"),
            subPages: [
                { name: translate("sitemap.links.components.about"), path: "/over-ons" },
                { name: translate("sitemap.links.components.expertise"), path: "/expertise" },
                { name: translate("sitemap.links.components.news"), path: "/actueel" },
                { name: translate("sitemap.links.components.contact"), path: "/contact" },
                { name: translate("sitemap.links.components.signup"), path: "/signup" },
                { name: translate("sitemap.links.components.signin"), path: "/login" }
            ]
        },
        {
            title: translate("sitemap.links.other.title"),
            subPages: [
                { name: translate("sitemap.links.other.sitemap"), path: "/sitemap" },
                { name: translate("sitemap.links.other.privacy"), path: "/privacy-policy" },
                { name: translate("sitemap.links.other.cookies"), path: "/cookies" }
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
                    <h1>
                        {translate("sitemap.pageTitle")}
                    </h1>
                    <p className="text-muted">
                        {translate("sitemap.lastModified")}
                    </p>
                    <p>
                        {translate("sitemap.intro")}
                    </p>
                    {pageLinks.map((section, index) => (
                        <div key={index}>
                            <h4>{section.title}</h4>
                            {section.subPages.map((subPage, subIndex) => (
                                <a href={subPage.path} key={subIndex}>{subPage.name}</a>
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
