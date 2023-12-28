import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ButtonHero } from "./Button";
import Shape from "./Shape";

// Hero component
const Hero = () => {
    // Translation
    const { t: translate } = useTranslation();

    return (
        <section className="hero__section">
            <Container className="hero__section_container">
                <div className="hero__section_wrapper">
                    <h1 className="hero__section_title">
                        {translate("hero.title")}
                    </h1>
                    <p className="hero__section_text">
                        {translate("hero.description")}
                    </p>
                    <ButtonHero text={translate("hero.buttonText")} path="/login" />
                </div>
            </Container>
            <Shape section="hero" position={["right", "bottom", "top"]} />
        </section>
    );
};

export default Hero;
