import React from "react";
import { Container } from "react-bootstrap";
import { Lightbulb, Eye } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { CardAbout } from "../components/Card";

// About component
const About = () => {
    // Translation
    const { t: translate } = useTranslation("about");

    // Icons
    const iconMap = [
        <Lightbulb key="light-bulb" />,
        <Eye key="eye" />
    ];

    return (
        <section className="about__section">
            <Container className="about__section_container">
                <div className="about__section_banner">
                    <img className="about__section_image" src="/img/placeholder.jpg" />
                </div>
                <div className="about__section_content">
                    <h2 className="about__section_title">
                        {translate("pageTitle")}
                    </h2>
                    <p className="about__section_text">
                        {translate("intro")}
                    </p>
                    <div className="about__section_group__card">
                        {translate("about", { returnObjects: true }).map(
                            (about, index) => (
                                <CardAbout
                                    key={index}
                                    icon={iconMap[index]}
                                    title={translate(`about.${index}.title`)}
                                    text={translate(`about.${index}.text`)}
                                />
                            )
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
