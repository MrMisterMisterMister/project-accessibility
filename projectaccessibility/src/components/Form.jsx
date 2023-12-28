import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { postRequest } from "../api/axiosClient";
import { ButtonSignup, ButtonLogin } from "../components/Button";
import { AlertError } from "../components/Alert";

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

            // reset form values
            e.target.reset();
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

// Form for Signup page
const FormSignup = () => {
    // Translation
    const { t: translate } = useTranslation();

    // State hook to track the selected user type in the form
    const [selectedUserType, setSelectedUserType] = useState("");

    // State hook to capture and manage form validation errors
    // Each field's error will be stored in this object
    const [errors, setErrors] = useState({});

    // Event handler for handling changes in the select input
    // This function is assigned to the select input, enabling it to detect changes and update the selected user type accordingly
    const handleSelectChange = (event) => {
        setSelectedUserType(event.target.value);
    };

    // Function triggered when the submit button is pressed in the form
    // Prevents the default form submission behavior to handle it manually
    const handleSignupSubmit = async (e) => {
        e.preventDefault();

        // Create a variable to store the form data submitted by the user
        const formData = new FormData(e.target);

        // Define endpoint paths based on the selected user type
        const endPoint = {
            1: "panelmember/",
            2: "company/"
        };

        // Make the POST call using axios post
        const res = postRequest(`signup/${endPoint[selectedUserType]}`, formData);

        // Handle the response from the POST call
        res.then(response => {
            console.log(response);

            // I still need to display a success to inform their signup was successfull
            // Also need to redirect them to the login page afterwards
            // And informating them they can login with their account that has just been made
            if (response.status === 200) {
                // Some simple message and reset the errors and form fields
                console.log("your mom");
                e.target.reset();
                setErrors({});
            }
        }).catch(error => {
            // Handle errors by updating the error state with the response data from the api server
            setErrors(error.response?.data);
        });
    };

    return (
        <>
            <AlertError data={errors} />
            <Form className="form__signup" acceptCharset="UTF-8" method="post" onSubmit={handleSignupSubmit}>
                <Form.Label className="form__label">{translate("signup.form.select.user")}</Form.Label>
                <Form.Select className="form__select_menu" onChange={handleSelectChange} defaultValue="" required>
                    <option value="" hidden>{translate("signup.form.select.option.placeholder")}</option>
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
        </>
    );
};

export { FormLogin, FormSignup };
