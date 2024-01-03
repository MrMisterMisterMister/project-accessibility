import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { postRequest } from "../api/axiosClient";
import { useAuth } from "../provider/authProvider";
import { ButtonSubmit } from "../components/Button";
import { AlertError } from "../components/Alert";
import Cookies from "js-cookie";

// Form for login page
const FormLogin = () => {
    // Translation
    const { t: translate } = useTranslation("form");

    // Gives access to setToken from the useAuth hook
    const { setToken } = useAuth();

    // To handle navigation
    const navigate = useNavigate();

    // State hook to capture and manage form validation errors
    // Each field's error will be stored in this object
    const [formErrors, setFormErrors] = useState({});

    // Hook for form management
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ mode: "all" });

    // Function triggered when the submit button is pressed in the login form
    const handleLoginSubmit = (formData) => {
        // Make the POST call to the login endpoint
        const loginResponse = postRequest("login/", formData);

        // Handle the response from the POST call
        loginResponse
            .then((response) => {
                // Checks if the response has status code 200 and contains the token
                // If it contains token, useAuth provider and let magic happen
                // Afterwards redirect to protected route
                if (response.status === 200 && response.data && response.data.token) {
                    // Set authentication token
                    setToken(response.data.token);
                    Cookies.set("token", response.data.token);
                    // Redirect to correct page
                    navigate("/dashboard", { replace: true });
                    // Reset form and clear errors
                    reset();
                    setFormErrors({});
                }
            })
            .catch((error) => {
                // Handle errors by updating the error state with the response data from the api server
                setFormErrors(error.response?.data);
            });
    };

    return (
        <>
            <AlertError data={formErrors} />
            <Form
                className="form__login"
                acceptCharset="UTF-8"
                method="post"
                onSubmit={handleSubmit(handleLoginSubmit)}
                noValidate
            >
                <Form.Label className="form__label">
                    {translate("emailLabel")}
                </Form.Label>
                <Form.Control
                    className={`form__text_field ${errors.email ? "error" : ""}`}
                    type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: translate("error.emailRequired")
                        }
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    placeholder={translate("emailPlaceholder")}
                />
                {errors.email && (
                    <div className="form__error">{errors.email.message}</div>
                )}
                <Form.Label className="form__label">
                    {translate("passwordLabel")}
                </Form.Label>
                <Form.Control
                    className={`form__text_field ${errors.password ? "error" : ""}`}
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: translate(
                                "error.passwordRequired"
                            )
                        }
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                    placeholder={translate("passwordPlaceholder")}
                />
                {errors.password && (
                    <div className="form__error">{errors.password.message}</div>
                )}
                <div className="form__login_option">
                    <Form.Check.Input
                        className="form__login_option__checkbox"
                        type="checkbox"
                        name="remember"
                    />
                    <Form.Check.Label className="form__login_option__label">
                        {translate("login.rememberme")}
                    </Form.Check.Label>
                </div>
                <ButtonSubmit
                    style="button__login"
                    text={translate("login.buttonText")}
                />
            </Form>
        </>
    );
};

// Form for Signup page
const FormSignup = () => {
    // Translation
    const { t: translate } = useTranslation("form");

    // State hook to track the selected user type in the form
    const [selectedUserType, setSelectedUserType] = useState("");

    // State hook to capture and manage form validation errors
    // Each field's error will be stored in this object
    const [formErrors, setFormErrors] = useState({});

    // Hook for form management
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm({ mode: "all" });

    // Event handler for handling changes in the select input
    // This function is assigned to the select input, enabling it to detect changes and update the selected user type accordingly
    const handleSelectChange = (event) => {
        setSelectedUserType(event.target.value);
    };

    // Function triggered when the submit button is pressed in the signup form
    // Prevents the default form submission behavior to handle it manually
    const signupSubmit = async (formData) => {
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
                // I still need to display a success to inform their signup was successfull
                // Also need to redirect them to the login page afterwards
                // And informating them they can login with their account that has just been made
                if (response.status === 200) {
                    // Some simple message and reset the errors and form fields
                    console.log("your mom");
                    reset();
                    setFormErrors({});
                    setSelectedUserType("");
                }
            })
            .catch((error) => {
                // Handle errors by updating the error state with the response data from the api server
                setFormErrors(error.response?.data);
            });
    };

    return (
        <>
            <AlertError data={formErrors} />
            <Form
                className="form__signup"
                acceptCharset="UTF-8"
                method="post"
                onSubmit={handleSubmit(signupSubmit)}
                noValidate
            >
                <Form.Label className="form__label">
                    {translate("userTypeLabel")}
                </Form.Label>
                <Form.Select
                    className={`form__select_menu ${errors.userType ? "error" : ""}`}
                    {...register("userType", {
                        required: {
                            value: true,
                            message: translate(
                                "error.userTypeRequired"
                            )
                        },
                        onChange: (event) => {
                            handleSelectChange(event);
                        }
                    })}
                    aria-invalid={errors.userType ? "true" : "false"}
                    defaultValue=""
                >
                    <option value="" hidden>
                        {translate("userTypeOptions.placeholder")}
                    </option>
                    <option value="1">
                        {translate("userTypeOptions.panelMember")}
                    </option>
                    <option value="2">
                        {translate("userTypeOptions.company")}
                    </option>
                </Form.Select>
                {errors.userType && (
                    <div className="form__error">{errors.userType.message}</div>
                )}
                {selectedUserType === "1" && (
                    <>
                        <Form.Label className="form__label">
                            {translate("fullNameLabel")}
                        </Form.Label>
                        <Row>
                            <Col lg={6}>
                                <Form.Control
                                    className={`form__text_field ${errors.firstName ? "error" : ""}`}
                                    type="text"
                                    {...register("firstName", {
                                        required: {
                                            value: true,
                                            message: translate(
                                                "error.firstNameRequired"
                                            )
                                        }
                                    })}
                                    aria-invalid={
                                        errors.firstName ? "true" : "false"
                                    }
                                    placeholder={translate(
                                        "firstNamePlaceholder"
                                    )}
                                />
                                {errors.firstName && (
                                    <div className="form__error">
                                        {errors.firstName.message}
                                    </div>
                                )}
                            </Col>
                            <Col lg={6}>
                                <Form.Control
                                    className={`form__text_field ${errors.lastName ? "error" : ""}`}
                                    type="text"
                                    {...register("lastName", {
                                        required: {
                                            value: true,
                                            message: translate(
                                                "error.lastNameRequired"
                                            )
                                        }
                                    })}
                                    aria-invalid={
                                        errors.lastName ? "true" : "false"
                                    }
                                    placeholder={translate(
                                        "lastNamePlaceholder"
                                    )}
                                />
                                {errors.lastName && (
                                    <div className="form__error">
                                        {errors.lastName.message}
                                    </div>
                                )}
                            </Col>
                        </Row>
                    </>
                )}
                {selectedUserType === "2" && (
                    <>
                        <Form.Label className="form__label">
                            {translate("companyLabel")}
                        </Form.Label>
                        <Row>
                            <Col lg={6}>
                                <Form.Control
                                    className={`form__text_field ${errors.kvk ? "error" : ""}`}
                                    type="text"
                                    {...register("kvk", {
                                        required: {
                                            value: true,
                                            message: translate(
                                                "error.kvkRequired"
                                            )
                                        }
                                    })}
                                    aria-invalid={errors.kvk ? "true" : "false"}
                                    placeholder={translate(
                                        "kvkPlaceholder"
                                    )}
                                />
                                {errors.kvk && (
                                    <div className="form__error">
                                        {errors.kvk.message}
                                    </div>
                                )}
                            </Col>
                            <Col lg={6}>
                                <Form.Control
                                    className={`form__text_field ${errors.name ? "error" : ""}`}
                                    type="text"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: translate(
                                                "companyNameRequired"
                                            )
                                        }
                                    })}
                                    aria-invalid={
                                        errors.name ? "true" : "false"
                                    }
                                    placeholder={translate(
                                        "companyNamePlaceholder"
                                    )}
                                />
                                {errors.name && (
                                    <div className="form__error">
                                        {errors.name.message}
                                    </div>
                                )}
                            </Col>
                        </Row>
                    </>
                )}
                <Form.Label className="form__label">
                    {translate("emailLabel")}
                </Form.Label>
                <Form.Control
                    className={`form__text_field ${errors.email ? "error" : ""}`}
                    type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: translate(
                                "error.emailRequired"
                            )
                        },
                        pattern: {
                            value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, // regex to check if email is a valid email
                            message: translate("error.emailPattern")
                        }
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    placeholder={translate("emailPlaceholder")}
                />
                {errors.email && (
                    <div className="form__error">{errors.email.message}</div>
                )}
                <Form.Label className="form__label">
                    {translate("passwordLabel")}
                </Form.Label>
                <Form.Control
                    className={`form__text_field ${errors.password ? "error" : ""}`}
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: translate(
                                "error.passwordRequired"
                            )
                        },
                        validate: {
                            hasUppercase: (value) =>
                                /^(?=.*[A-Z]).+$/.test(value) ||
                                translate(
                                    "error.passwordHasUppercase"
                                ), // regex for uppercase
                            hasLowercase: (value) =>
                                /^(?=.*[a-z]).+$/.test(value) ||
                                translate(
                                    "error.passwordHasLowercase"
                                ), // regex for lowercase
                            hasDigit: (value) =>
                                /^(?=.*\d).+$/.test(value) ||
                                translate("error.passwordHasDigit"), // regex for digit
                            hasSpecialChar: (value) =>
                                /^(?=.*[!@#$%^&*=_<>?.,;:|`~]).+$/.test(
                                    value
                                ) ||
                                translate(
                                    "error.passwordHasSpecialChar"
                                ) // regex for special char
                        },
                        minLength: {
                            value: 6,
                            message: translate(
                                "error.passwordMinLength"
                            )
                        }
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                    placeholder={translate("passwordPlaceholder")}
                />
                {errors.password && (
                    <div className="form__error">{errors.password.message}</div>
                )}
                <Form.Control
                    className={`form__text_field ${errors.passwordConfirm ? "error" : ""}`}
                    type="password"
                    {...register("passwordConfirm", {
                        required: {
                            value: true,
                            message: translate(
                                "passwordConfirmRequired"
                            )
                        },
                        validate: {
                            isMatch: (value) =>
                                value === watch("password") ||
                                translate(
                                    "error.passwordConfirmIsMatch"
                                )
                        }
                    })}
                    aria-invalid={errors.passwordConfirm ? "true" : "false"}
                    placeholder={translate(
                        "confirmPasswordPlaceholder"
                    )}
                />
                {errors.passwordConfirm && (
                    <div className="form__error">
                        {errors.passwordConfirm.message}
                    </div>
                )}
                <ButtonSubmit
                    style="button__signup"
                    text={translate("signup.buttonText")}
                />
            </Form>
        </>
    );
};

// Form to update email
// Need to catch the user type somewhere
// Also need to get their guid
const FormUserEmailUpdate = () => {
    // Translation
    const { t: translate } = useTranslation("form");

    // State hook to capture and manage form validation errors
    // Each field's error will be stored in this object
    const [formErrors, setFormErrors] = useState({});

    // React hook form
    // Define some const to use in forms
    // Set mode to all, so that validation will trigger on all input changes or blur events
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ mode: "all" });

    // Disable the submit from working since I don't want to see blank page everytime I submit
    const emailUpdateSubmit = async (formData) => {
        // Make the POST call using axios post
        // The guid still needs to be gotten, so it's for now not working
        // Test the post in postman instead with guid
        const updateEmailResponse = postRequest("users/{their guid}", formData); // Still need to be worked on

        // Handle the response from the POST call
        updateEmailResponse
            .then((response) => {
                // Need to configurate a success to user later
                console.log(response);
                reset();
            })
            .catch((error) => {
                // Catch the error and display it
                console.log(error.response);
            });
    };

    // Need to fix localization and error / success message
    return (
        <>
            <Form
                className="form__settings"
                acceptCharset="UTF-8"
                method="post"
                onSubmit={handleSubmit(emailUpdateSubmit)}
                noValidate
            >
                <Form.Label className="form__label">
                    New Email Address
                </Form.Label>
                <Form.Control
                    className={`form__text_field ${errors.email ? "error" : ""}`}
                    type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: translate("") // error message
                        }
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    placeholder="Enter Email" // localization
                />
                {errors.email && (
                    <div className="form__error">{errors.email.message}</div>
                )}
                <Form.Label className="form__label">
                    Confirm Email Address
                </Form.Label>
                <Form.Control
                    className={`form__text_field ${errors.emailConfirm ? "error" : ""}`}
                    type="email"
                    {...register("emailConfirm", {
                        required: {
                            value: true,
                            message: translate("") // error message
                        }
                    })}
                    aria-invalid={errors.emailConfirm ? "true" : "false"}
                    placeholder="Confirm Email" // localization
                />
                {errors.emailConfirm && (
                    <div className="form__error">{errors.emailConfirm.message}</div>
                )}
                <Form.Label className="form__label">
                    Current Password
                </Form.Label>
                <Form.Control
                    className="form__text_field"
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: translate("") // error message
                        }
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                    placeholder="Enter Password" // localization
                />
                {errors.password && (
                    <div className="form__error">{errors.password.message}</div>
                )}
                <ButtonSubmit style="button__settings" text={translate("")} />
            </Form>
        </>
    );
};

// Form to update password
const FormUserPasswordUpdate = () => {
    // Translation
    const { t: translate } = useTranslation();

    // State hook to capture and manage form validation errors
    // Each field's error will be stored in this object
    const [formErrors, setFormErrors] = useState({});

    // React hook form
    // Define some const to use in forms
    // Set mode to all, so that validation will trigger on all input changes or blur events
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm({ mode: "all" });

    // Ditto like I said above
    const passwordUpdateSubmit = async (formData) => {
        // Ditto like I said above
        // Make the POST call using axios post
        const updatePasswordResponse = postRequest(
            "users/{their guid}",
            formData
        ); // Still need to be worked on

        // Handle the response from the POST call
        updatePasswordResponse
            .then((response) => {
                // Need to configurate a success to user later
                console.log(response);
                reset();
            })
            .catch((error) => {
                // Catch the error and display it
                console.log(error.response);
            });
    };

    // Ditto like I said above
    return (
        <>
            <Form
                className="form__settings"
                acceptCharset="UTF-8"
                method="post"
                onSubmit={handleSubmit(passwordUpdateSubmit)}
                noValidate
            >
                <Form.Label className="form__label">
                    Current Password
                </Form.Label>
                <Form.Control
                    className={`form__text_field ${errors.passwordCurrent ? "error" : ""}`}
                    type="password"
                    {...register("passwordCurrent", {
                        required: {
                            value: true,
                            message: translate("") // localization
                        }
                    })}
                    aria-invalid={errors.passwordCurrent ? "true" : "false"}
                    placeholder="Enter Password" // localization
                />
                {errors.passwordCurrent && (
                    <div className="form__error">{errors.passwordCurrent.message}</div>
                )}
                <Form.Label className="form__label">
                    New Password
                </Form.Label>
                <Form.Control
                    className={`form__text_field ${errors.password ? "error" : ""}`}
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: translate("") // localization
                        },
                        validate: {
                            // regex for uppercase
                            hasUppercase: (value) =>
                                /^(?=.*[A-Z]).+$/.test(value) ||
                                translate(""), // localization
                            // regex for lowercase
                            hasLowercase: (value) =>
                                /^(?=.*[a-z]).+$/.test(value) ||
                                translate(""), // localization
                            // regex for digit
                            hasDigit: (value) =>
                                /^(?=.*\d).+$/.test(value) ||
                                translate(""), // localization
                            // regex for special char
                            hasSpecialChar: (value) =>
                                /^(?=.*[!@#$%^&*=_<>?.,;:|`~]).+$/.test(value) ||
                                translate("") // localization
                        },
                        minLength: {
                            value: 6,
                            message: translate("") // localization
                        }
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                    placeholder="Must be longer than 6 characters" // localization
                />
                {errors.password && (
                    <div className="form__error">{errors.password.message}</div>
                )}
                <Form.Label className="form__label">
                    Confirm New Password
                </Form.Label>
                <Form.Control
                    className={`form__text_field ${errors.passwordConfirm ? "error" : ""}`}
                    type="password"
                    {...register("passwordConfirm", {
                        required: {
                            value: true,
                            message: translate("") // localization
                        },
                        validate: {
                            isMatch: (value) =>
                                value === watch("password") ||
                                translate("") // localization
                        }
                    })}
                    aria-invalid={errors.passwordConfirm ? "true" : "false"}
                    placeholder="Confirm Password" // localization
                />
                {errors.passwordConfirm && (
                    <div className="form__error">{errors.passwordConfirm.message}</div>
                )}
                <ButtonSubmit style="button__settings" text={translate("")} />
            </Form>
        </>
    );
};

// Form for panel members to update their information
const FormPanelMemberProfileUpdate = () => {
    // Translation
    const { t: translate } = useTranslation("form");

    // State hook to capture and manage form validation errors
    // Each field's error will be stored in this object
    const [formErrors, setFormErrors] = useState({});

    // React hook form
    // Define some const to use in forms
    // Set mode to all, so that validation will trigger on all input changes or blur events
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ mode: "all" });

    // Ditto like I said above
    const panelMemberProfileUpdateSubmit = async (formData) => {
        // Ditto like I said above
        // Make the POST call using axios post
        const updatePanelMemberProfileResponse = postRequest(
            "panelmembers/{their guid}",
            formData
        ); // Still need to be worked on

        // Handle the response from the POST call
        updatePanelMemberProfileResponse
            .then((response) => {
                // Need to configurate a success to user later
                console.log(response);
                reset();
            })
            .catch((error) => {
                // Catch the error and display it
                console.log(error.response);
            });
    };

    // Ditto like I said above
    return (
        <>
            <Form
                className="form__settings"
                acceptCharset="UTF-8"
                method="post"
                onSubmit={handleSubmit(panelMemberProfileUpdateSubmit)}
                noValidate
            >
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Label className="form__label">
                            First Name
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.firstName ? "error" : ""}`}
                            type="text"
                            {...register("firstName", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.firstName ? "true" : "false"}
                            placeholder="John" // localization
                        />
                        {errors.firstName && (
                            <div className="form__error">{errors.firstName.message}</div>
                        )}
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Label className="form__label">
                            Last Name
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.lastName ? "error" : ""}`}
                            type="text"
                            {...register("lastName", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.lastName ? "true" : "false"}
                            placeholder="Doe" // localization
                        />
                        {errors.lastName && (
                            <div className="form__error">{errors.lastName.message}</div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            Phone Number
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.phone ? "error" : ""}`}
                            type="phone"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.phone ? "true" : "false"}
                            placeholder="Your Phone" // localization
                        />
                        {errors.phone && (
                            <div className="form__error">{errors.phone.message}</div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            Date of Birth
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.dateOfBirth ? "error" : ""}`}
                            type="date"
                            {...register("dateOfBirth", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.dateOfBirth ? "true" : "false"}
                            placeholder="Your Date of Birth" // localization
                        />
                        {errors.dateOfBirth && (
                            <div className="form__error">{errors.dateOfBirth.message}</div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            Address
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.address ? "error" : ""}`}
                            type="text"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.address ? "true" : "false"}
                            placeholder="Your Address" // localization
                        />
                        {errors.address && (
                            <div className="form__error">{errors.address.message}</div>
                        )}
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Label className="form__label">
                            Postal Code
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.postalcode ? "error" : ""}`}
                            type="text"
                            {...register("postalcode", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.postalcode ? "true" : "false"}
                            placeholder="Your Postal code" // localization
                        />
                        {errors.postalcode && (
                            <div className="form__error">{errors.postalcode.message}</div>
                        )}
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Label className="form__label">
                            Country
                        </Form.Label>
                        <Form.Select
                            className={`form__select_menu ${errors.country ? "error" : ""}`}
                            {...register("country", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.country ? "true" : "false"}
                        >
                            <option value="The Netherlands">The Netherlands</option>
                        </Form.Select>
                        {errors.postalcode && (
                            <div className="form__error">{errors.country.message}</div>
                        )}
                    </Col>
                </Row>
                <ButtonSubmit style="button__settings" text={translate("")} />
            </Form>
        </>
    );
};

// Form for company to update their page info
const FormCompanyProfileUpdate = () => {
    // Translation
    const { t: translate } = useTranslation();

    // State hook to capture and manage form validation errors
    // Each field's error will be stored in this object
    const [formErrors, setFormErrors] = useState({});

    // React hook form
    // Define some const to use in forms
    // Set mode to all, so that validation will trigger on all input changes or blur events
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ mode: "all" });

    // Ditto like I said above
    const companyProfileUpdateSubmit = async (formData) => {
        // Ditto like I said above
        // Make the POST call using axios post
        const updateCompanyProfileResponse = postRequest(
            "companies/{their guid}",
            formData
        ); // Still need to be worked on

        // Handle the response from the POST call
        updateCompanyProfileResponse
            .then((response) => {
                // Need to configurate a success to user later
                console.log(response);
                reset();
            })
            .catch((error) => {
                // Catch the error and display it
                console.log(error.response);
            });
    };

    // Ditto like I said above
    return (
        <>
            <Form
                className="form__settings"
                acceptCharset="UTF-8"
                method="post"
                onSubmit={handleSubmit(companyProfileUpdateSubmit)}
                noValidate
            >
                <Row>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            Chamber of Commerce Number
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.kvk ? "error" : ""}`}
                            type="text"
                            {...register("kvk", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.kvk ? "true" : "false"}
                            placeholder="KvK" // localization
                        />
                        {errors.kvk && (
                            <div className="form__error">{errors.kvk.message}</div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            Company Name
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.companyName ? "error" : ""}`}
                            type="text"
                            {...register("companyName", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.companyName ? "true" : "false"}
                            placeholder="Company Name" // localization
                        />
                        {errors.companyName && (
                            <div className="form__error">{errors.companyName.message}</div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            Phone Number
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.phone ? "error" : ""}`}
                            type="phone"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.phone ? "true" : "false"}
                            placeholder="Your Phone" // localization
                        />
                        {errors.phone && (
                            <div className="form__error">{errors.phone.message}</div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">Address</Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.address ? "error" : ""}`}
                            type="text"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.address ? "true" : "false"}
                            placeholder="Your Address" // localization
                        />
                        {errors.address && (
                            <div className="form__error">{errors.address.message}</div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            City
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.city ? "error" : ""}`}
                            type="text"
                            {...register("city", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.city ? "true" : "false"}
                            placeholder="Your City" // localization
                        />
                        {errors.city && (
                            <div className="form__error">{errors.city.message}</div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            Province
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.province ? "error" : ""}`}
                            type="text"
                            {...register("province", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.province ? "true" : "false"}
                            placeholder="Your province" // localization
                        />
                        {errors.province && (
                            <div className="form__error">{errors.province.message}</div>
                        )}
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Label className="form__label">
                            Postal Code
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.postalCode ? "error" : ""}`}
                            type="text"
                            {...register("postalCode", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.websiteUrl ? "true" : "false"}
                            placeholder="Your Postal code" // localization
                        />
                        {errors.websiteUrl && (
                            <div className="form__error">{errors.websiteUrl.message}</div>
                        )}
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Label className="form__label">
                            Website URL
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.websiteUrl ? "error" : ""}`}
                            type="url"
                            {...register("websiteUrl", {
                                required: {
                                    value: true,
                                    message: translate("") // localization
                                }
                            })}
                            aria-invalid={errors.websiteUrl ? "true" : "false"}
                            placeholder="Your Website URL" // localization
                        />
                        {errors.websiteUrl && (
                            <div className="form__error">{errors.websiteUrl.message}</div>
                        )}
                    </Col>
                </Row>
                <ButtonSubmit style="button__settings" text={translate("")} />
            </Form>
        </>
    );
};

export {
    FormLogin,
    FormSignup,
    FormUserEmailUpdate,
    FormUserPasswordUpdate,
    FormPanelMemberProfileUpdate,
    FormCompanyProfileUpdate
};
