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
            <div className="cookies__page">
                <div className="cookies__page_banner">
                    <Shape section="cookies" position={["right", "left"]} />
                </div>
                <Container className="cookies__page_container">
                    <h1>{translate("pageTitle")}</h1>
                    <p className="text-muted">
                        {translate("lastModified")}
                    </p>
                    <p>{translate("intro")}</p>

                    <h4>
                        {translate(
                            "cookieTypes.functionalCookies.title"
                        )}
                    </h4>
                    <p>
                        {translate(
                            "cookieTypes.functionalCookies.content"
                        )}
                    </p>

                    <h4>
                        {translate(
                            "cookieTypes.performanceCookies.title"
                        )}
                    </h4>
                    <p>
                        {translate(
                            "cookieTypes.performanceCookies.content"
                        )}
                    </p>

                    <h4>
                        {translate("cookieTypes.trackingCookies.title")}
                    </h4>
                    <p>
                        {translate(
                            "cookieTypes.trackingCookies.content"
                        )}
                    </p>

                    <h4>{translate("retentionPeriod.title")}</h4>
                    <p>{translate("retentionPeriod.content.0")}</p>
                    <p>{translate("retentionPeriod.content.1")}</p>

                    <h4>{translate("cookieManagement.title")}</h4>
                    <p>{translate("cookieManagement.content")}</p>

                    <h4>{translate("changesInCookie.title")}</h4>
                    <p>{translate("changesInCookie.content")}</p>

                    <h4>{translate("contactDetails.title")}</h4>
                    <p>{translate("contactDetails.content")}</p>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Cookies;
