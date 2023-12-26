import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ButtonSignup } from "../components/Button";

// Login form component used for login page
// This form will make a post method to the api server
// The server will then validate the data send and return a response code
// Afterwards need to determine if login is succesful
// Cookies and/or sessions will also need to be made
const FormLogin = () => {
    // TODO fix
    return (
        <div className="form__login">
        </div>
    );
};

// Signup form component for register page
// This form has email, password and phone number fields
// The email will be validated with regex (or something else) to check for valid email
// The password must follow our password policy guidelines, so 1 uppercase, 1 lowercase,
// 1 special character, 1 number and must be 8 characters long
// The phone can also be validated, but not needed for now
// All form fields have the attribute required, so the user must fill it in
const FormSignup = () => {
    // Translation
    const { t: translate } = useTranslation();

    // TODO fill in name for post method
    // need to test the data send
    return (
        <div className="form__signup">
            <Form>
                <Form.Label className="form__label">{translate("Full Name")}</Form.Label>
                <Row>
                    <Col lg={6}>
                        <Form.Control className="form__text_field" type="text" name="" placeholder="John" required />
                    </Col>
                    <Col lg={6}>
                        <Form.Control className="form__text_field" type="text" name="" placeholder="Doe" required />
                    </Col>
                </Row>
                <Form.Label className="form__label">Email</Form.Label>
                <Form.Control className="form__text_field" type="email" name="" placeholder="you@example.com" required />
                <Form.Label className="form__label">Password (must be longer than 8 characters)</Form.Label>
                <Form.Control className="form__text_field" type="password" name="" placeholder="Password" required />
                <Form.Control className="form__text_field" type="password" name="" placeholder="Confirm Password" required />
                <ButtonSignup />
            </Form>
        </div>
    );
};

export { FormLogin, FormSignup };
