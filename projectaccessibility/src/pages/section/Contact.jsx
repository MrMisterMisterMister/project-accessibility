import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ButtonContact } from "../../components/Button";

<<<<<<<< HEAD:projectaccessibility/src/pages/section/Contact.jsx
// Contact section
const Contact = () => {
========
// Contact component
const SignUpPortal = () => {
>>>>>>>> development:projectaccessibility/src/components/SignUpPortal.jsx
    // Translation
    const { t: translate } = useTranslation("signupPortal");

    return (
        <section className="signupPortal__section" id="signupPortal">
            <Container className="signupPortal__section_container">
                <div className="signupPortal__section_wrapper">
                    <div className="signupPortal__section_content">
                        <h2 className="signupPortal__section_content__title">{translate("title")}</h2>
                        <p className="signupPortal__section_content__text">{translate("description")}</p>
                        <div className="signupPortal__section_content_button">
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
}
export default SignUpPortal;