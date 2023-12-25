import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { CardNews } from "./Card";

// News component
const News = () => {
    // Translation
    const { t: translate } = useTranslation();

    return (
        <section className="news__section">
            <Container className="news__section_container">
                <h2 className="news__section_title">
                    {translate("news.title")}
                </h2>
                <div className="news__section_group__card">
                    {translate("news.articles", { returnObjects: true }).map(
                        (article, index) => (
                            <CardNews
                                key={index}
                                img="src/assets/img/placeholder.jpg"
                                altText={translate(
                                    `news.articles.${index}.altText`,
                                )}
                                date={translate(`news.articles.${index}.date`)}
                                title={translate(
                                    `news.articles.${index}.title`,
                                )}
                                text={translate(
                                    `news.articles.${index}.description`,
                                )}
                            />
                        ),
                    )}
                </div>
            </Container>
        </section>
    );
};

export default News;
