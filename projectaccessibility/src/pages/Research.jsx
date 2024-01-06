import React from "react";
import { ButtonSecondary } from "../components/Button";
import { TableCompanyResearchView, TablePanelMemberResearchView } from "../components/Table";
import { FormCompanyResearchCreate, FormCompanyResearchUpdate } from "../components/Form";

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
                <h2>for company, list of their research(es)</h2>
                <TableCompanyResearchView />
                <br />
                <br />
                <h2>for panelmember, available researches</h2>
                <TablePanelMemberResearchView />
                <br />
                <br />
                <h2>for company when they create a research</h2>
                <FormCompanyResearchCreate />
                <br />
                <br />
                <h2>for company, when they edit a research, this shows up</h2>
                <FormCompanyResearchUpdate />
                <br />
                <br />
                <h2>for panelmember, when they view a research</h2>
            </div>
        </div>
    );
};

export default Research;
