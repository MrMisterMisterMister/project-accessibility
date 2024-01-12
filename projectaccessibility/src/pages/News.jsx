import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CardNews } from "../components/Card";
import Shape from "../components/Shape";

// News page
const News = () => {
    // Translation
    const { t: translate } = useTranslation("news");

    return (
        <>
            <Header />
            <div className="news__page">
                <div className="news__page_banner">
                    <Shape section="news" position={["left", "right"]} />
                </div>
                <Container className="news__page_container">
                    <h1 className="news__page_title">{translate("title")}</h1>
                    <p className="news__page_intro">{translate("intro")}</p>
                    <div className="news__page_articles">
                        {translate("articles", { returnObjects: true }).map((key, index) => (
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
            </div>
            <Footer />
        </>
    );
};

export default News;
