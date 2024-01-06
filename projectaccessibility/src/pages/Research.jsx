import React from "react";
import {
    TableCompanyResearchView,
    TablePanelMemberResearchView
} from "../components/Table";
import { ButtonSecondary } from "../components/Button";

// The research screen a company sees
// Here they just create researches for panelmembers
const Research = () => {
    return (
        <div className="research__dashboard">
            <h1 className="research__dashboard_title">Researches</h1>
            <div className="research__dashboard_options">
                <ButtonSecondary text="My Research" />
                <ButtonSecondary text="New Research" />
            </div>
            <div className="research__dashboard_content">
                <TableCompanyResearchView />
                <br/>
                <br/>
                <TablePanelMemberResearchView />
            </div>
        </div>
    );
};

export default Research;
