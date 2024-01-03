import React from "react";
import { FormEmail, FormPassword, FormPanelMember, FormCompany } from "./Form";

// Settings component for panelmembers to change their profile information
// This loads in their form with the correct post endpoint to the backend server
const SettingsPanelMember = () => {
    return (
        <div className="settings__dashboard">
            <h4 className="settings__dashboard_title">Panelmember</h4>
            <div className="settings__dashboard_content">
                <FormPanelMember />
            </div>
        </div>
    );
};

// And this one is for company to update their profile information
const SettingsCompany = () => {
    return (
        <div className="settings__dashboard">
            <h4 className="settings__dashboard_title">Company</h4>
            <div className="settings__dashboard_content">
                <FormCompany />
            </div>
        </div>
    );
};

// General form to change email
const SettingsEmail = () => {
    return (
        <div className="settings__dashboard">
            <h4 className="settings__dashboard_title">Change Your Email</h4>
            <div className="settings__dashboard_content">
                <FormEmail />
            </div>
        </div>
    );
};

// Component to change password for a user
// Sends post request to backend and it verifies the request by looking if the password matches
const SettingsPassword = () => {
    return (
        <div className="settings__dashboard">
            <h4 className="settings__dashboard_title">Change Your Password</h4>
            <div className="settings__dashboard_content">
                <FormPassword />
            </div>
        </div>
    );
};

export {
    SettingsPanelMember,
    SettingsCompany,
    SettingsEmail,
    SettingsPassword
};
