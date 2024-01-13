import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";

// About page
const About = () => {
    // Translation
    const { t: translate } = useTranslation("about");

    return (
        <>
            <Header />
            <main className="about__page">
                <div className="about__page_banner">
                    <Shape section="about" position={["right", "left"]} />
                </div>
                <Container className="about__page_container">
                    <h1 tabIndex="0">{translate("pageTitle")}</h1>
                    <p tabIndex="0">{translate("intro")}</p>
                    {translate("information", { returnObjects: true }).map((key, index) => (
                        <React.Fragment key={index}>
                            <h4 tabIndex="0">{translate(`information.${index}.title`)}</h4>
                            {Array.isArray(key.content)
                                ? (
                                    <React.Fragment>
                                        {key.content.map((item, itemIndex) => (
                                            <p key={itemIndex} tabIndex="0">{item}</p>
                                        ))}
                                    </React.Fragment>
                                )
                                : (
                                    <p tabIndex="0">{translate(`information.${index}.content`)}</p>
                                )
                            }
                        </React.Fragment>
                    ))}
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default About;
