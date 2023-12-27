import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { ButtonSignup, ButtonLogin } from "../components/Button";

// Login form component used for login page
// This form will make a post method to the api server
// The server will then validate the data send and return a response code
// Afterwards need to determine if login is succesful
// Cookies and/or sessions will also need to be made
const FormLogin = () => {
    // Translation
    const { t: translate } = useTranslation();

    // Create a state to save the form data
    // that will be used later for the post
    // const [formLoginData, setFormLoginData] = useState({
    //     email: "",
    //     password: "",
    //     remember: false // default value
    // });

    // function that triggers after submit button is pressed
    // for now it's just to see what's the data inside
    // the actual post method with axios will be done in a seperate component
    // so it's more organized
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        // see what's inside e
        console.log(e);

        // create new FormData object for the target
        const dd = new FormData(e.target);

        // loop object and save data
        const data = {};
        dd.forEach((value, key) => {
            data[key] = value;
        });

        // print
        console.log("Data:", data);
    };

    // TODO make it working
    // this will need to post to api.clodsire.nl
    // then needs to get something to return
    // display error if needed
    // redirect to correct page if Ok()
    // also somehow assign the proper User type between Panelmember and company
    return (
        <Form className="form__login" acceptCharset="UTF-8" method="post" onSubmit={handleLoginSubmit}>
            <Form.Label className="form__label">{translate("login.form.email")}</Form.Label>
            <Form.Control className="form__text_field" type="email" name="email" placeholder={translate("login.form.emailPlaceholder")} required />
            <Form.Label className="form__label">{translate("login.form.password")}</Form.Label>
            <Form.Control className="form__text_field" type="password" name="password" placeholder={translate("login.form.passwordPlaceholder")} required />
            <div className="form__login_option">
                <Form.Check.Input className="form__login_option__checkbox" type="checkbox" name="remember" />
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

    const handleSignupSubmit = (e) => {
        e.preventDefault();

        console.log("making post to create acc");

        // uuid
        const uuid = uuidv4();

        // make post
        axios.post(
            import.meta.env.VITE_API_URL_TEST + "users/",
            {
                Id: uuid, // needs to be generated from backend maybe
                Email: "yourmom@email.com",
                Password: "yourmom"
            },
            {
                // add header to make the form data json
                // otherwise it keeps giving error
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            // see response
            .then(
                response => console.log(response)
            )
            // log error
            .catch(
                error => console.error(error.response)
            );

        // get your mom
        axios.get(import.meta.env.VITE_API_URL_TEST + "users/" + uuid)
            .then(response => {
                console.log("found your mom: ", response.data);
            })
            .catch(error => {
                console.error("Error making GET request:", error);
            });
    };

    // Hook to determine which select option
    // has been selected in the form
    // stores them here
    const [selectedUserType, setSelectedUserType] = useState("");

    // event handler
    // assigned it to the select
    // so it can detect the change everytime and properly
    // set the right option
    const handleSelectChange = (event) => {
        setSelectedUserType(event.target.value);
    };

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
        <Form className="form__signup" acceptCharset="UTF-8" method="post" onSubmit={handleSignupSubmit}>
            <Form.Label className="form__label">{translate("signup.form.select.user")}</Form.Label>
            <Form.Select className="form__select_menu" onChange={handleSelectChange} defaultValue="default">
                <option value="default" disabled hidden>{translate("signup.form.select.option.placeholder")}</option>
                <option value="1">{translate("signup.form.select.option.panelmember")}</option>
                <option value="2">{translate("signup.form.select.option.company")}</option>
            </Form.Select>
            {selectedUserType === "1" && (
                <>
                    <Form.Label className="form__label">{translate("signup.form.fullName")}</Form.Label>
                    <Row>
                        <Col lg={6}>
                            <Form.Control className="form__text_field" type="text" name="[panelmember[first_name]" placeholder="John" required />
                        </Col>
                        <Col lg={6}>
                            <Form.Control className="form__text_field" type="text" name="[panelmember][last_name]" placeholder="Doe" required />
                        </Col>
                    </Row>
                </>
            )}
            {selectedUserType === "2" && (
                <>
                    <Form.Label className="form__label">{translate("signup.form.company")}</Form.Label>
                    <Row>
                        <Col lg={6}>
                            <Form.Control className="form__text_field" type="text" name="[company[kvk]" placeholder={translate("signup.form.companyKvk")} required />
                        </Col>
                        <Col lg={6}>
                            <Form.Control className="form__text_field" type="text" name="[company][name]" placeholder={translate("signup.form.companyName")} required />
                        </Col>
                    </Row>
                </>
            )}
            <Form.Label className="form__label">{translate("signup.form.email")}</Form.Label>
            <Form.Control className="form__text_field" type="email" name="email" placeholder="you@example.com" required />
            <Form.Label className="form__label">{translate("signup.form.password")}</Form.Label>
            <Form.Control className="form__text_field" type="password" name="password" placeholder={translate("signup.form.passwordPlaceholder")} required />
            <Form.Control className="form__text_field" type="password" name="password_confirm" placeholder={translate("signup.form.confirmPasswordPlaceholder")} required />
            <ButtonSignup text={translate("signup.form.buttonText")} />
        </Form>
    );
};

export { FormLogin, FormSignup };
