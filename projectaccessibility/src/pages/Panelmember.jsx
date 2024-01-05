import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TablePanelMemberView } from "../components/Table";
import { CardPanelMemberView } from "../components/Card";
import { ButtonPrimary, ButtonSecondary } from "../components/Button";
import { getRequest } from "../api/axiosClient";
import Cookies from "js-cookie";

// Panelmember view for admin
const PanelMember = () => {
    // Translation
    const { t: translate } = useTranslation("panelmember");

    // Some hook to keep track of the current view
    // Also checks if there has been a cookie for this view, otherwise just assume table
    const [view, setView] = useState(Cookies.get("panelMemberView") || "table");

    // Hook to store all the panelmembers in
    const [panelMembers, setPanelMembers] = useState([]);

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

    // Sends get request to api to get all the panelmembers
    // Load them inside the hook afterwards
    useEffect(() => {
        getRequest("panelmembers")
            .then((response) => {
                setPanelMembers(response.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, []); // Run once

    // All the available views
    // Later on it can be expanded I guess
    const panelMemberViewComponents = {
        table: <TablePanelMemberView data={panelMembers} />,
        card: <CardPanelMemberView data={panelMembers} />
    };

    // The data for Table view of panelmember is still hard coded, so it needs to be changed
    // but I am too lazy to do it
    return (
        <div className="panelmember__dashboard">
            <h1 className="panelmember__dashboard_title">
                {translate("pageTitle")}
            </h1>
            <div className="panelmember__dashboard_options">
                <ButtonPrimary
                    text={translate("tableView")}
                    isActive={view === "table"}
                    action={() => switchView("table")}
                />
                <ButtonSecondary
                    text={translate("cardView")}
                    isActive={view === "card"}
                    action={() => switchView("card")}
                />
            </div>
            <div className="panelmember__dashboard_content">
                {panelMemberViewComponents[view]}
            </div>
        </div>
    );
};

export default PanelMember;
