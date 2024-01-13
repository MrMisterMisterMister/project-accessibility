import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ButtonSecondary } from "../components/Button";
import { TableCompanyResearchView, TablePanelMemberResearchView, TableAdminResearchView, TableAvailableResearchView } from "../components/Table";
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
    // This one is for admin
    const [allResearches, setAllResearches] = useState([]);

    // Hook for researches that a panel member is participating in
    const [panelMemberResearches, setPanelMemberResearches] = useState([]);

    // Hook to get the researches that is made by the logged in company
    const [companyResearches, setCompanyResearches] = useState([]);

    // Function that handles switching it, just simply replaces with new value
    const switchView = (view, id = null) => {
        setView(view);
        setResearchId(id);
    };

    // For admin I guess, so they can see all researches
    // Has no actions however
    const fetchAllResearches = async () => {
        const data = await createEndpoint("researches").get();
        setAllResearches(data);
    };

    // This is for fetching the researches for a panelmember
    // So they can see which one they have joined
    const fetchPanelMemberResearches = async () => {
        const data = await createEndpoint(`panelmembers/${user.userId}`).get();
        const researchIds = data.participationsId || [];
        const researchPromises = researchIds.map((id) => createEndpoint(`researches/${id}`).get());
        // Lazy way to get all
        const researchResults = await Promise.all(researchPromises);
        // Set them inside hook
        setPanelMemberResearches(researchResults);
    };

    // TODO
    // This can probably be combined with the fetchPanelMemberResearches, where I just give it a different endpoint
    const fetchCompanyResearches = async () => {
        // Need to make a get request to get the ids then loop over it
        // This is just test, will be removed later
        setCompanyResearches([
            {
                id: "99",
                title: "My Child is Cool",
                description: "Insert some inspiring quote.",
                date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
                type: "Online",
                category: "Test category",
                reward: 0.01
            }
        ]);
    };

    // Fetch singular research
    // for when viewing or editing
    const fetchSingularResearch = async () => {
        const data = await createEndpoint(`researches/${researchId}`).get();
        setResearch(data);
    };

    // Load all the data in
    useEffect(() => {
        if (allResearches.length === 0) fetchAllResearches();
        if (researchId != null || researchId) fetchSingularResearch();
        if (panelMemberResearches.length === 0) fetchPanelMemberResearches();
        if (companyResearches.length === 0) fetchCompanyResearches();
    }, [researchId]); // On id mount

    // Something something
    // Function here that handles deleting a research
    // Also a function that lets you join the research
    // so it can be passed to the component
    const handleResearchDeletion = (id) => {
        // Make a delete request to the API
        // So it deletes the research
        // Also need to make some sort of confirmation first
        // Like a popup
        // For now just console log which research id is getting deleted
        console.log("Deleted ResearchId: " + id);
    };

    // Function that handles Panel Members to join a research
    // Will need to know which research they want to join and also the current logged in user id
    const handleResearchParticipation = (id) => {
        // This needs more logic, for now just print out which research they wanted to join
        console.log("Joined ResearchId: " + id);
    };

    // This function handles a panelmember leaving for whatever reason
    const handleResearchLeaving = (id) => {
        // Need to do the actual deletion
        console.log("Leaving researchid: " + id);
    };

    // The different view for research
    // This is a very lazy way of doing it
    const researchViewComponents = {
        // So this isn't correct here yet, the data needs to be targeted for panel member and research
        // I'm very lazy to fix it
        myResearch: (
            <>
                {user.userRoles.includes("Admin") /* TODO will change later */ && (
                    <TableAdminResearchView data={allResearches} /> /* TODO this one isn't correct, need to still get all researches from the company, but temp for now */
                )}
                {user.userRoles.includes("Admin") /* TODO will change later */ && (
                    <TableCompanyResearchView data={companyResearches} onEdit={switchView} onDelete={handleResearchDeletion} />
                )}
                {user.userRoles.includes("Admin") /* TODO will change later */ && (
                    <TablePanelMemberResearchView data={panelMemberResearches} onLeave={handleResearchLeaving} />
                )}
            </>
        ),
        allResearches: (
            <TableAvailableResearchView data={allResearches} onView={switchView} onJoin={handleResearchParticipation} />
        ),
        newResearch: (
            <div className="research__content">
                <h4 className="research__content_title">
                    Create Research {/* TODO localization */}
                </h4>
                <div className="research__content_container">
                    <FormCompanyResearchCreate />
                </div>
            </div>
        ),
        editResearch: (
            <div className="research__content">
                <h4 className="research__content_title">
                    Edit Research {/* TODO localization */}
                </h4>
                <div className="research__content_container">
                    <FormCompanyResearchUpdate researchId={researchId} />
                </div>
            </div>
        ),
        viewResearch: (
            <div className="research__content">
                <h4 className="research__content_title">
                    View Research {/* TODO localization */}
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
                    text={translate("buttons.myResearch")}
                    isActive={view === "myResearch"}
                    action={() => switchView("myResearch")}
                />
                {user.userRoles.includes("Admin") /* TODO will change later */ && (
                    <ButtonSecondary
                        text={translate("buttons.showAll")}
                        isActive={view === "allResearches"}
                        action={() => switchView("allResearches")}
                    />
                )}
                {user.userRoles.includes("Admin") /* TODO will change later */ && (
                    <ButtonSecondary
                        text={translate("buttons.newResearch")}
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
