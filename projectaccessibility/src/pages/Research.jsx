import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ButtonSecondary } from "../components/Button";
import { TableCompanyResearchView, TablePanelMemberResearchView, TableAvailableResearchView } from "../components/Table";
import { FormCompanyResearchCreate, FormCompanyResearchUpdate, FormPanelMemberResearchJoin } from "../components/Form";
import { createEndpoint } from "../api/axiosClient";
import { useStore } from "../stores/store";

// Research page
// In here the components will be role dependend loaded
// Still need to figure it out, so just putting all components open for now
const Research = () => {
    // Translation
    const { t: translate } = useTranslation("research");

    // This hook just keeps track of the current view, on default it's myResearch
    const [view, setView] = useState("myResearch");

    // Hook to know which research is being worked on
    // Using for editing research and viewing research
    const [researchId, setResearchId] = useState(null);

    // Get the stored user info so we can get access to the current role
    const { userStore: { user } } = useStore();

    // Hook to store being worked on research, singular
    const [research, setResearch] = useState({});

    // Hook to store all the researches in
    const [researches, setResearches] = useState([]);

    // Function that handles switching it, just simply replaces with new value
    const switchView = (view, id = null) => {
        setView(view);
        setResearchId(id);
    };

    // planning to do this in a global file
    const fetchResearches = async () => {
        const data = await createEndpoint("researches").get();
        setResearches(data);
    };

    // Fetch singular research
    // for when viewing or editing
    const fetchResearch = async () => {
        const data = await createEndpoint(`researches/${researchId}`).get();
        setResearch(data);
    };

    // Get request to get all researches
    useEffect(() => {
        if (researches.length === 0) {
            fetchResearches();
        }

        if (researchId != null || researchId) {
            fetchResearch();
        }
    }, [researchId]); // On id mount

    // Something something
    // Function here that handles deleting a research
    // Also a function that lets you join the research
    // so it can be passed to the component

    // The different view for research
    // This is a very lazy way of doing it
    const researchViewComponents = {
        // So this isn't correct here yet, the data needs to be targeted for panel member and research
        // I'm very lazy to fix it
        myResearch: (
            <>
                {user.userRoles.includes("Admin") && (
                    <TableCompanyResearchView data={researches} handleView={switchView} />
                )}
                {user.userRoles.includes("PanelMember") && (
                    <TablePanelMemberResearchView data={researches} />
                )}
            </>
        ),
        allResearches: (
            <TableAvailableResearchView data={researches} handleView={switchView} />
        ),
        newResearch: (
            <div className="research__content">
                <h4 className="research__content_title">
                    Create Research
                </h4>
                <div className="research__content_container">
                    <FormCompanyResearchCreate />
                </div>
            </div>
        ),
        editResearch: (
            <div className="research__content">
                <h4 className="research__content_title">
                    Edit Research
                </h4>
                <div className="research__content_container">
                    <FormCompanyResearchUpdate researchId={researchId} />
                </div>
            </div>
        ),
        viewResearch: (
            <div className="research__content">
                <h4 className="research__content_title">
                    View Research
                </h4>
                <div className="research__content_container">
                    <FormPanelMemberResearchJoin userId={user.userId} data={research} />
                </div>
            </div>
        )
    };

    return (
        <div className="research__dashboard">
            <h1 className="research__dashboard_title">{translate("pageTitle")}</h1>
            <div className="research__dashboard_options">
                <ButtonSecondary
                    text="My Research"
                    isActive={view === "myResearch"}
                    action={() => switchView("myResearch")}
                />
                {user.userRoles.includes("Admin") && (
                    <ButtonSecondary
                        text="Show All"
                        isActive={view === "allResearches"}
                        action={() => switchView("allResearches")}
                    />
                )}
                {user.userRoles.includes("Company") && (
                    <ButtonSecondary
                        text="New Research"
                        isActive={view === "newResearch"}
                        action={() => switchView("newResearch")}
                    />
                )}
            </div>
            <div className="research__dashboard_content">
                {researchViewComponents[view]}
            </div>
        </div>
    );
};

export default Research;
