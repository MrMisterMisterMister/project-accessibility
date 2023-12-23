import React from "react";
import { Container } from "reactstrap";
import { useTranslation } from "react-i18next";
import { CardCase } from "./Card";

// Case component
const Case = () => {
    // Translation
    const { t: translate } = useTranslation();

    return (
        <section className="case__section">
            <Container className="case__section_container">
                <h2 className="case__section_title">{translate("case.title")}</h2>
                <div className="case__section_group__card">
                    {translate("case.cases", { returnObjects: true }).map(
                        (item, index) => (
                            <CardCase
                                key={index}
                                img={require("../assets/img/placeholder.jpg")}
                                altText={translate(`case.cases.${index}.altText`)}
                                title={translate(`case.cases.${index}.title`)}
                                text={translate(`case.cases.${index}.description`)}
                                path="/"
                                linkText={translate(`case.cases.${index}.linkText`)}
                            />
                        )
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Case;
