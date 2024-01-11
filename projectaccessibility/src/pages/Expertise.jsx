import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";

// Expertise page
const Expertise = () => {
    // Translation
    const { t: translate } = useTranslation("expertise");

    return (
        <>
            <Header />
            <div className="expertise__page">
                <div className="expertise__page_banner">
                    <Shape section="expertise" position={["left", "right"]} />
                </div>
                <Container className="expertise__page_container">
                    <h1 className="expertise__page_title">{translate("pageTitle")}</h1>
                    <p className="expertise__page_intro">{translate("intro")}</p>
                    {translate("cards", { returnObjects: true }).map(
                        (expertise, index) => (
                            <>
                                <h4>{translate(`cards.${index}.title`)}</h4>
                                <p>{translate(`cards.${index}.text`)}</p>
                            </>
                        )
                    )}
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Expertise;
