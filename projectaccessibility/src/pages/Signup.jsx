import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FormSignup } from "../components/Form";

// Signup page
const Signup = () => {
    // Translation
    const { t: translate } = useTranslation();

    // LinkedIn icon (register)
    // const LinkedInIcon = (
    //     <svg height="72" viewBox="0 0 72 72" width="72" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd">
    //         <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF"/></g>
    //     </svg>
    // );

    return (
        <div className="signup__page">
            <div className="signup__page_container">
                <div className="signup__page_side_banner signup__page_column" />
                <div className="signup__page_registration signup__page_column">
                    <div className="signup__page_registration__content">
                        <Container>
                            <h2 className="signup__page_registration__title">{translate("signup.pageTitle")}</h2>
                            <div className="signup__page_registration__form_signup">
                                <FormSignup />
                            </div>
                            <p className="signup__page_registration__login">
                                {translate("signup.alreadyHaveAccount")} <a href="/login">{translate("signup.logIn")}</a>
                            </p>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
