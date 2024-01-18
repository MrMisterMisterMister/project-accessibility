import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";

// Cookies page
const Cookies = () => {
    // Translation
    const { t: translate } = useTranslation("cookies");

    return (
        <>
            <Header />
            <main className="cookies__page">
                <div className="cookies__page_banner">
                    <Shape section="cookies" position={["right", "left"]} />
                </div>
                <Container className="cookies__page_container">
                    <h1 tabIndex="0">{translate("pageTitle")}</h1>
                    <p tabIndex="0" className="text-muted">{translate("lastModified")}</p>
                    <p tabIndex="0">{translate("intro")}</p>

                    <nav aria-label="Jump to content">
                        <ul>
                            <li><a href="#functional-cookies">1. {translate("cookieTypes.functionalCookies.title")}</a></li>
                            <li><a href="#performance-cookies">2. {translate("cookieTypes.performanceCookies.title")}</a></li>
                            <li><a href="#tracking-cookies">3. {translate("cookieTypes.trackingCookies.title")}</a></li>
                            <li><a href="#retention-period">4. {translate("retentionPeriod.title")}</a></li>
                            <li><a href="#cookie-management">5. {translate("cookieManagement.title")}</a></li>
                            <li><a href="#changes-to-cookie-management">6. {translate("changesInCookie.title")}</a></li>
                            <li><a href="#contact-details">7. {translate("contactDetails.title")}</a></li>
                        </ul>
                    </nav>

                    <br />

                    <h2 tabIndex="0" id="functional-cookies">{translate("cookieTypes.functionalCookies.title")}</h2>
                    <p tabIndex="0">{translate("cookieTypes.functionalCookies.content")}</p>

                    <h2 tabIndex="0" id="performance-cookies">{translate("cookieTypes.performanceCookies.title")}</h2>
                    <p tabIndex="0">{translate("cookieTypes.performanceCookies.content")}</p>

                    <h2 tabIndex="0" id="tracking-cookies">{translate("cookieTypes.trackingCookies.title")}</h2>
                    <p tabIndex="0">{translate("cookieTypes.trackingCookies.content")}</p>

                    <h2 tabIndex="0" id="retention-period">{translate("retentionPeriod.title")}</h2>
                    <p tabIndex="0">{translate("retentionPeriod.content.0")}</p>
                    <p tabIndex="0">{translate("retentionPeriod.content.1")}</p>

                    <h2 tabIndex="0" id="cookie-management">{translate("cookieManagement.title")}</h2>
                    <p tabIndex="0">{translate("cookieManagement.content")}</p>

                    <h2 tabIndex="0" id="changes-to-cookie-management">{translate("changesInCookie.title")}</h2>
                    <p tabIndex="0">{translate("changesInCookie.content")}</p>

                    <h2 tabIndex="0" id="contact-details">{translate("contactDetails.title")}</h2>
                    <p tabIndex="0">{translate("contactDetails.content")}</p>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default Cookies;
