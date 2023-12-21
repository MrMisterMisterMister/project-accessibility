import React, { Component } from 'react';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginMessage: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            loginMessage: '',
        });
    }

    handleLogin = async () => {
        const { email, password } = this.state;
        try {
            const response = await fetch('/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Successful login
                this.setState({ loginMessage: 'Login succesvol' });
            } else {
                // Failed login
                this.setState({ loginMessage: 'Ongeldige inloggegevens' });
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    render() {
        return (
            <div>
                <div>
                    <h1>Inloggen</h1>
                    <div>
                        <label>E-mail:</label>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>Wachtwoord:</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    </div>
                    <button onClick={this.handleLogin}>Login</button>
                    {this.state.loginMessage && <p>{this.state.loginMessage}</p>} {/* Display login message */}
                </div>
                <div id="signInDiv">
                </div>
            </div>
        );
    }
}

export default Login;
