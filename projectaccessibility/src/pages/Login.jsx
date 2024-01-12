import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { PersonPlusFill } from "react-bootstrap-icons";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { createEndpoint } from "../api/axiosClient";
import axios from "axios";
import { FormLogin } from "../components/Form";
import { ButtonAuth } from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Login page
const Login = () => {
    // Translation
    const { t: translate } = useTranslation("login");

    // Svg file for google with color
    // Too lazy to fix this with bootstrap-icons
    // Wanted the right color
    const GoogleIcon = (
        <svg viewBox="0 0 256 262">
            <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
            />
            <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
            />
            <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
            />
            <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
            />
        </svg>
    );

    // Ditto
    const MicrosoftIcon = (
        <svg viewBox="0 0 23 23">
            <path d="M1 1h10v10H1z" fill="#f35325" />
            <path d="M12 1h10v10H12z" fill="#81bc06" />
            <path d="M1 12h10v10H1z" fill="#05a6f0" />
            <path d="M12 12h10v10H12z" fill="#ffba08" />
        </svg>
    );

    // Default login for google that react oauth google provides
    // Has more options, but for now just simple onSuccess
    const googleLogin = useGoogleLogin({
        // onSuccess, sends request to google api server with the tokenResponse as bearer
        // Then it returns the user info
        // Afterwards just need to send it to our backend to save it
        onSuccess: async (tokenResponse) => {
            // Calling google api with bearer token so we get access to it
            // Need a fresh axios without our predefined configs
            const userInfo = await axios.get(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
            );

            // Check if user info has stuff in it and Ok response
            if (userInfo.status === 200 && userInfo.data) {
                // Now we just send the information we got to our backend
                const response = await createEndpoint("google/login").post(userInfo.data);
                console.log(response);
                // Need to put some logic to check if the user got their account made
                // Then redirect back to dashboard I guess
            }
        }
    });

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
                                    icon={GoogleIcon}
                                    text={translate("auth.google")}
                                    action={googleLogin}
                                />
                                <ButtonAuth
                                    icon={MicrosoftIcon}
                                    text={translate("auth.microsoft")}
                                />
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
