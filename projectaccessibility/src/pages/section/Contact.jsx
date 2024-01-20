import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ButtonContact } from "../../components/Button";

// Contact section
const Contact = () => {
    // Translation
    const { t: translate } = useTranslation("contact");

    return (
        <section className="contact__section" id="contact">
            <Container className="contact__section_container">
                <div className="contact__section_wrapper">
                    <div className="contact__section_content">
                        <h2 className="contact__section_content__title">{translate("title")}</h2>
                        <p className="contact__section_content__text">{translate("description")}</p>
                        <div className="contact__section_content_button">
                            <ButtonContact
                                style="signup"
                                path="/signup"
                                text={translate("buttons.signup")}
                            />
                            <ButtonContact
                                style="login"
                                path="/login"
                                text={translate("buttons.signin")}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
