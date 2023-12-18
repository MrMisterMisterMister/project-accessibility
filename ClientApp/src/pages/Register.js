import React, { Component } from 'react';

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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
        const { username, password } = this.state;

        if (!username || !password) {
            this.setState({ registrationMessage: 'Gebruikersnaam en wachtwoord nodig.' });
            return;
        }

        try {
            const response = await fetch('/Register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Successful registration
                this.setState({ registrationMessage: 'Registration successful' });
            } else {
                // Failed registration
                this.setState({ registrationMessage: 'Registration failed' });
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    render() {
        return (
            <div>
                <h1>Register</h1>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                </div>
                <button onClick={this.handleRegistration}>Register</button>
                {this.state.registrationMessage && <p>{this.state.registrationMessage}</p>} {/* Display registration message */}
            </div>
        );
    }
}

export default Register;
