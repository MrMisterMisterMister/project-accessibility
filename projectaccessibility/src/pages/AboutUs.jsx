import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";


const AboutUs = () => {
    const { t: translate } = useTranslation("about"); 

    return (
        <>
            <Header />
            <main className="aboutus__page">
                <div className="aboutus__page_banner">
                    <Shape section="cookies" position={["right", "left"]} />
                </div>
                <Container className="aboutus__page_container">
                    <h1 tabIndex="0">{translate("aboutus.pageTitle")}</h1>
                    <p tabIndex="0" className="text-muted">{translate("aboutus.lastModified")}</p>
                    <p tabIndex="0">{translate("aboutus.intro.0")}</p>
                    <nav aria-label="Jump to content">
                        <ul>
                            <li><a href="#mission">{translate("aboutus.mission.title")}</a></li>
                            <li><a href="#values">{translate("aboutus.values.title")}</a></li>
                            <li><a href="#team">{translate("aboutus.team.title")}</a></li>
                        </ul>
                    </nav>

                    <br />

                    <h4 tabIndex="0" id="mission">{translate("aboutus.mission.title")}</h4>
                    <p tabIndex="0">{translate("aboutus.mission.content")}</p>

                    <h4 tabIndex="0" id="values">{translate("aboutus.values.title")}</h4>
                    <p tabIndex="0">{translate("aboutus.values.list.0")}</p>
                    <p tabIndex="0">{translate("aboutus.values.list.1")}</p>
                    <p tabIndex="0">{translate("aboutus.values.list.2")}</p>

                    <h4 tabIndex="0" id="team">{translate("aboutus.team.title")}</h4>
                    <p tabIndex="0">{translate("aboutus.team.content")}</p>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default AboutUs;
