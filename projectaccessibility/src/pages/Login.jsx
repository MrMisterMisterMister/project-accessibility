import React, { Component } from "react";

export class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginMessage: "" // Add a state for login message
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            loginMessage: "" // Reset login message when input changes
        });
    };

    handleLogin = async () => {
        const { username, password } = this.state;
        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                // Successful login
                this.setState({ loginMessage: "Login successful" });
            } else {
                // Failed login
                this.setState({ loginMessage: "Invalid credentials" });
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    render () {
        return (
            <div>
                <h1>Inloggen</h1>
                <div>
                    <label>Gebruikersnaam:</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label>Wachtwoord:</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                </div>
                <button onClick={this.handleLogin}>Login</button>
                {this.state.loginMessage && (
                    <p>{this.state.loginMessage}</p>
                )}{" "}
                {/* Display login message */}
            </div>
        );
    }
}

export default Login;
