import React from "react";
import { useTranslation } from "react-i18next";
import {
    FormUserEmailUpdate,
    FormUserPasswordUpdate,
    FormPanelMemberProfileUpdate,
    FormCompanyProfileUpdate
} from "./Form";

// Settings component for panelmembers to change their profile information
// This loads in their form with the correct post endpoint to the backend server
const SettingsPanelMember = () => {
    // Translation
    const { t: translate } = useTranslation("settings");

    return (
        <div className="settings__dashboard">
            <h4 className="settings__dashboard_title">{translate("panelMemberProfileUpdateTitle")}</h4>
            <div className="settings__dashboard_content">
                <FormPanelMemberProfileUpdate />
            </div>
        </div>
    );
};

// And this one is for company to update their profile information
const SettingsCompany = () => {
    // Translation
    const { t: translate } = useTranslation("settings");

    return (
        <div className="settings__dashboard">
            <h4 className="settings__dashboard_title">{translate("companyProfileUpdateTitle")}</h4>
            <div className="settings__dashboard_content">
                <FormCompanyProfileUpdate />
            </div>
        </div>
    );
};

// General form to change email
const SettingsEmail = () => {
    // Translation
    const { t: translate } = useTranslation("settings");

    return (
        <div className="settings__dashboard">
            <h4 className="settings__dashboard_title">{translate("emailUpdateTitle")}</h4>
            <div className="settings__dashboard_content">
                <FormUserEmailUpdate />
            </div>
        </div>
    );
};

// Component to change password for a user
// Sends post request to backend and it verifies the request by looking if the password matches
const SettingsPassword = () => {
    // Translation
    const { t: translate } = useTranslation("settings");

    return (
        <div className="settings__dashboard">
            <h4 className="settings__dashboard_title">{translate("passwordUpdateTitle")}</h4>
            <div className="settings__dashboard_content">
                <FormUserPasswordUpdate />
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
