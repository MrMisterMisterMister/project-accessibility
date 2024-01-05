import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PanelMembers from "../components/PanelMembers";
import { TablePanelMemberView } from "../components/Table";
import { ButtonPrimary, ButtonSecondary } from "../components/Button";
import Cookies from "js-cookie";

// Panelmember view for admin
const PanelMember = () => {
    // Translation
    const { t: translate } = useTranslation("panelmember");

    // Some hook to keep track of the current view
    // Also checks if there has been a cookie for this view, otherwise just assume table
    const [view, setView] = useState(Cookies.get("panelMemberView") || "table");

    // This function just switches the view and stores the value inside a cookie
    const switchView = (view) => {
        setView(view);

        // Save the view as cookie, so the next time the user looks at this page
        // it has the same view as last time
        // Also some general cookie settings
        Cookies.set("panelMemberView", view, {
            expires: 30, // just expire it after some time
            sameSite: "None",
            secure: true
        });
    };

    // All the available views
    // Later on it can be expanded I guess
    const panelMemberViewComponents = {
        table: <TablePanelMemberView />,
        card: <PanelMembers />
    };

    // The data for Table view of panelmember is still hard coded, so it needs to be changed
    // but I am too lazy to do it
    return (
        <div className="panelmember__dashboard">
            <h1 className="panelmember__dashboard_title">
                {translate("pageTitle")}
            </h1>
            <div className="panelmember__dashboard_options">
                <ButtonPrimary text={translate("tableView")} action={() => switchView("table")} />
                <ButtonSecondary text={translate("cardView")} action={() => switchView("card")} />
            </div>
            <div className="panelmember__dashboard_content">
                {panelMemberViewComponents[view]}
            </div>
        </div>
    );
};

export default PanelMember;
