import React, { Component } from "react";

export class Account extends Component {
    render () {
        return (
            <div className="account_settings">
                <h1>Account instellingen</h1> <br></br>
                <p>Voornaam</p>
                <input type="text"></input>
                <br></br> <br></br>
                <p>Email</p>
                <input type="email"></input>
                <br></br> <br></br>
                <p>Wachtwoord</p>
                <input type="password"></input>
                <br></br> <br></br>
                <button id="save">Opslaan</button>
            </div>
        );
    }
}
