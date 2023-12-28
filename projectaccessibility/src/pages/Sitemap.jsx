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

    return (
        <>
            <Header />
            <div className="sitemap__page">
                <div className="sitemap__page_banner">
                    <Shape section="sitemap" position={["right", "left"]} />
                </div>
                <Container className="sitemap__page_container">
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Sitemap;
