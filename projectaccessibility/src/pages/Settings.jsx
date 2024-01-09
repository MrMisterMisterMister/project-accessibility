import React from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../stores/store";
import {
    FormUserEmailUpdate,
    FormUserPasswordUpdate,
    FormPanelMemberProfileUpdate,
    FormCompanyProfileUpdate
} from "../components/Form";

// Settings page in portal
// This needs to be seperated, so company and panelmember don't see the same
// Will fix it later
// TODO
// Need to load the correct components based on user logged in
const Settings = () => {
    // Translation
    const { t: translate } = useTranslation("settings");

    // Get the stored user info
    const { userStore: { user } } = useStore();

    console.log(user);

    // still need to determine roles, then switch view
    // will do it tomorrow
    return (
        <>
            <div className="settings__dashboard">
                <h4 className="settings__dashboard_title">
                    {translate("panelMemberProfileUpdateTitle")}
                </h4>
                <div className="settings__dashboard_content">
                    <FormPanelMemberProfileUpdate panelMemberId={user.userId} />
                </div>
            </div>

            <div className="settings__dashboard">
                <h4 className="settings__dashboard_title">
                    {translate("companyProfileUpdateTitle")}
                </h4>
                <div className="settings__dashboard_content">
                    <FormCompanyProfileUpdate companyId={user.userId} />
                </div>
            </div>

            <div className="settings__dashboard">
                <h4 className="settings__dashboard_title">
                    {translate("emailUpdateTitle")}
                </h4>
                <div className="settings__dashboard_content">
                    <FormUserEmailUpdate />
                </div>
            </div>

            <div className="settings__dashboard">
                <h4 className="settings__dashboard_title">
                    {translate("passwordUpdateTitle")}
                </h4>
                <div className="settings__dashboard_content">
                    <FormUserPasswordUpdate />
                </div>
            </div>
        </>
    );
};

export default Settings;
