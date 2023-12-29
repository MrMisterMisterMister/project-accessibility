import React from "react";
import { FormEmail, FormPassword, FormPanelmember, FormCompany } from "./Form";

//
const SettingsPanelmember = () => {
    return (
        <section className="settings__section">
            <h4 className="settings__section_title">Panelmember</h4>
            <div className="settings__section_content">
                <FormPanelmember />
            </div>
        </section>
    );
};

//
const SettingsCompany = () => {
    return (
        <section className="settings__section">
            <h4 className="settings__section_title">Company</h4>
            <div className="settings__section_content">
                <FormCompany />
            </div>
        </section>
    );
};

//
const SettingsEmail = () => {
    return (
        <section className="settings__section">
            <h4 className="settings__section_title">Change Your Email</h4>
            <div className="settings__section_content">
                <FormEmail />
            </div>
        </section>
    );
};

//
const SettingsPassword = () => {
    return (
        <section className="settings__section">
            <h4 className="settings__section_title">Change Your Password</h4>
            <div className="settings__section_content">
                <FormPassword />
            </div>
        </section>
    );
};

export { SettingsPanelmember, SettingsCompany, SettingsEmail, SettingsPassword };
