import React, { Component } from 'react';

const isDutchPhoneNumberComplete = (phoneNumber) => {
    // Removing all non-numeric characters
    const cleanNumber = phoneNumber.replace(/\D/g, '');

    // Check if the number starts with '0' or '31' and has the correct length
    return /^0[1-9]\d{8}$|^31[1-9]\d{7,8}$/.test(cleanNumber);
};

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            middleName: '',
            email: '',
            password: '',
            confirmPassword: '',
            telephoneNumber: '',
            secondTelephoneNumber: '',
            registrationMessage: '',
            countryCode: '',
            formValid: false,
        };
    }

    updateFormValidity = () => {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            telephoneNumber,
            countryCode,
        } = this.state;

        const isTelephoneValid = countryCode === '+31'
            ? isDutchPhoneNumberComplete(telephoneNumber)
            : true;

        const isValid = !!firstName && !!lastName && !!email && !!password && !!confirmPassword && isTelephoneValid;

        this.setState({ formValid: isValid });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        let errorMessage = '';

        if (name === 'telephoneNumber' || name === 'secondTelephoneNumber') {
            if (!/^\d*$/.test(value)) {
                errorMessage = 'Input a phone number';
            }
        }

        this.setState(
            {
                [name]: value,
                registrationMessage: errorMessage,
            },
            () => {
                if (name === 'telephoneNumber' && this.state.countryCode === '+31') {
                    const isComplete = isDutchPhoneNumberComplete(value);
                    if (!isComplete) {
                        this.setState({ registrationMessage: 'Please enter a complete Dutch phone number' });
                    }
                }

                if (name === 'secondTelephoneNumber' && this.state.secondCountryCode === '+31') {
                    const isComplete = isDutchPhoneNumberComplete(value);
                    if (!isComplete) {
                        this.setState({ registrationMessage: 'Please enter a complete Dutch phone number' });
                    }
                }
            }
        );

        this.updateFormValidity();

    };


    handleCountryCodeChange = (event) => {
        const { value } = event.target;
        this.setState({ countryCode: value });
    }

    handleSecondCountryCodeChange = (event) => {
        const { value } = event.target;
        this.setState({ secondCountryCode: value });
    }

    handleRegistration = async () => {
        const {
            firstName,
            lastName,
            middleName,
            email,
            password,
            confirmPassword,
            telephoneNumber,
            secondTelephoneNumber,
            countryCode,
            secondCountryCode,
        } = this.state;

        const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

        if (!firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword ||
            !telephoneNumber
        ) {
            this.setState({ registrationMessage: 'Niet alle velden zijn ingevuld' });
            return;
        }

        if (!email || !emailPattern.test(email)) {
            this.setState({ registrationMessage: 'Voer een geldig e-mailadres in' });
            return;
        }

        if (password !== confirmPassword) {
            this.setState({ registrationMessage: 'Wachtwoord komt niet overeen' });
            return;
        }

        const completeTelephoneNumber = countryCode + telephoneNumber;
        const completeSecondTelephoneNumber = secondTelephoneNumber ? secondCountryCode + secondTelephoneNumber : null;

        try {
            const response = await fetch('/Register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    middleName: middleName || null,
                    lastName,
                    email,
                    password,
                    confirmPassword,
                    telephoneNumber: completeTelephoneNumber,
                    secondTelephoneNumber: completeSecondTelephoneNumber || null,
                }),
            });

            if (response.ok) {
                // Successful registration
                this.setState({ registrationMessage: 'Successvol geregistreerd' });
            } else {
                // Failed registration
                this.setState({ registrationMessage: 'Registratie onsuccessvol' });
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    render() {
        return (
            <div>
                <div>
                    <h1>Register</h1>
                    <div>
                        <label>
                            First Name<span style={{ color: 'red' }}>*</span>:
                        </label>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>Middle Name (optional):</label>
                        <input type="text" name="middleName" value={this.state.middleName} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>
                            Last Name<span style={{ color: 'red' }}>*</span>:
                        </label>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>Email<span style={{ color: 'red' }}>*</span>:</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>Password<span style={{ color: 'red' }}>*</span>:</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>Confirm Password<span style={{ color: 'red' }}>*</span>:</label>
                        <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>
                            Telephone Number<span style={{ color: 'red' }}>*</span>:
                        </label>
                            <select name="countryCode" onChange={this.handleCountryCodeChange}>
                                <option value="">Select Country Code</option>
                                <option value="+1">United States (+1)</option>
                                <option value="+44">United Kingdom (+44)</option>
                                <option value="+31">Netherlands (+31)</option>
                            </select>
                        <input type="tel" name="telephoneNumber" value={this.state.telephoneNumber} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>
                            Second Telephone Number (optional):
                        </label>
                            <select name="secondCountryCode" onChange={this.handleSecondCountryCodeChange}>
                                <option value="">Select Country Code</option>
                                <option value="+1">United States (+1)</option>
                                <option value="+44">United Kingdom (+44)</option>
                                <option value="+31">Netherlands (+31)</option>
                            </select>
                        <input type="tel" name="secondTelephoneNumber" value={this.state.secondTelephoneNumber} onChange={this.handleInputChange} />
                    </div>
                    <button onClick={this.handleRegistration} disabled={!this.state.formValid}>
                        Register
                    </button>
                    {this.state.registrationMessage && <p style={{ color: 'red' }}>{this.state.registrationMessage}</p>}
                </div>
                <div>
                    <p>Fields with an "<span style={{ color: 'red' }}>*</span>" need to be filled.</p>
                </div>
            </div >
        );
    }
}

export default Register;
