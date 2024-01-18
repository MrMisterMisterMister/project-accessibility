import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../stores/store";
import {
    FormUserEmailUpdate,
    FormUserPasswordUpdate,
    FormPanelMemberProfileUpdate,
    FormCompanyProfileUpdate,
    FormPanelMemberDisabilityUpdate
} from "../components/Form";
import { createEndpoint } from "../api/axiosClient";

// Settings page
const Settings = () => {
    // Translation
    const { t: translate } = useTranslation("settings");

    // Get the stored user info so we can get access to the current role
    const { userStore: { user } } = useStore();

    // State to keep track of the disabilities
    const [disabilities, setDisabilities] = useState([]);

    // Get all disabilities I guess
    const fetchAllDisabilities = async () => {
        const data = await createEndpoint("disabilities").get();
        setDisabilities(data);
    };

    // Trigger fetching all disabilities
    useEffect(() => {
        fetchAllDisabilities();
    }, []);

    return (
        <div className="settings__dashboard">
            <h2 className="settings__dashboard_title">{translate("pageTitle")}</h2>
            <div className="settings__dashboard_content">
                {user.userRoles.includes("PanelMember") && (
                    <>
                        <div className="settings__dashboard_form">
                            <h2 className="settings__dashboard_form__title">
                                {translate("panelMemberProfileUpdateTitle")}
                            </h2>
                            <div className="settings__dashboard_form__content">
                                <FormPanelMemberProfileUpdate panelMemberId={user.userId} />
                            </div>
                        </div>
                        <div className="settings__dashboard_form">
                            <h2 className="settings__dashboard_form__title">
                                {translate("panelMemberDisabilityUpdateTitle")}
                            </h2>
                            <div className="settings__dashboard_form__content">
                                <FormPanelMemberDisabilityUpdate disabilities={disabilities} />
                            </div>
                        </div>
                    </>
                )}
                {user.userRoles.includes("Company") && (
                    <div className="settings__dashboard_form">
                        <h2 className="settings__dashboard_form__title">
                            {translate("companyProfileUpdateTitle")}
                        </h2>
                        <div className="settings__dashboard_form__content">
                            <FormCompanyProfileUpdate companyId={user.userId} />
                        </div>
                    </div>
                )}
                <div className="settings__dashboard_form">
                    <h2 className="settings__dashboard_form__title">
                        {translate("emailUpdateTitle")}
                    </h2>
                    <div className="settings__dashboard_form__content">
                        <FormUserEmailUpdate userId={user.userId} />
                    </div>
                </div>

                <div className="settings__dashboard_form">
                    <h2 className="settings__dashboard_form__title">
                        {translate("passwordUpdateTitle")}
                    </h2>
                    <div className="settings__dashboard_form__content">
                        <FormUserPasswordUpdate userId={user.userId} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
