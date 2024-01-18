import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";

// Contact component
const Contact = () => {
    // Translation
    const { t: translate } = useTranslation("contact");

    return (
        <>
            <Header />
            <main className="about__page">
                <div className="about__page_banner">
                    <Shape section="about" position={["right", "left"]} />
                </div>
                <Container className="about__page_container">
                    <section className="contact__section" id="contact">
                        <Container className="contact__section_container">
                            <div className="contact__section_wrapper">
                                <div className="contact__section_content">
                                    <br></br>
                                    <h1>{translate("ContactTitle")}</h1>
                                    <p className="contact__section_content__text">{translate("content")}</p>

                                    <p className="contact__section_contact_infotext">
                                        <MdEmail /> {translate("contact.email")}
                                    </p>
                                    <p className="contact__section_contact_infotext">
                                        <MdPhone /> {translate("contact.phone")}
                                    </p>
                                    <p className="contact__section_contact_infotext">
                                        <MdLocationOn /> {translate("contact.address")}
                                    </p>
                                </div>
                            </div>
                        </Container>
                    </section>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default Contact;