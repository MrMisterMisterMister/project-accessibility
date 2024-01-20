import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";
import { FormContact } from "../components/Form";

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
                    <h1 className="contact__page_title">{translate("pageTitle")}</h1>
                    <p className="contact__page_intro">{translate("intro")}</p>
                    <FormContact />
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
