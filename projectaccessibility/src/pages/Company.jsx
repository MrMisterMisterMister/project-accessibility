import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TableCompanyView } from "../components/Table";
import { CardCompanyView } from "../components/Card";
import { ButtonSecondary } from "../components/Button";
import Cookies from "js-cookie";
import { createEndpoint } from "../api/axiosClient";

// This is the company view for admin
// They can just see the available companies
const Company = () => {
    // Translation
    const { t: translate } = useTranslation("company");

    // State to know which view to load in
    // Standard it's set to table
    const [view, setView] = useState(Cookies.get("companyView") || "table");

    // Hook to store all the company data
    const [companies, setCompanies] = useState([]);

    // A function that switches the view and also sames as a cookie
    const switchView = (view) => {
        setView(view);

        // Save as cookie that expires after 30 days, so everytime a user logs in, it's the same view as last time
        Cookies.set("companyView", view, {
            expires: 30,
            sameSite: "None",
            secure: true
        });
    };

    // planning to do this in a global file
    const fetchCompanies = async () => {
        const data = await createEndpoint("companies").get();
        setCompanies(data);
    };

    // Use axios get to retrieve all the company data
    useEffect(() => {
        if (companies.length === 0) {
            fetchCompanies();
        }
    }, []); // Once

    // Something something
    // Define the different views that need the right component
    const companyViewComponents = {
        table: <TableCompanyView data={companies} />,
        card: <CardCompanyView data={companies} />
    };

    // The table view still has hard coded data
    // needs to be updated with a simple get, but too lazy to do it now
    return (
        <div className="company__dashboard">
            <h1 className="company__dashboard_title">{translate("pageTitle")}</h1>
            <div className="company__dashboard_options">
                <ButtonSecondary
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
            <div className="company__dashboard_content">{companyViewComponents[view]}</div>
        </div>
    );
};

export default Company;
