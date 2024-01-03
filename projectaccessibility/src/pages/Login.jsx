import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FormLogin } from "../components/Form";
import { ButtonAuth } from "../components/Button";
import { PersonPlusFill } from "react-bootstrap-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Login page
const Login = () => {
    // Translation
    const { t: translate } = useTranslation();

    // Svg file for google with color
    // Too lazy to fix this with bootstrap-icons
    // Wanted the right color

    // Microsoft icon
    const MicrosoftIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><path fill="#f3f3f3" d="M0 0h23v23H0z"/>
            <path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/>
        </svg>
    );

    // Ditto
    const MicrosoftIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
            <path fill="#f35325" d="M1 1h10v10H1z" />
            <path fill="#81bc06" d="M12 1h10v10H12z" />
            <path fill="#05a6f0" d="M1 12h10v10H1z" />
            <path fill="#ffba08" d="M12 12h10v10H12z" />
        </svg>
    );

    return (
        <>
            <Header />
            <div className="login__page">
                <Container className="login__container">
                    <h2 className="login__page_title">{translate("login.pageTitle")}</h2>
                    <div className="login__page_panel">
                        <div className="login__page_authentication login__page_column">
                            <div className="login__page_content">
                                <FormLogin />
                            </div>
                        </div>
                        <div className="login__page_external login__page_column">
                            <div className="login__page_content">
                                <div className="login__page_seperator">
                                    <p className="login__page_seperator__text">or</p>
                                </div>
                                <ButtonAuth icon={<PersonPlusFill />} path="/signup" text={translate("login.auth.signup")} />
                                <ButtonAuth icon={MicrosoftIcon} path="#" text={translate("login.auth.microsoft")} />
                                <ButtonAuth icon={FacebookIcon} path="#" text={translate("login.auth.facebook")} />

                            </div>
                            <div id="signInDiv"></div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Login;
