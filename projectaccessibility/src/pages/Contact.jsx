import React from "react";
import { Container } from "react-bootstrap";
import { Building, Telephone, Envelope } from "react-bootstrap-icons";
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
                    <div className="contact__page_form">
                        <h1 className="contact__page_title">{translate("pageTitle")}</h1>
                        <p className="contact__page_intro">{translate("intro")}</p>
                        <FormContact />
                    </div>
                    <div className="contact__page_company">
                        <div className="contact__page_company__details">
                            <h2 className="contact__page_company_heading">Get in touch</h2>
                            <p className="contact__page_company_description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quasi, ratione sint reprehenderit dignissimos aliquid sed maiores eius, quam debitis accusantium mollitia soluta consequatur eos? Veniam tempora et rem quae?
                            </p>
                            <dl className="contact__page_company__list">
                                {/* need to loop this, but meh, also localization */}
                                <div className="contact__page_company__information">
                                    <dt className="contact__page_company__icon">
                                        <Building />
                                    </dt>
                                    <dd className="contact__page_company__text">
                                        Lorem ipsum<br />
                                        Lorem ipsum
                                    </dd>
                                </div>
                                <div className="contact__page_company__information">
                                    <dt className="contact__page_company__icon">
                                        <Telephone />
                                    </dt>
                                    <dd className="contact__page_company__text">
                                        +31 30 239 82 70
                                    </dd>
                                </div>
                                <div className="contact__page_company__information">
                                    <dt className="contact__page_company__icon">
                                        <Envelope />
                                    </dt>
                                    <dd className="contact__page_company__text">
                                        info@accessibility.nl
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
