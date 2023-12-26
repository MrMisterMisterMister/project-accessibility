import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ButtonSignup, ButtonLogin } from "../components/Button";

// Login form component used for login page
// This form will make a post method to the api server
// The server will then validate the data send and return a response code
// Afterwards need to determine if login is succesful
// Cookies and/or sessions will also need to be made
const FormLogin = () => {
    // Translation
    const { t: translate } = useTranslation();

    // TODO make it working
    // this will need to post to api.clodsire.nl
    // then needs to get something to return
    // display error if needed
    // redirect to correct page if Ok()
    // also somehow assign the proper User type between Panelmember and company
    return (
        <Form className="form__login" acceptCharset="UTF-8" method="post">
            <Form.Label className="form__label">{translate("login.form.email")}</Form.Label>
            <Form.Control className="form__text_field" type="email" name="" placeholder={translate("login.form.emailPlaceholder")} required />
            <Form.Label className="form__label">{translate("login.form.password")}</Form.Label>
            <Form.Control className="form__text_field" type="password" name="" placeholder={translate("login.form.passwordPlaceholder")} required />
            <div className="form__login_option">
                <Form.Check.Input className="form__login_option__checkbox" type="checkbox" name="" />
                <Form.Check.Label className="form__login_option__label">{translate("login.form.checkbox")}</Form.Check.Label>
            </div>
            <ButtonLogin text={translate("login.form.button")} />
        </Form>
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
    // also need to make way to display a error message too
    // will need to add a select menu, for Panelmember and Company
    // Based on what is selected, need to show the right fields
    // can achieve it with usestates
    // only need to hide the Row section, since both company and panelmember
    // have to fill in their password and email
    // panelmember needs full name
    // company needs companyName and kvk
    return (
        // TODO ADD LOGO SOMEWHERE AND GO BACK TO HOME BREADCRUMB
        <Form className="form__signup" acceptCharset="UTF-8" method="post">
            <Form.Label className="form__label">{translate("signup.form.fullName")}</Form.Label>
            <Row>
                <Col lg={6}>
                    <Form.Control className="form__text_field" type="text" name="" placeholder="John" required />
                </Col>
                <Col lg={6}>
                    <Form.Control className="form__text_field" type="text" name="" placeholder="Doe" required />
                </Col>
            </Row>
            <Form.Label className="form__label">{translate("signup.form.email")}</Form.Label>
            <Form.Control className="form__text_field" type="email" name="" placeholder="you@example.com" required />
            <Form.Label className="form__label">{translate("signup.form.password")}</Form.Label>
            <Form.Control className="form__text_field" type="password" name="" placeholder={translate("signup.form.passwordPlaceholder")} required />
            <Form.Control className="form__text_field" type="password" name="" placeholder={translate("signup.form.confirmPasswordPlaceholder")} required />
            <ButtonSignup text={translate("signup.form.buttonText")} />
        </Form>
    );
};

export { FormLogin, FormSignup };
