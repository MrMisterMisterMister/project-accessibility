import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";

const AboutUs = () => {
    const { t: translate } = useTranslation("aboutus"); 

    return (
        <>
            <Header />
            <main className="aboutus__page">
                <div className="aboutus__page_banner">
                    <Shape section="aboutus" position={["right", "left"]} />
                </div>
                <Container className="aboutus__page_container">
                    <h1 tabIndex="0">{translate("pageTitle")}</h1>
                    <p tabIndex="0" className="text-muted">{translate("lastModified")}</p>
                    <p tabIndex="0">{translate("intro.0")}</p>
                    <p tabIndex="0">{translate("intro.1")}</p>
                    <p tabIndex="0">{translate("intro.2")}</p>

                    <nav aria-label="Jump to content">
                        <ul>
                            <li><a href="#mission">{translate("mission.title")}</a></li>
                            <li><a href="#values">{translate("values.title")}</a></li>
                            <li><a href="#team">{translate("team.title")}</a></li>
                            <li><a href="#contact">{translate("contact.title")}</a></li>
                        </ul>
                    </nav>

                    <br />

                    <h4 tabIndex="0" id="mission">{translate("mission.title")}</h4>
                    <p tabIndex="0">{translate("mission.content")}</p>

                    <h4 tabIndex="0" id="values">{translate("values.title")}</h4>
                    <p tabIndex="0">{translate("values.list.0")}</p>
                    <p tabIndex="0">{translate("values.list.1")}</p>
                    <p tabIndex="0">{translate("values.list.2")}</p>

                    <h4 tabIndex="0" id="team">{translate("team.title")}</h4>
                    <p tabIndex="0">{translate("team.content")}</p>

                    <h4 tabIndex="0" id="contact">{translate("contact.title")}</h4>
                    <p tabIndex="0">{translate("contact.content")}</p>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default AboutUs;
