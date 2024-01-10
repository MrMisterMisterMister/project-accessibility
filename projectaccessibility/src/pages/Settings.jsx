import React from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../stores/store";
import {
    FormUserEmailUpdate,
    FormUserPasswordUpdate,
    FormPanelMemberProfileUpdate,
    FormCompanyProfileUpdate
} from "../components/Form";

// Settings page
const Settings = () => {
    // Translation
    const { t: translate } = useTranslation("settings");

    // Get the stored user info so we can get access to the current role
    const { userStore: { user } } = useStore();

    return (
        <>
            {user.userRoles.includes("PanelMember") && (
                <div className="settings__dashboard">
                    <h4 className="settings__dashboard_title">
                        {translate("panelMemberProfileUpdateTitle")}
                    </h4>
                    <div className="settings__dashboard_content">
                        <FormPanelMemberProfileUpdate panelMemberId={user.userId} />
                    </div>
                </div>
            )}

            {user.userRoles.includes("Company") && (
                <div className="settings__dashboard">
                    <h4 className="settings__dashboard_title">
                        {translate("companyProfileUpdateTitle")}
                    </h4>
                    <div className="settings__dashboard_content">
                        <FormCompanyProfileUpdate companyId={user.userId} />
                    </div>
                </div>
            )}

            <div className="settings__dashboard">
                <h4 className="settings__dashboard_title">
                    {translate("emailUpdateTitle")}
                </h4>
                <div className="settings__dashboard_content">
                    <FormUserEmailUpdate userId={user.userId} />
                </div>
            </div>

            <div className="settings__dashboard">
                <h4 className="settings__dashboard_title">
                    {translate("passwordUpdateTitle")}
                </h4>
                <div className="settings__dashboard_content">
                    <FormUserPasswordUpdate userId={user.userId} />
                </div>
            </div>
        </>
    );
};

export default Settings;
