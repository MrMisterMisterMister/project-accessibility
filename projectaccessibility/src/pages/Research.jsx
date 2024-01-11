import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ButtonSecondary } from "../components/Button";
import { TableCompanyResearchView, TablePanelMemberResearchView, TableAvailableResearchView } from "../components/Table";
import { FormCompanyResearchCreate, FormCompanyResearchUpdate, FormPanelMemberResearchJoin } from "../components/Form";
import { createEndpoint } from "../api/axiosClient";

// Research page
// In here the components will be role dependend loaded
// Still need to figure it out, so just putting all components open for now
const Research = () => {
    // Translation
    const { t: translate } = useTranslation("research");

    // This hook just keeps track of the current view, on default it's myResearch
    const [view, setView] = useState("myResearch");

    // Hook to store all the researches in
    const [researches, setResearches] = useState([]);

    // Function that handles switching it, just simply replaces with new value
    const switchView = (view) => {
        setView(view);
    };

    // planning to do this in a global file
    const fetchResearches = async () => {
        const data = await createEndpoint("researches/").get();
        setResearches(data);
    };

    // Get request to get all researches
    useEffect(() => {
        if (researches.length === 0) {
            fetchResearches();
        }
    }, []); // Run once

    // Print it out for now
    console.log(researches);

    // Something something
    // Function here that handles deleting a research
    // Also a function that lets you join the research
    // so it can be passed to the component

    // The different view for research
    // This is a very lazy way of doing it
    const researchViewComponents = {
        // Here I still need to determine which user is logged in, and display the correct one
        // Can probably just do simple if statement
        myResearch:
            <>
                <TableCompanyResearchView handleView={switchView} />
                <br />
                <br />
                <TablePanelMemberResearchView />
            </>,
        // This view is only available for panelmember
        allResearches: <TableAvailableResearchView handleView={switchView} />,
        // This view is only available for company
        newResearch:
            <div className="research__content">
                <h4 className="research__content_title">
                    Create Research
                </h4>
                <div className="research__content_container">
                    <FormCompanyResearchCreate />
                </div>
            </div>,
        // This view is only available for company
        editResearch:
            <div className="research__content">
                <h4 className="research__content_title">
                    Edit Research
                </h4>
                <div className="research__content_container">
                    {
                        /*
                        Need to pass in the id for the research that is being edited
                        */
                    }
                    <FormCompanyResearchUpdate />
                </div>
            </div>,
        viewResearch:
            <div className="research__content">
                <h4 className="research__content_title">
                    View Research
                </h4>
                <div className="research__content_container">
                    {
                        /*
                        Need to pass in the id for the research that is being edited
                        */
                    }
                    <FormPanelMemberResearchJoin />
                </div>
            </div>
    };

    return (
        <div className="research__dashboard">
            <h1 className="research__dashboard_title">{translate("pageTitle")}</h1>
            <div className="research__dashboard_options">
                {
                    /*
                    Also need to figure something out to display the buttons to certain roles only
                    Like 'Show All' is only for panelmember and 'New Research' is only for company
                    Something like conditional function should solve it maybe, but for now, I am just
                    letting it stay like this
                    */
                }
                <ButtonSecondary
                    text="My Research"
                    isActive={view === "myResearch"}
                    action={() => switchView("myResearch")}
                />
                <ButtonSecondary
                    text="Show All"
                    isActive={view === "allResearches"}
                    action={() => switchView("allResearches")}
                />
                <ButtonSecondary
                    text="New Research"
                    isActive={view === "newResearch"}
                    action={() => switchView("newResearch")}
                />
            </div>
            <div className="research__dashboard_content">
                {researchViewComponents[view]}
            </div>
        </div>
    );
};

export default Research;
