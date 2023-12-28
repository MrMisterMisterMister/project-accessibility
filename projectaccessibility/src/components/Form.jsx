import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { postRequest } from "../api/axiosClient";
import { ButtonSignup, ButtonLogin } from "../components/Button";

// Login form component used for login page
// This form will make a post method to the api server
// The server will then validate the data send and return a response code
// Afterwards need to determine if login is succesful
// Cookies and/or sessions will also need to be made
const FormLogin = () => {
    // Translation
    const { t: translate } = useTranslation();

    // function that triggers after submit button is pressed
    // for now it's just to see what's the data inside
    // the actual post method with axios will be done in a seperate component
    // so it's more organized
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        //
        const formData = new FormData(e.target);

        // make the post call
        const res = postRequest("login/", formData);

        //
        res.then(response => {
            console.log(response);
            console.log(response.status);
        }).catch(error => {
            console.error(error.response);
        });
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

    // TODO SOMETHING TO HANDLE ERRORS STILL NEED TO BE MADE
    // AND NEED TO VERIFY PASSWORD LENGTH AND WHAT IT CONTAINS
    // EMAIL AS WELL AND NEED TO CHECK FOR DUPLICATES GUID (VERY SMALL CHANCE)

    // function that triggers if the
    // submit button is pressed
    // preventDefault makes the form not submit
    // inside there will be some logic to make the post call
    const handleSignupSubmit = async (e) => {
        e.preventDefault();

        // create variable to save the post form data
        // that the user is sending
        const formData = new FormData(e.target);
        // formData.append("id", uuidv4()); // for testing, this will be removed later, maybe generate it from backend

        // endpoint where the signup is headed to
        const endPoint = {
            1: "panelmember/",
            2: "company/"
        };

        // make the post call
        const res = postRequest(`signup/${endPoint[selectedUserType]}`, formData);

        // get the response back and see what's up
        res.then(response => {
            console.log(response);

            if (response.status === 200) {
                console.log("your mom");
            }
        }).catch(error => {
            console.error(error.response);
        });

        // TODO for now only panelmember works, that's because of those required fields
        // in companies, which cannot fit in our signup form
        // so that needs to be changed in backend first
        // Panelmember: guid (automatic), email, password, first_name, last_name
        // Company: guid (automatic), email, password, kvk, name
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
            <Form.Select className="form__select_menu" onChange={handleSelectChange} required>
                <option value="" disabled selected hidden>{translate("signup.form.select.option.placeholder")}</option>
                <option value="1">{translate("signup.form.select.option.panelmember")}</option>
                <option value="2">{translate("signup.form.select.option.company")}</option>
            </Form.Select>
            {selectedUserType === "1" && (
                <>
                    <Form.Label className="form__label">{translate("signup.form.fullName")}</Form.Label>
                    <Row>
                        <Col lg={6}>
                            <Form.Control className="form__text_field" type="text" name="FirstName" placeholder="John" required />
                        </Col>
                        <Col lg={6}>
                            <Form.Control className="form__text_field" type="text" name="LastName" placeholder="Doe" required />
                        </Col>
                    </Row>
                </>
            )}
            {selectedUserType === "2" && (
                <>
                    <Form.Label className="form__label">{translate("signup.form.company")}</Form.Label>
                    <Row>
                        <Col lg={6}>
                            <Form.Control className="form__text_field" type="text" name="Kvk" placeholder={translate("signup.form.companyKvk")} required />
                        </Col>
                        <Col lg={6}>
                            <Form.Control className="form__text_field" type="text" name="Name" placeholder={translate("signup.form.companyName")} required />
                        </Col>
                    </Row>
                </>
            )}
            <Form.Label className="form__label">{translate("signup.form.email")}</Form.Label>
            <Form.Control className="form__text_field" type="email" name="Email" placeholder="you@example.com" required />
            <Form.Label className="form__label">{translate("signup.form.password")}</Form.Label>
            <Form.Control className="form__text_field" type="password" name="Password" placeholder={translate("signup.form.passwordPlaceholder")} required />
            <Form.Control className="form__text_field" type="password" placeholder={translate("signup.form.confirmPasswordPlaceholder")} required />
            <ButtonSignup text={translate("signup.form.buttonText")} />
        </Form>
    );
};

export { FormLogin, FormSignup };
