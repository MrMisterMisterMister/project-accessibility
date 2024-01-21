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
                            <h2 className="contact__page_company_heading">{translate("subTitle")}</h2>
                            <p className="contact__page_company_description">{translate("subDescription")}</p>
                            <dl className="contact__page_company__list">
                                <div className="contact__page_company__information">
                                    <dt className="contact__page_company__icon">
                                        <Building />
                                    </dt>
                                    <dd className="contact__page_company__text">
                                        <p>{translate("company.address.streetName")}</p>
                                        <p>{translate("company.address.place")}</p>
                                    </dd>
                                </div>
                                <div className="contact__page_company__information">
                                    <dt className="contact__page_company__icon">
                                        <Telephone />
                                    </dt>
                                    <dd className="contact__page_company__text">
                                        {translate("company.phone")}
                                    </dd>
                                </div>
                                <div className="contact__page_company__information">
                                    <dt className="contact__page_company__icon">
                                        <Envelope />
                                    </dt>
                                    <dd className="contact__page_company__text">
                                        {translate("company.email")}
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
