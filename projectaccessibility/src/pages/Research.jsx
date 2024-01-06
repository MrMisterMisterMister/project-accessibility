import React from "react";
import { useTranslation } from "react-i18next";
import { ButtonSecondary } from "../components/Button";
import { TableCompanyResearchView, TablePanelMemberResearchView, TableAvailableResearchView } from "../components/Table";
import { FormCompanyResearchCreate, FormCompanyResearchUpdate } from "../components/Form";

// Research page
// In here the components will be role dependend loaded
// Still need to figure it out, so just putting all components open for now
const Research = () => {
    // Translation
    const { t: translate } = useTranslation("research");

    return (
        <div className="research__dashboard">
            <h1 className="research__dashboard_title">{translate("pageTitle")}</h1>
            <div className="research__dashboard_options">
                <ButtonSecondary text="My Research" />
                <ButtonSecondary text="Show All" />
                <ButtonSecondary text="New Research" />
            </div>
            <div className="research__dashboard_content">
                <h2>for company, list of their research(es)</h2>
                <TableCompanyResearchView />
                <br />
                <br />

                <h2>for panelmember, available researches</h2>
                <TableAvailableResearchView />
                <br />
                <br />

                <h2>for panelmember, joined researches</h2>
                <TablePanelMemberResearchView />
                <br/>
                <br/>

                <div className="research__content">
                    <h4 className="research__content_title">
                        Create Research
                    </h4>
                    <div className="research__content_container">
                        <FormCompanyResearchCreate />
                    </div>
                </div>

                <div className="research__content">
                    <h4 className="research__content_title">
                        Edit Research
                    </h4>
                    <div className="research__content_container">
                        <FormCompanyResearchUpdate />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;
