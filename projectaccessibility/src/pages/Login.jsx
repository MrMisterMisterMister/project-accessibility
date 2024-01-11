import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FormLogin } from "../components/Form";
import { ButtonAuth, ButtonGoogleSignIn } from "../components/Button";
import { PersonPlusFill } from "react-bootstrap-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Login page
const Login = () => {
    // Translation
    const { t: translate } = useTranslation("login");

    // Ditto
    const MicrosoftIcon = (
        <svg viewBox="0 0 23 23">
            <path d="M1 1h10v10H1z" fill="#f35325" />
            <path d="M12 1h10v10H12z" fill="#81bc06" />
            <path d="M1 12h10v10H1z" fill="#05a6f0" />
            <path d="M12 12h10v10H12z" fill="#ffba08" />
        </svg>
    );

    return (
        <>
            <Header />
            <div className="login__page">
                <Container className="login__container">
                    <h2 className="login__page_title">
                        {translate("pageTitle")}
                    </h2>
                    <div className="login__page_panel">
                        <div className="login__page_authentication login__page_column">
                            <div className="login__page_content">
                                <FormLogin />
                            </div>
                        </div>
                        <div className="login__page_external login__page_column">
                            <div className="login__page_content">
                                <div className="login__page_seperator">
                                    <p className="login__page_seperator__text">
                                        or
                                    </p>
                                </div>
                                <ButtonAuth
                                    icon={<PersonPlusFill />}
                                    path="/signup"
                                    text={translate("auth.signup")}
                                />
                                <ButtonAuth
                                    icon={MicrosoftIcon}
                                    path="#"
                                    text={translate("auth.microsoft")}
                                />

                                <ButtonGoogleSignIn />

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Login;
