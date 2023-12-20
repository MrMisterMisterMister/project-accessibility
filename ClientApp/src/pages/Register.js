import React, { Component } from 'react';

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
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            registrationMessage: '',
        });
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
        } = this.state;

        if (!firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword ||
            !telephoneNumber
            ) {
            this.setState({ registrationMessage: 'Niet alle velden zijn correct ingevuld' });
            return;
        }

        if (password !== confirmPassword) {
            this.setState({ registrationMessage: 'Wachtwoord komt niet overeen' });
        }

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
                    telephoneNumber,
                    secondTelephoneNumber: secondTelephoneNumber || null,
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
                        <input type="tel" name="telephoneNumber" value={this.state.telephoneNumber} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>
                            Second Telephone Number (optional):
                        </label>
                        <input type="tel" name="secondTelephoneNumber" value={this.state.secondTelephoneNumber} onChange={this.handleInputChange} />
                    </div>
                    <button onClick={this.handleRegistration}>Register</button>
                    {this.state.registrationMessage && <p>{this.state.registrationMessage}</p>}
                </div>
                <div>
                    <p>Fields with an "<span style={{ color: 'red' }}>*</span>" need to be filled.</p>
                </div>
            </div >
        );
    }
}

export default Register;
