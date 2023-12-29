import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { postRequest } from "../api/axiosClient";
import { ButtonSignup, ButtonLogin } from "../components/Button";
import { AlertError } from "../components/Alert";

// Form for login page
const FormLogin = () => {
    // Translation
    const { t: translate } = useTranslation();

    // State hook to capture and manage form validation errors
    // Each field's error will be stored in this object
    const [errors, setErrors] = useState({});

    // Function triggered when the submit button is pressed in the login form
    const handleLoginSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        // Extract form data from the submitted form
        const formData = new FormData(e.target);

        // Make the POST call to the login endpoint
        const loginResponse = postRequest("login/", formData);

        // Handle the response from the POST call
        loginResponse
            .then((response) => {
                // Some simple validation to check if the response has status 200
                // If it does, display some kind of message
                // This still needs to be updated, so that afterwards the user gets send to their dashboard
                // Also need to get what kind of user they are, for example, panelmember or company
                // For now it resets the form values and errors
                // Will also have to add something for success
                if (response.status === 200) {
                    console.log("your mom");
                    e.target.reset();
                    setErrors({});
                }
            })
            .catch((error) => {
                // Handle errors by updating the error state with the response data from the api server
                setErrors(error.response?.data);
            });
    };

    return (
        <>
            <AlertError data={errors} />
            <Form
                className="form__login"
                acceptCharset="UTF-8"
                method="post"
                onSubmit={handleLoginSubmit}
            >
                <Form.Label className="form__label">
                    {translate("login.form.email")}
                </Form.Label>
                <Form.Control
                    className="form__text_field"
                    type="email"
                    name="email"
                    placeholder={translate("login.form.emailPlaceholder")}
                    required
                />
                <Form.Label className="form__label">
                    {translate("login.form.password")}
                </Form.Label>
                <Form.Control
                    className="form__text_field"
                    type="password"
                    name="password"
                    placeholder={translate("login.form.passwordPlaceholder")}
                    required
                />
                <div className="form__login_option">
                    <Form.Check.Input
                        className="form__login_option__checkbox"
                        type="checkbox"
                        name="remember"
                    />
                    <Form.Check.Label className="form__login_option__label">
                        {translate("login.form.checkbox")}
                    </Form.Check.Label>
                </div>
                <ButtonLogin text={translate("login.form.button")} />
            </Form>
        </>
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

    // Function triggered when the submit button is pressed in the signup form
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
        const signupResponse = postRequest(
            `signup/${endPoint[selectedUserType]}`,
            formData
        );

        // Handle the response from the POST call
        signupResponse
            .then((response) => {
                console.log(response);

                // I still need to display a success to inform their signup was successfull
                // Also need to redirect them to the login page afterwards
                // And informating them they can login with their account that has just been made
                if (response.status === 200) {
                    // Some simple message and reset the errors and form fields
                    console.log("your mom");
                    e.target.reset();
                    setErrors({});
                    setSelectedUserType("");
                }
            })
            .catch((error) => {
                // Handle errors by updating the error state with the response data from the api server
                setErrors(error.response?.data);
            });
    };

    return (
        <>
            <AlertError data={errors} />
            <Form
                className="form__signup"
                acceptCharset="UTF-8"
                method="post"
                onSubmit={handleSignupSubmit}
            >
                <Form.Label className="form__label">
                    {translate("signup.form.select.user")}
                </Form.Label>
                <Form.Select
                    className="form__select_menu"
                    onChange={handleSelectChange}
                    defaultValue=""
                    required
                >
                    <option value="" hidden>
                        {translate("signup.form.select.option.placeholder")}
                    </option>
                    <option value="1">
                        {translate("signup.form.select.option.panelmember")}
                    </option>
                    <option value="2">
                        {translate("signup.form.select.option.company")}
                    </option>
                </Form.Select>
                {selectedUserType === "1" && (
                    <>
                        <Form.Label className="form__label">
                            {translate("signup.form.fullName")}
                        </Form.Label>
                        <Row>
                            <Col lg={6}>
                                <Form.Control
                                    className="form__text_field"
                                    type="text"
                                    name="FirstName"
                                    placeholder={translate(
                                        "signup.form.firstNamePlaceholder"
                                    )}
                                    required
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Control
                                    className="form__text_field"
                                    type="text"
                                    name="LastName"
                                    placeholder={translate(
                                        "signup.form.lastNamePlaceholder"
                                    )}
                                    required
                                />
                            </Col>
                        </Row>
                    </>
                )}
                {selectedUserType === "2" && (
                    <>
                        <Form.Label className="form__label">
                            {translate("signup.form.company")}
                        </Form.Label>
                        <Row>
                            <Col lg={6}>
                                <Form.Control
                                    className="form__text_field"
                                    type="text"
                                    name="Kvk"
                                    placeholder={translate(
                                        "signup.form.companyKvk"
                                    )}
                                    required
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Control
                                    className="form__text_field"
                                    type="text"
                                    name="Name"
                                    placeholder={translate(
                                        "signup.form.companyName"
                                    )}
                                    required
                                />
                            </Col>
                        </Row>
                    </>
                )}
                <Form.Label className="form__label">
                    {translate("signup.form.email")}
                </Form.Label>
                <Form.Control
                    className="form__text_field"
                    type="email"
                    name="Email"
                    placeholder={translate("signup.form.emailPlaceholder")}
                    required
                />
                <Form.Label className="form__label">
                    {translate("signup.form.password")}
                </Form.Label>
                <Form.Control
                    className="form__text_field"
                    type="password"
                    name="Password"
                    placeholder={translate("signup.form.passwordPlaceholder")}
                    required
                />
                <Form.Control
                    className="form__text_field"
                    type="password"
                    name="PasswordConfirm"
                    placeholder={translate(
                        "signup.form.confirmPasswordPlaceholder"
                    )}
                    required
                />
                <ButtonSignup text={translate("signup.form.buttonText")} />
            </Form>
        </>
    );
};

export { FormLogin, FormSignup };
