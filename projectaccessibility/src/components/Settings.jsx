import React from "react";
import { FormEmail, FormPassword, FormPanelmember, FormCompany } from "./Form";

//
const SettingsPanelmember = () => {
    return (
        <div className="settings__dashboard">
            <h4 className="settings__dashboard_title">Panelmember</h4>
            <div className="settings__dashboard_content">
                <FormPanelmember />
            </div>
        </div>
    );
};

//
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

//
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

//
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

export { SettingsPanelmember, SettingsCompany, SettingsEmail, SettingsPassword };
