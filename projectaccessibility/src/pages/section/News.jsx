import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { CardNews } from "../../components/Card";

// News section
const News = () => {
    // Translation
    const { t: translate } = useTranslation("news");

    return (
        <section className="news__section" id="news">
            <Container className="news__section_container">
                <h2 className="news__section_title">{translate("title")}</h2>
                <div className="news__section_group__card">
                    {translate("articles", { returnObjects: true })
                        .slice(0, 3)
                        .map((article, index) => (
                            <CardNews
                                key={index}
                                img="/img/placeholder.jpg"
                                altText={translate(`articles.${index}.altText`)}
                                date={translate(`articles.${index}.date`)}
                                title={translate(`articles.${index}.title`)}
                                text={translate(`articles.${index}.text`)}
                            />
                        ))}
                </div>
            </Container>
        </section>
    );
};

export default News;
