import React from "react";
import {
    SettingsPanelmember,
    SettingsCompany,
    SettingsEmail,
    SettingsPassword
} from "../components/Settings";

// Settings page in portal
// This needs to be seperated, so company and panelmember don't see the same
// Will fix it later
const Settings = () => {
    return (
        <>
            <SettingsPanelmember />
            <SettingsCompany />
            <SettingsEmail />
            <SettingsPassword />
        </>
    );
};

export default Settings;
