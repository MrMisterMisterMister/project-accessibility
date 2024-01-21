import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { CardCase } from "../../components/Card";

// Case section
const Case = () => {
    // Translation
    const { t: translate } = useTranslation("cases");

    return (
        <section className="case__section" id="case">
            <Container className="case__section_container">
                <h2 className="case__section_title">{translate("title")}</h2>
                <div className="case__section_group__card">
                    {translate("cases", { returnObjects: true }).map((item, index) => (
                        <CardCase
                            key={index}
                            img="/img/placeholder.jpg"
                            altText={translate(`cases.${index}.altText`)}
                            title={translate(`cases.${index}.title`)}
                            text={translate(`cases.${index}.description`)}
                            path="#"
                            linkText={translate(`cases.${index}.linkText`)}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Case;
