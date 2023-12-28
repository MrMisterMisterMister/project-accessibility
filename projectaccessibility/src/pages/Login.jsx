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
    const GoogleIcon = (
        <svg viewBox="0 0 256 262">
            <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" />
            <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" />
            <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" />
            <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" />
        </svg>
    );

    // Microsoft icon
    const MicrosoftIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><path fill="#f3f3f3" d="M0 0h23v23H0z"/>
            <path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/>
        </svg>
    );

    // Ditto
    const FacebookIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" fill="#1877f2">
            <path d="M108 0C48.486 0 0 48.486 0 108c0 53.915 39.24 98.352 90 106.299V139.688H63V108h27V84.827c0-29.73 17.68-46.173 44.894-46.173 12.901 0 27.106 2.296 27.106 2.296v29.87h-15.22c-15.02 0-19.694 9.337-19.694 18.962V108h33.47l-5.356 31.688H108v81.611C168.76 206.352 216 161.915 216 108C216 48.486 167.514 0 108 0z" />
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
                                <ButtonAuth icon={GoogleIcon} path="#" text={translate("login.auth.google")} />
                                <ButtonAuth icon={MicrosoftIcon} path="#" text={translate("login.auth.microsoft")} />
                                <ButtonAuth icon={FacebookIcon} path="#" text={translate("login.auth.facebook")} />
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
