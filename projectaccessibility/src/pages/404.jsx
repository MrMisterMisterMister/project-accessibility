import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ButtonLink } from "../components/Button";

// 404 page
const PageNotFound = () => {
    // Translation
    const { t: translate } = useTranslation("notfound");

    return (
        <div className="notFound__page">
            <Container className="notFound__page_container">
                <img
                    className="notFound__page_image"
                    src="/img/clodsire.png"
                    alt="Clodsire"
                    title="Clodsire"
                />
                <h1 tabIndex={0} className="notFound__page_title">
                    {translate("pageTitle")}
                </h1>
                <p tabIndex={0} className="notFound__page_text">
                    {translate("intro")}
                </p>
                <ButtonLink path="/" text={translate("button")} />
            </Container>
        </div>
    );
};

export default PageNotFound;
