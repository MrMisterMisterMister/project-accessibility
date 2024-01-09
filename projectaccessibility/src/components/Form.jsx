import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { createEndpoint } from "../api/axiosClient";
import { ButtonSubmit } from "../components/Button";
import { Alert } from "../components/Alert";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import PropTypes from "prop-types";

// Form for login page
const FormLogin = observer(() => {
    // Translation
    const { t: translate } = useTranslation("form");

    const { userStore, authStore } = useStore();

    // To handle navigation
    const navigate = useNavigate();

    // State hook to capture and manage form validation errors
    // Each field's error will be stored in this object
    const [formAlerts, setFormAlerts] = useState({
        errors: [],
        success: []
    });

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
        const loginResponse = createEndpoint("login/").post(formData);

        // Handle the response from the POST call
        loginResponse
            .then((response) => {
                // Checks if the response has status code 200 and contains the token
                // If it contains token, useAuth provider and let magic happen
                // Afterwards redirect to protected route
                if (
                    response.status === 200 &&
                    response.data &&
                    response.data.token
                ) {
                    // Configurate some shit
                    setFormAlerts({ success: { code: "UserHasLoggedIn" } });
                    // Set authentication token
                    authStore.setToken(response.data.token);
                    userStore.getUser();
                    // Reset form
                    reset();
                    // 1s delay
                    setTimeout(() => {
                        // Redirect to the correct page
                        navigate("/dashboard", { replace: true });
                    }, 1500);
                }
            })
            .catch((error) => {
                // Handle errors by updating the error state with the response data from the api server
                setFormAlerts({ error: error.response?.data });
            });
    };

    return (
        <>
            <Alert data={formAlerts} />
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
                            message: translate("error.passwordRequired")
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
                        {...register("rememberme")}
                        defaultChecked
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
});

// Form for Signup page
const FormSignup = () => {
    // Translation
    const { t: translate } = useTranslation("form");

    // State hook to track the selected user type in the form
    const [selectedUserType, setSelectedUserType] = useState("");

    // State hook to capture and manage form validation errors and success
    // Each field's error will be stored in this object
    const [formAlerts, setFormAlerts] = useState({
        errors: [],
        success: []
    });

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
        const signupResponse =
            createEndpoint(`signup/${endPoint[selectedUserType]}`)
                .post(formData);

        // Handle the response from the POST call
        signupResponse
            .then((response) => {
                // I still need to display a success to inform their signup was successfull
                // Also need to redirect them to the login page afterwards
                // And informating them they can login with their account that has just been made
                if (response.status === 200) {
                    // Set success message
                    setFormAlerts({ success: { code: "UserHasBeenCreated" } });
                    // Afterwards just reset everything
                    reset();
                    setSelectedUserType("");
                }
            })
            .catch((error) => {
                // Handle errors by updating the error state with the response data from the api server
                setFormAlerts({ error: error.response?.data });
            });
    };

    return (
        <>
            <Alert data={formAlerts} />
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
                            message: translate("error.userTypeRequired")
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
                                            message:
                                                translate("error.kvkRequired")
                                        }
                                    })}
                                    aria-invalid={errors.kvk ? "true" : "false"}
                                    placeholder={translate("kvkPlaceholder")}
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
                                                "error.companyNameRequired"
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
                            message: translate("error.emailRequired")
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
                            message: translate("error.passwordRequired")
                        },
                        validate: {
                            hasUppercase: (value) =>
                                /^(?=.*[A-Z]).+$/.test(value) ||
                                translate("error.passwordHasUppercase"), // regex for uppercase
                            hasLowercase: (value) =>
                                /^(?=.*[a-z]).+$/.test(value) ||
                                translate("error.passwordHasLowercase"), // regex for lowercase
                            hasDigit: (value) =>
                                /^(?=.*\d).+$/.test(value) ||
                                translate("error.passwordHasDigit"), // regex for digit
                            hasSpecialChar: (value) =>
                                /^(?=.*[!@#$%^&*=_<>?.,;:|`~]).+$/.test(
                                    value
                                ) || translate("error.passwordHasSpecialChar") // regex for special char
                        },
                        minLength: {
                            value: 6,
                            message: translate("error.passwordMinLength")
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
                            message: translate("error.passwordConfirmRequired")
                        },
                        validate: {
                            isMatch: (value) =>
                                value === watch("password") ||
                                translate("error.passwordConfirmIsMatch")
                        }
                    })}
                    aria-invalid={errors.passwordConfirm ? "true" : "false"}
                    placeholder={translate("passwordConfirmPlaceholder")}
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

// TODO
// Form to update email
// Need to catch the user type somewhere
// Also need to get their guid
const FormUserEmailUpdate = ({ userId }) => {
    // Translation
    const { t: translate } = useTranslation("form");

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
        const updateEmailResponse = createEndpoint(`users/${userId}`).post(formData);

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
                    {translate("emailNewLabel")}
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
                    placeholder={translate("emailNewPlaceholder")}
                />
                {errors.email && (
                    <div className="form__error">{errors.email.message}</div>
                )}
                <Form.Label className="form__label">
                    {translate("emailConfirmLabel")}
                </Form.Label>
                <Form.Control
                    className={`form__text_field ${errors.emailConfirm ? "error" : ""}`}
                    type="email"
                    {...register("emailConfirm", {
                        required: {
                            value: true,
                            message: translate("error.emailConfirmRequired")
                        }
                    })}
                    aria-invalid={errors.emailConfirm ? "true" : "false"}
                    placeholder={translate("emailConfirmPlaceholder")}
                />
                {errors.emailConfirm && (
                    <div className="form__error">
                        {errors.emailConfirm.message}
                    </div>
                )}
                <Form.Label className="form__label">
                    {translate("passwordCurrentLabel")}
                </Form.Label>
                <Form.Control
                    className="form__text_field"
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: translate("error.passwordCurrentRequired")
                        }
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                    placeholder={translate("passwordCurrentPlaceholder")}
                />
                {errors.password && (
                    <div className="form__error">{errors.password.message}</div>
                )}
                <ButtonSubmit text={translate("settings.buttonText")} />
            </Form>
        </>
    );
};

FormUserEmailUpdate.propTypes = {
    userId: PropTypes.string.isRequired
};

// TODO
// Form to update password
const FormUserPasswordUpdate = ({ userId }) => {
    // Translation
    const { t: translate } = useTranslation("form");

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
        // PUT request to update password
        const updatePasswordResponse = createEndpoint("users").put(userId, formData);

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
                    {translate("passwordCurrentLabel")}
                </Form.Label>
                <Form.Control
                    className={`form__text_field ${errors.passwordCurrent ? "error" : ""}`}
                    type="password"
                    {...register("passwordCurrent", {
                        required: {
                            value: true,
                            message: translate("error.passwordCurrentRequired")
                        }
                    })}
                    aria-invalid={errors.passwordCurrent ? "true" : "false"}
                    placeholder={translate("passwordCurrentPlaceholder")}
                />
                {errors.passwordCurrent && (
                    <div className="form__error">
                        {errors.passwordCurrent.message}
                    </div>
                )}
                <Form.Label className="form__label">
                    {translate("passwordNewLabel")}
                </Form.Label>
                <Form.Control
                    className={`form__text_field ${errors.password ? "error" : ""}`}
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: translate("error.passwordNewRequired")
                        },
                        validate: {
                            hasUppercase: (value) =>
                                // regex for uppercase
                                /^(?=.*[A-Z]).+$/.test(value) ||
                                translate("error.passwordHasUppercase"),
                            hasLowercase: (value) =>
                                // regex for lowercase
                                /^(?=.*[a-z]).+$/.test(value) ||
                                translate("error.passwordHasLowercase"),
                            hasDigit: (value) =>
                                // regex for digit
                                /^(?=.*\d).+$/.test(value) ||
                                translate("error.passwordHasDigit"),
                            hasSpecialChar: (value) =>
                                // regex for special char
                                /^(?=.*[!@#$%^&*=_<>?.,;:|`~]).+$/.test(
                                    value
                                ) || translate("error.passwordHasSpecialChar")
                        },
                        minLength: {
                            value: 6,
                            message: translate("error.passwordMinLength")
                        }
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                    placeholder={translate("passwordNewPlaceholder")}
                />
                {errors.password && (
                    <div className="form__error">{errors.password.message}</div>
                )}
                <Form.Label className="form__label">
                    {translate("passwordConfirmNewLabel")}
                </Form.Label>
                <Form.Control
                    className={`form__text_field ${errors.passwordConfirm ? "error" : ""}`}
                    type="password"
                    {...register("passwordConfirm", {
                        required: {
                            value: true,
                            message: translate(
                                "error.passwordConfirmNewRequired"
                            )
                        },
                        validate: {
                            isMatch: (value) =>
                                value === watch("password") ||
                                translate("error.passwordConfirmNewIsMatch")
                        }
                    })}
                    aria-invalid={errors.passwordConfirm ? "true" : "false"}
                    placeholder={translate("passwordConfirmNewPlaceholder")}
                />
                {errors.passwordConfirm && (
                    <div className="form__error">
                        {errors.passwordConfirm.message}
                    </div>
                )}
                <ButtonSubmit text={translate("settings.buttonText")} />
            </Form>
        </>
    );
};

FormUserPasswordUpdate.propTypes = {
    userId: PropTypes.string.isRequired
};

// TODO
// Form for panel members to update their information
const FormPanelMemberProfileUpdate = ({ panelMemberId }) => {
    // Translation
    const { t: translate } = useTranslation("form");

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
        const updatePanelMemberProfileResponse = createEndpoint(`panelmembers/${panelMemberId}`).put(formData);

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
                            {translate("firstNameLabel")}
                        </Form.Label>
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
                            aria-invalid={errors.firstName ? "true" : "false"}
                            placeholder={translate("firstNamePlaceholder")}
                        />
                        {errors.firstName && (
                            <div className="form__error">
                                {errors.firstName.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Label className="form__label">
                            {translate("lastNameLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.lastName ? "error" : ""}`}
                            type="text"
                            {...register("lastName", {
                                required: {
                                    value: true,
                                    message: translate("error.lastNameRequired")
                                }
                            })}
                            aria-invalid={errors.lastName ? "true" : "false"}
                            placeholder={translate("lastNamePlaceholder")}
                        />
                        {errors.lastName && (
                            <div className="form__error">
                                {errors.lastName.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("phoneLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.phone ? "error" : ""}`}
                            type="phone"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: translate("error.phoneRequired")
                                }
                            })}
                            aria-invalid={errors.phone ? "true" : "false"}
                            placeholder={translate("phonePlaceholder")}
                        />
                        {errors.phone && (
                            <div className="form__error">
                                {errors.phone.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("dateOfBirthLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.dateOfBirth ? "error" : ""}`}
                            type="date"
                            {...register("dateOfBirth", {
                                required: {
                                    value: true,
                                    message: translate("error.dateOfBirthRequired")
                                }
                            })}
                            aria-invalid={errors.dateOfBirth ? "true" : "false"}
                            placeholder={translate("dateOfBirthPlaceholder")}
                        />
                        {errors.dateOfBirth && (
                            <div className="form__error">
                                {errors.dateOfBirth.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("addressLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.address ? "error" : ""}`}
                            type="text"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: translate("error.addressRequired")
                                }
                            })}
                            aria-invalid={errors.address ? "true" : "false"}
                            placeholder={translate("addressPlaceholder")}
                        />
                        {errors.address && (
                            <div className="form__error">
                                {errors.address.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Label className="form__label">
                            {translate("postalCodeLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.postalCode ? "error" : ""}`}
                            type="text"
                            {...register("postalCode", {
                                required: {
                                    value: true,
                                    message: translate("error.postalCodeRequired")
                                }
                            })}
                            aria-invalid={errors.postalcode ? "true" : "false"}
                            placeholder={translate("postalCodePlaceholder")}
                        />
                        {errors.postalCode && (
                            <div className="form__error">
                                {errors.postalCode.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Label className="form__label">
                            {translate("provinceLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.province ? "error" : ""}`}
                            type="text"
                            {...register("province", {
                                required: {
                                    value: true,
                                    message: translate("error.provinceRequired")
                                }
                            })}
                            aria-invalid={errors.province ? "true" : "false"}
                            placeholder={translate("provincePlaceholder")}
                        />
                        {errors.province && (
                            <div className="form__error">
                                {errors.province.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("countryLabel")}
                        </Form.Label>
                        <Form.Select
                            className={`form__select_menu ${errors.country ? "error" : ""}`}
                            {...register("country", {
                                required: {
                                    value: true,
                                    message: translate("error.countryRequired")
                                }
                            })}
                            aria-invalid={errors.country ? "true" : "false"}
                            defaultValue=""
                        >
                            <option value="" hidden>
                                {translate("countryOptions.placeholder")}
                            </option>
                            <option value="The Netherlands">
                                {translate("countryOptions.netherlands")}
                            </option>
                        </Form.Select>
                        {errors.country && (
                            <div className="form__error">
                                {errors.country.message}
                            </div>
                        )}
                    </Col>
                </Row>
                <ButtonSubmit text={translate("settings.buttonText")} />
            </Form>
        </>
    );
};

FormPanelMemberProfileUpdate.propTypes = {
    panelMemberId: PropTypes.string.isRequired
};

// TODO
// Form for company to update their page info
const FormCompanyProfileUpdate = ({ companyId }) => {
    // Translation
    const { t: translate } = useTranslation("form");

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
        const updateCompanyProfileResponse = createEndpoint("companies").put(companyId, formData);

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
                            {translate("kvkLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.kvk ? "error" : ""}`}
                            type="text"
                            {...register("kvk", {
                                required: {
                                    value: true,
                                    message: translate("error.kvkRequired")
                                }
                            })}
                            aria-invalid={errors.kvk ? "true" : "false"}
                            placeholder={translate("kvkPlaceholder")}
                        />
                        {errors.kvk && (
                            <div className="form__error">
                                {errors.kvk.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("companyNameLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.companyName ? "error" : ""}`}
                            type="text"
                            {...register("companyName", {
                                required: {
                                    value: true,
                                    message: translate(
                                        "error.companyNameRequired"
                                    )
                                }
                            })}
                            aria-invalid={errors.companyName ? "true" : "false"}
                            placeholder={translate("companyNamePlaceholder")}
                        />
                        {errors.companyName && (
                            <div className="form__error">
                                {errors.companyName.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("phoneLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.phone ? "error" : ""}`}
                            type="phone"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: translate("error.phoneRequired")
                                }
                            })}
                            aria-invalid={errors.phone ? "true" : "false"}
                            placeholder={translate("phonePlaceholder")}
                        />
                        {errors.phone && (
                            <div className="form__error">
                                {errors.phone.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("contactPersonPlaceholder")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.contactPerson ? "error" : ""}`}
                            type="text"
                            {...register("contactPerson", {
                                required: {
                                    value: true,
                                    message: translate("error.contactPersonRequired")
                                }
                            })}
                            aria-invalid={errors.contactPerson ? "true" : "false"}
                            placeholder={translate("contactPersonPlaceholder")}
                        />
                        {errors.contactPerson && (
                            <div className="form__error">
                                {errors.contactPerson.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("addressLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.address ? "error" : ""}`}
                            type="text"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: translate("error.addressRequired")
                                }
                            })}
                            aria-invalid={errors.address ? "true" : "false"}
                            placeholder={translate("addressPlaceholder")}
                        />
                        {errors.address && (
                            <div className="form__error">
                                {errors.address.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("provinceLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.province ? "error" : ""}`}
                            type="text"
                            {...register("province", {
                                required: {
                                    value: true,
                                    message: translate("error.provinceRequired")
                                }
                            })}
                            aria-invalid={errors.province ? "true" : "false"}
                            placeholder={translate("provincePlaceholder")}
                        />
                        {errors.province && (
                            <div className="form__error">
                                {errors.province.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Label className="form__label">
                            {translate("postalCodeLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.postalCode ? "error" : ""}`}
                            type="text"
                            {...register("postalCode", {
                                required: {
                                    value: true,
                                    message: translate(
                                        "error.postalCodeRequired"
                                    )
                                }
                            })}
                            aria-invalid={errors.postalCode ? "true" : "false"}
                            placeholder={translate("postalCodePlaceholder")}
                        />
                        {errors.postalCode && (
                            <div className="form__error">
                                {errors.postalCode.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Label className="form__label">
                            {translate("websiteUrlLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.websiteUrl ? "error" : ""}`}
                            type="url"
                            {...register("websiteUrl", {
                                required: {
                                    value: true,
                                    message: translate(
                                        "error.websiteUrlRequired"
                                    )
                                }
                            })}
                            aria-invalid={errors.websiteUrl ? "true" : "false"}
                            placeholder={translate("websiteUrlPlaceholder")}
                        />
                        {errors.websiteUrl && (
                            <div className="form__error">
                                {errors.websiteUrl.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("countryLabel")}
                        </Form.Label>
                        <Form.Select
                            className={`form__select_menu ${errors.country ? "error" : ""}`}
                            {...register("country", {
                                required: {
                                    value: true,
                                    message: translate("error.countryRequired")
                                }
                            })}
                            aria-invalid={errors.country ? "true" : "false"}
                            defaultValue=""
                        >
                            <option value="" hidden>
                                {translate("countryOptions.placeholder")}
                            </option>
                            <option value="The Netherlands">
                                {translate("countryOptions.netherlands")}
                            </option>
                        </Form.Select>
                        {errors.country && (
                            <div className="form__error">
                                {errors.country.message}
                            </div>
                        )}
                    </Col>
                </Row>
                <ButtonSubmit text={translate("settings.buttonText")} />
            </Form>
        </>
    );
};

// PropTypes for FormCompanyProfileUpdate
// Requires companyId as mandatory string prop
FormCompanyProfileUpdate.propTypes = {
    companyId: PropTypes.string.isRequired
};

// TODO
// form for company when they create a new reearch
const FormCompanyResearchCreate = () => {
    // Translation
    const { t: translate } = useTranslation("form");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ mode: "all" });

    const companyResearchCreateSubmit = async (formData) => {
        // Axios
        const createCompanyResearchResponse =
            createEndpoint("lol")
                .post(formData);

        // Handle the response from the POST call
        createCompanyResearchResponse
            .then((response) => {
                // Some inspiring comment
                console.log(response);
                reset();
            })
            .catch((error) => {
                // Catch the error and display it
                console.log(error.response);
            });
    };

    // Need to configurate the translations
    return (
        <>
            <Form
                className="form__research"
                acceptCharset="UTF-8"
                method="post"
                onSubmit={handleSubmit(companyResearchCreateSubmit)}
                noValidate
            >
                <Row>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("titleLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.title ? "error" : ""}`}
                            type="text"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: translate("error.titleRequired")
                                }
                            })}
                            aria-invalid={errors.title ? "true" : "false"}
                            placeholder={translate("titlePlaceholder")}
                        />
                        {errors.title && (
                            <div className="form__error">
                                {errors.title.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("descriptionLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.description ? "error" : ""}`}
                            as="textarea"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: translate("error.descriptionRequired")
                                }
                            })}
                            aria-invalid={errors.description ? "true" : "false"}
                            placeholder={translate("descriptionPlaceholder")}
                            rows={5}
                        />
                        {errors.description && (
                            <div className="form__error">
                                {errors.description.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("dateLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.date ? "error" : ""}`}
                            type="date"
                            {...register("date", {
                                required: {
                                    value: true,
                                    message: translate("error.dateRequired")
                                }
                            })}
                            aria-invalid={errors.date ? "true" : "false"}
                            placeholder={translate("datePlaceholder")}
                        />
                        {errors.date && (
                            <div className="form__error">
                                {errors.date.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("rewardLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.reward ? "error" : ""}`}
                            type="text"
                            {...register("reward", {
                                required: {
                                    value: true,
                                    message: translate("error.rewardRequired")
                                }
                            })}
                            aria-invalid={errors.reward ? "true" : "false"}
                            placeholder={translate("rewardPlaceholder")}
                        />
                        {errors.reward && (
                            <div className="form__error">
                                {errors.reward.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("typeLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.type ? "error" : ""}`}
                            type="text"
                            {...register("type", {
                                required: {
                                    value: true,
                                    message: translate("error.typeRequired")
                                }
                            })}
                            aria-invalid={errors.type ? "true" : "false"}
                            placeholder={translate("typePlaceholder")}
                        />
                        {errors.type && (
                            <div className="form__error">
                                {errors.type.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("categoryLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.category ? "error" : ""}`}
                            type="text"
                            {...register("category", {
                                required: {
                                    value: true,
                                    message: translate("error.categoryRequired")
                                }
                            })}
                            aria-invalid={errors.category ? "true" : "false"}
                            placeholder={translate("categoryPlaceholder")}
                        />
                        {errors.category && (
                            <div className="form__error">
                                {errors.category.message}
                            </div>
                        )}
                    </Col>
                </Row>
                <ButtonSubmit text={translate("research.buttonText")} />
            </Form>
        </>
    );
};

// TODO
// So for this form, it's basically identical to the create research one
// only thing that is different is that this one has values of the research someone is editing
// need to make a get request to get the specific research and fill in the values
// so this one is not working yet
// since we dont have the endpoints al all configurated
const FormCompanyResearchUpdate = () => {
    // Translation
    const { t: translate } = useTranslation("form");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ mode: "all" });

    const companyResearchCreateSubmit = async (formData) => {
        // Axios
        const createCompanyResearchResponse =
            createEndpoint("lol")
                .post(formData);

        // Handle the response from the POST call
        createCompanyResearchResponse
            .then((response) => {
                // Some inspiring comment
                console.log(response);
                reset();
            })
            .catch((error) => {
                // Catch the error and display it
                console.log(error.response);
            });
    };

    // Need to configurate the translations
    return (
        <>
            <Form
                className="form__research"
                acceptCharset="UTF-8"
                method="post"
                onSubmit={handleSubmit(companyResearchCreateSubmit)}
                noValidate
            >
                <Row>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("titleLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.title ? "error" : ""}`}
                            type="text"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: translate("error.titleRequired")
                                }
                            })}
                            aria-invalid={errors.title ? "true" : "false"}
                            placeholder={translate("titlePlaceholder")}
                        />
                        {errors.title && (
                            <div className="form__error">
                                {errors.title.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("descriptionLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.description ? "error" : ""}`}
                            as="textarea"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: translate("error.descriptionRequired")
                                }
                            })}
                            aria-invalid={errors.description ? "true" : "false"}
                            placeholder={translate("descriptionPlaceholder")}
                            rows={5}
                        />
                        {errors.description && (
                            <div className="form__error">
                                {errors.description.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("dateLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.date ? "error" : ""}`}
                            type="date"
                            {...register("date", {
                                required: {
                                    value: true,
                                    message: translate("error.dateRequired")
                                }
                            })}
                            aria-invalid={errors.date ? "true" : "false"}
                            placeholder={translate("datePlaceholder")}
                        />
                        {errors.date && (
                            <div className="form__error">
                                {errors.date.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("rewardLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.reward ? "error" : ""}`}
                            type="text"
                            {...register("reward", {
                                required: {
                                    value: true,
                                    message: translate("error.rewardRequired")
                                }
                            })}
                            aria-invalid={errors.reward ? "true" : "false"}
                            placeholder={translate("rewardPlaceholder")}
                        />
                        {errors.reward && (
                            <div className="form__error">
                                {errors.reward.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("typeLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.type ? "error" : ""}`}
                            type="text"
                            {...register("type", {
                                required: {
                                    value: true,
                                    message: translate("error.typeRequired")
                                }
                            })}
                            aria-invalid={errors.type ? "true" : "false"}
                            placeholder={translate("typePlaceholder")}
                        />
                        {errors.type && (
                            <div className="form__error">
                                {errors.type.message}
                            </div>
                        )}
                    </Col>
                    <Col xs={12}>
                        <Form.Label className="form__label">
                            {translate("categoryLabel")}
                        </Form.Label>
                        <Form.Control
                            className={`form__text_field ${errors.category ? "error" : ""}`}
                            type="text"
                            {...register("category", {
                                required: {
                                    value: true,
                                    message: translate("error.categoryRequired")
                                }
                            })}
                            aria-invalid={errors.category ? "true" : "false"}
                            placeholder={translate("categoryPlaceholder")}
                        />
                        {errors.category && (
                            <div className="form__error">
                                {errors.category.message}
                            </div>
                        )}
                    </Col>
                </Row>
                <ButtonSubmit text={translate("research.buttonText")} />
            </Form>
        </>
    );
};

// TODO
// creating a form with just input type hideen and the user id
// send to backend that adds the id to the research as participant
// something like that
const FormPanelMemberResearchJoin = () => {
    // Translation
    const { t: translate } = useTranslation("form");

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const panelMemberResearchJoinSubmit = async (formData) => {
        // Axios
        const joinPanelMemberResearchResponse = createEndpoint("lol").post(formData);

        // Handle the response from the POST call
        joinPanelMemberResearchResponse
            .then((response) => {
                // Some inspiring comment
                console.log(response);
                reset();
            })
            .catch((error) => {
                // Catch the error and display it
                console.log(error.response);
            });
    };

    // I need to do a get to get the research information
    // Then need to load in the values inside here
    // Also need to put the id of the panelmember inside here, so it will be submitted via the form
    // Then magic..
    return (
        <Form
            className="form__research"
            acceptCharset="UTF-8"
            method="post"
            onSubmit={handleSubmit(panelMemberResearchJoinSubmit)}
            noValidate
        >
            <Form.Control
                type="hidden"
                {...register("id", {
                    value: "inserthereuserid" // todo
                })}
            />
            <Row>
                <Col xs={12}>
                    <Form.Label className="form__label">
                        {translate("titleLabel")}
                    </Form.Label>
                    <Form.Control
                        className="form__text_field"
                        type="text"
                        value="Clodsire and friends" // TODO test
                        placeholder={translate("titlePlaceholder")}
                        readOnly
                    />
                </Col>
                <Col xs={12}>
                    <Form.Label className="form__label">
                        {translate("descriptionLabel")}
                    </Form.Label>
                    <Form.Control
                        className="form__text_field"
                        as="textarea"
                        value="Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans? Not only are they in the field egg group, which is mostly comprised of mammals, Vaporeon are an average of 3&quot;03 tall and 63.9 pounds, this means they're large enough to be able handle human dicks, and with their impressive Base Stats for HP and access to Acid Armor, you can be rough with one. Due to their mostly water based biology, there's no doubt in my mind that an aroused Vaporeon would be incredibly wet, so wet that you could easily have sex with one for hours without getting sore. They can also learn the moves Attract, Baby-Doll Eyes, Captivate, Charm, and Tail Whip, along with not having fur to hide nipples, so it'd be incredibly easy for one to get you in the mood. With their abilities Water Absorb and Hydration, they can easily recover from fatigue with enough water. No other Pokémon comes close to this level of compatibility. Also, fun fact, if you pull out enough, you can make your Vaporeon turn white. Vaporeon is literally built for human dick. Ungodly defense stat+high HP pool+Acid Armor means it can take cock all day, all shapes and sizes and still come for more " // TODO test
                        placeholder={translate("descriptionPlaceholder")}
                        rows={5}
                        readOnly
                    />
                </Col>
                <Col xs={12}>
                    <Form.Label className="form__label">
                        {translate("dateLabel")}
                    </Form.Label>
                    <Form.Control
                        className="form__text_field"
                        type="date"
                        value="2024-05-04" // TODO test
                        placeholder={translate("datePlaceholder")}
                        readOnly
                    />
                </Col>
                <Col xs={12}>
                    <Form.Label className="form__label">
                        {translate("rewardLabel")}
                    </Form.Label>
                    <Form.Control
                        className="form__text_field"
                        type="text"
                        value="&euro; 50.0" // TODO test
                        placeholder={translate("rewardPlaceholder")}
                        readOnly
                    />
                </Col>
                <Col xs={12}>
                    <Form.Label className="form__label">
                        {translate("organizerLabel")}
                    </Form.Label>
                    <Form.Control
                        className="form__text_field"
                        type="text"
                        value="The Pokemon Company" // TODO test
                        placeholder={translate("organizerPlaceholder")}
                        readOnly
                    />
                </Col>
                <Col xs={12}>
                    <Form.Label className="form__label">
                        {translate("typeLabel")}
                    </Form.Label>
                    <Form.Control
                        className="form__text_field"
                        type="text"
                        value="Online" // TODO test
                        placeholder={translate("typePlaceholder")}
                        readOnly
                    />
                </Col>
                <Col xs={12}>
                    <Form.Label className="form__label">
                        {translate("categoryLabel")}
                    </Form.Label>
                    <Form.Control
                        className="form__text_field"
                        type="text"
                        value="This, Really, Is, Gay" // test
                        placeholder={translate("categoryPlaceholder")}
                        readOnly
                    />
                </Col>
            </Row>
            <ButtonSubmit text="Join" />
            {
                /*
                Another button to go back maybe?
                */
            }
        </Form>
    );
};

export {
    FormLogin,
    FormSignup,
    FormUserEmailUpdate,
    FormUserPasswordUpdate,
    FormPanelMemberProfileUpdate,
    FormCompanyProfileUpdate,
    FormCompanyResearchCreate,
    FormCompanyResearchUpdate,
    FormPanelMemberResearchJoin
};
