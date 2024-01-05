import React from "react";
import {
    TableCompanyResearchView,
    TablePanelMemberResearchView
} from "../components/Table";
import { ButtonPrimary } from "../components/Button";

// The research screen a company sees
// Here they just create researches for panelmembers
const Research = () => {
    return (
        <div className="research__dashboard">
            <h1 className="research__dashboard_title">Researches</h1>
            <div className="research__dashboard_options">
                <ButtonPrimary text="New Research" />
            </div>
            <div className="research__dashboard_content">
                <TableCompanyResearchView />
                <TablePanelMemberResearchView />
            </div>
        </div>
    );
};

export default Research;
