import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";

// Contact page
const Contact = () => {
    // Translation
    const { t: translate } = useTranslation("contact");

    return (
        <>
            <Header />
            <div className="contact__page">
                <div className="contact__page_banner">
                    <Shape section="contact" position={["left", "right"]} />
                </div>
                <Container className="contact__page_container">
                    <h1 tabIndex="0" className="contact__page_title">
                        {translate("pageTitle")}
                    </h1>
                    <p tabIndex="0" className="contact__page_intro">
                        {translate("intro")}
                    </p>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
