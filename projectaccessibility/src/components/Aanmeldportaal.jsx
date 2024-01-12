import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ButtonContact } from "./Button";

// Contact component
const Aanmeldportaal = () => {
    // Translation
    const { t: translate } = useTranslation("aanmeldportaal");

    return (
        <section className="aanmeldportaal__section" id="aanmeldportaal">
            <Container className="aanmeldportaal__section_container">
                <div className="aanmeldportaal__section_wrapper">
                    <div className="aanmeldportaal__section_content">
                        <h2 className="aanmeldportaal__section_content__title">{translate("title")}</h2>
                        <p className="aanmeldportaal__section_content__text">{translate("description")}</p>
                        <div className="aanmeldportaal__section_content_button">
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

export default Aanmeldportaal;
