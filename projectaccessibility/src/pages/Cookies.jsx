import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";

// Cookies page
const Cookies = () => {
    // Translation
    const { t: translate } = useTranslation();

    return (
        <>
            <Header />
            <main className="cookies__page">
                <div className="cookies__page_banner">
                    <Shape section="cookies" position={["right", "left"]} />
                </div>
                <Container className="cookies__page_container">
                    <h1 tabIndex="0">{translate("cookies.pageTitle")}</h1>
                    <p tabIndex="0" className="text-muted">
                        {translate("cookies.lastModified")}
                    </p>
                    <p tabIndex="0">{translate("cookies.intro")}</p>

                    <nav aria-label="Jump to content">
                        <ul>
                            <li>
                                <a href="#functional-cookies">
                                    {translate("cookies.cookieTypes.functionalCookies.title")}
                                </a>
                            </li>
                            <li>
                                <a href="#performance-cookies">
                                    {translate("cookies.cookieTypes.performanceCookies.title")}
                                </a>
                            </li>
                            <li>
                                <a href="#tracking-cookies">
                                    {translate("cookies.cookieTypes.trackingCookies.title")}
                                </a>
                            </li>
                            <li>
                                <a href="#retention-period">
                                    {translate("cookies.retentionPeriod.title")}
                                </a>
                            </li>
                            <li>
                                <a href="#cookie-management">
                                    {translate("cookies.cookieManagement.title")}
                                </a>
                            </li>
                            <li>
                                <a href="#changes-to-cookie-management">
                                    {translate("cookies.cookieManagement.title")}
                                </a>
                            </li>
                            <li>
                                <a href="#contact-details">
                                    {translate("cookies.contactDetails.title")}
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <br />

                    <h2 tabIndex="0" id="functional-cookies">
                        {translate(
                            "cookies.cookieTypes.functionalCookies.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "cookies.cookieTypes.functionalCookies.content"
                        )}
                    </p>

                    <h2 tabIndex="0" id="performance-cookies">
                        {translate(
                            "cookies.cookieTypes.performanceCookies.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "cookies.cookieTypes.performanceCookies.content"
                        )}
                    </p>

                    <h2 tabIndex="0" id="tracking-cookies">
                        {translate("cookies.cookieTypes.trackingCookies.title")}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "cookies.cookieTypes.trackingCookies.content"
                        )}
                    </p>

                    <h2 tabIndex="0" id="retention-period">{translate("cookies.retentionPeriod.title")}</h2>
                    <p tabIndex="0">{translate("cookies.retentionPeriod.content.0")}</p>
                    <p tabIndex="0">{translate("cookies.retentionPeriod.content.1")}</p>

                    <h2 tabIndex="0" id="cookie-management">{translate("cookies.cookieManagement.title")}</h2>
                    <p tabIndex="0">{translate("cookies.cookieManagement.content")}</p>

                    <h2 tabIndex="0" id="changes-to-cookie-management">{translate("cookies.changesInCookie.title")}</h2>
                    <p tabIndex="0">{translate("cookies.changesInCookie.content")}</p>

                    <h2 tabIndex="0" id="contact-details    ">{translate("cookies.contactDetails.title")}</h2>
                    <p tabIndex="0">{translate("cookies.contactDetails.content")}</p>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default Cookies;
