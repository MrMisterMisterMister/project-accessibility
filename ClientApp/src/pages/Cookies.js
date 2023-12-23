import React from "react";
import { Container } from "reactstrap";
import { useTranslation } from "react-i18next";
import Shape from "../components/Shape";

// Cookies page
const Cookies = () => {
    // Translation
    const { t: translate } = useTranslation();

    return (
        <div className="cookies__page">
            <div className="cookies__page_banner">
                <Shape section="cookies" position={["right", "left"]} />
            </div>
            <Container className="cookies__page_container">
                <h1>{translate("cookies.pageTitle")}</h1>
                <p className="text-muted">{translate("cookies.lastModified")}</p>
                <p>{translate("cookies.intro")}</p>

                <h4>{translate("cookies.cookieTypes.functionalCookies.title")}</h4>
                <p>{translate("cookies.cookieTypes.functionalCookies.content")}</p>

                <h4>{translate("cookies.cookieTypes.performanceCookies.title")}</h4>
                <p>{translate("cookies.cookieTypes.performanceCookies.content")}</p>

                <h4>{translate("cookies.cookieTypes.trackingCookies.title")}</h4>
                <p>{translate("cookies.cookieTypes.trackingCookies.content")}</p>

                <h4>{translate("cookies.retentionPeriod.title")}</h4>
                <p>{translate("cookies.retentionPeriod.content.0")}</p>
                <p>{translate("cookies.retentionPeriod.content.1")}</p>

                <h4>{translate("cookies.cookieManagement.title")}</h4>
                <p>{translate("cookies.cookieManagement.content")}</p>

                <h4>{translate("cookies.changesInCookie.title")}</h4>
                <p>{translate("cookies.changesInCookie.content")}</p>

                <h4>{translate("cookies.contactDetails.title")}</h4>
                <p>{translate("cookies.contactDetails.content")}</p>
            </Container>
        </div>
    );
};

export default Cookies;
