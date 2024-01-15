import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ButtonSecondary } from "../components/Button";
import { TableCompanyResearchView, TablePanelMemberResearchView, TableAdminResearchView, TableAvailableResearchView } from "../components/Table";
import { FormCompanyResearchCreate, FormCompanyResearchUpdate, FormPanelMemberResearchJoin } from "../components/Form";
import { Alert } from "../components/Alert";
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

    // For managing errors
    const [formAlerts, setFormAlerts] = useState({
        errors: [],
        success: []
    });

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

    // Use effect to reset the alerts
    // This is so the alert dont show up anymore
    useEffect(() => {
        setTimeout(() => {
            setFormAlerts({ errors: [], success: [] });
        }, 5000);
    }, [formAlerts]);

    // Load all the data in
    useEffect(() => {
        // TODO this isnt correct if length 0
        if (allResearches.length === 0) fetchAllResearches();

        // m
        if (user.userRoles.includes("PanelMember") && panelMemberResearches.length === 0) {
            fetchPanelMemberResearches();
        }

        // e
        if (user.userRoles.includes("Company") && companyResearches.length === 0) {
            fetchCompanyResearches();
        }

        // h
        if (researchId != null || researchId) {
            fetchSingularResearch();
        }
    }, [researchId, companyResearches, allResearches, panelMemberResearches]);

    // This function handles deleting a research
    // Passes this as a property, so the button can use it as onAction
    // Deletes the passed research with given id
    const handleResearchDeletion = (id) => {
        // also show alerts for when deleting
        if (confirm(translate("confirm.delete")) === true) {
            // Make the delete request to backend
            const researchDeletionResponse = createEndpoint("researches").delete(id);

            // Handle the response from the delete call
            researchDeletionResponse
                .then((response) => {
                    // Check if response is ok
                    if (response.status === 200) {
                        // Configurate some shit
                        setFormAlerts({ success: { code: "ResearchHasBeenDeleted" } });
                    }
                })
                .catch((error) => {
                    // Handle errors by updating the error state with the response data from the api server
                    setFormAlerts({ error: error.response?.data });
                });
        }
    };

    // This function allows a panelmember to join an available research
    // Same as above, this function is passed as a prop to a button to trigger it with onAction
    // Only need the research id, since the panelmember id is gotten by token
    const handleResearchParticipation = (id) => {
        // Show default javascript confirm
        if (confirm(translate("confirm.join")) === true) {
            // Make post request
            const researchParticipationResponse = createEndpoint(`researchparticipants/join-research/${id}`).post();

            // Handle the response from the delete call
            researchParticipationResponse
                .then((response) => {
                    // Check if response is ok
                    if (response.status === 200) {
                        // Configurate alerts
                        setFormAlerts({ success: { code: "ParticipantHasJoined" } });
                    }
                })
                .catch((error) => {
                    // Handle errors by updating the error state with the response data from the api server
                    setFormAlerts({ error: error.response?.data });
                });
        }
    };

    // This function handles a panelmember leaving for whatever reason
    const handleResearchLeaving = (id) => {
        // Javascript confirm
        if (confirm(translate("confirm.leave")) === true) {
            // make delete request
            const researchLeavingResponse = createEndpoint("researchparticipants/leave-research").delete(id);

            // Handle the response from the delete call
            researchLeavingResponse
                .then((response) => {
                    // Check if response is ok
                    if (response.status === 200) {
                        // Configurate the success message
                        setFormAlerts({ success: { code: "ParticipantHasLeft" } });
                    }
                })
                .catch((error) => {
                    // Handle errors by updating the error state with the response data from the api server
                    setFormAlerts({ error: error.response?.data });
                });
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
                    {translate("createResearch")}
                </h4>
                <div className="research__content_container">
                    <FormCompanyResearchCreate organizerId={user.userId} />
                </div>
            </div>
        ),
        editResearch: (
            <div className="research__content">
                <h4 className="research__content_title">
                    {translate("editResearch")}
                </h4>
                <div className="research__content_container">
                    <FormCompanyResearchUpdate researchId={researchId} />
                </div>
            </div>
        ),
        viewResearch: (
            <div className="research__content">
                <h4 className="research__content_title">
                    {translate("viewResearch")}
                </h4>
                <div className="research__content_container">
                    <FormPanelMemberResearchJoin researchId={researchId} data={research} />
                </div>
            </div>
        )
    };

    // TODO show alerts
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
            <Alert data={formAlerts} />
            <div className="research__dashboard_content">
                {researchViewComponents[view]}
            </div>
        </div>
    );
};

export default Research;
