import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { CardCase } from "./Card";

// Case component
const Case = () => {
    // Translation
    const { t: translate } = useTranslation();

    return (
        <section className="case__section">
            <Container className="case__section_container">
                <h2 className="case__section_title">
                    {translate("cases.title")}
                </h2>
                <div className="case__section_group__card">
                    {translate("cases.cases", { returnObjects: true }).map(
                        (item, index) => (
                            <CardCase
                                key={index}
                                img="img/placeholder.jpg"
                                altText={translate(
                                    `cases.cases.${index}.altText`
                                )}
                                title={translate(`cases.cases.${index}.title`)}
                                text={translate(
                                    `cases.cases.${index}.description`
                                )}
                                path="#"
                                linkText={translate(
                                    `cases.cases.${index}.linkText`
                                )}
                            />
                        )
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Case;
