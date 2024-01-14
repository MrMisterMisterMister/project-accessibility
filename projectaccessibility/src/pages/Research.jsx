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

    // TODO need to do something about all those unneeded requests
    // Will figure something out later today or tomorrow

    // TODO
    // This can probably be combined with the fetchPanelMemberResearches, where I just give it a different endpoint
    const fetchCompanyResearches = async () => {
        // Will optimize it later
        const data = await createEndpoint(`researches/organizer/${user.userId}`).get();
        setCompanyResearches(data);
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

    // This function handles deleting a research
    // Passes this as a property, so the button can use it as onAction
    // Deletes the passed research with given id
    const handleResearchDeletion = (id) => {
        // TODO need to make the message better
        // also show alerts for when deleting
        if (confirm("Are you sure you want to delete this research?") === true) {
            // For now just console log which research id is getting deleted
            const test = createEndpoint("researches").delete(id);
            console.log(test); // TODO will remove it
            console.log("Deleted ResearchId: " + id);
        }
    };

    // This function allows a panelmember to join an available research
    // Same as above, this function is passed as a prop to a button to trigger it with onAction
    // Only need the research id, since the panelmember id is gotten by token
    const handleResearchParticipation = (id) => {
        // TODO same as above
        if (confirm("join") === true) {
            const test = createEndpoint(`researchparticipants/join-research/${id}`).post();
            console.log(test); // TODO wiill remove it
            console.log("Joined ResearchId: " + id);
        }
    };

    // This function handles a panelmember leaving for whatever reason
    const handleResearchLeaving = (id) => {
        // TODO same as above
        if (confirm("leave") === true) {
            const test = createEndpoint(`researchparticipants/leave-research/${id}`).delete();
            console.log(test); // TODO wiill remove it
            console.log("Leaving ResearchId: " + id);
        }
    };

    // The different view for research
    // This is a very lazy way of doing it
    const researchViewComponents = {
        // So this isn't correct here yet, the data needs to be targeted for panel member and research
        // I'm very lazy to fix it
        myResearch: (
            <>
                {user.userRoles.includes("Admin") && (
                    <TableAdminResearchView data={allResearches} />
                )}
                {user.userRoles.includes("Company") && (
                    <TableCompanyResearchView data={companyResearches} onEdit={switchView} onDelete={handleResearchDeletion} />
                )}
                {user.userRoles.includes("PanelMember") && (
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
                    <FormCompanyResearchCreate organizerId={user.userId} />
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
                {user.userRoles.includes("PanelMember") && (
                    <ButtonSecondary
                        text={translate("buttons.showAll")}
                        isActive={view === "allResearches"}
                        action={() => switchView("allResearches")}
                    />
                )}
                {user.userRoles.includes("Company") && (
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
