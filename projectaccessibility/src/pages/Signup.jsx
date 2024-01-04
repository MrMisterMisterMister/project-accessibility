import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FormSignup } from "../components/Form";

// Signup page
const Signup = () => {
    // Translation
    const { t: translate } = useTranslation();

    return (
        <div className="signup__page">
            <div className="signup__page_container">
                <div className="signup__page_side_banner signup__page_column" />
                <div className="signup__page_registration signup__page_column">
                    <div className="signup__page_registration__content">
                        <Container>
                            <h2 className="signup__page_registration__title">
                                {translate("signup.pageTitle")}
                            </h2>
                            <div className="signup__page_registration__form_signup">
                                <FormSignup />
                            </div>
                            <p className="signup__page_registration__login">
                                {translate("signup.alreadyHaveAccount")}{" "}
                                <a href="/login">{translate("signup.logIn")}</a>
                            </p>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
