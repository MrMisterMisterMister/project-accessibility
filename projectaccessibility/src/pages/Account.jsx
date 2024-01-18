import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../stores/store";
import { createEndpoint } from "../api/axiosClient";

// Account page
const Account = () => {
    // Translation
    const { t: translate } = useTranslation("account");

    // Get the current role from user
    const { userStore: { user } } = useStore();

    // Keep the user data
    const [userData, setUserData] = useState({});

    // The endpoints for fetching the user data
    // It's dependent on role, so we can get more information
    const availableEndPoints = {
        PanelMember: "panelmembers",
        Company: "companies",
        Admin: "users"
    };

    // Fetch the data of logged in users
    const fetchLoggedInUserData = async () => {
        // Always get the first role, since it doesn't really matter
        // You can only get one role for now
        // Not future proof, but whatever
        const selectedRole = user.userRoles[0];

        // Make the get request to get the data
        const userData = await createEndpoint(`${availableEndPoints[selectedRole]}/${user.userId}`).get();
        // Set it inside the hook
        setUserData(userData);
    };

    // Use effect to trigger the fetching of user data
    // This will also make it so that the profile automatically updates
    // If settings are changed
    useEffect(() => {
        fetchLoggedInUserData();
    }, []); // TODO need a better on mount, empty for now, will fix later

    // Columns that need to be generated based on what type of user is logged in
    // For now there are just 3 types
    // These columns will be automatically picked
    const userColumns = {
        Company: [
            {
                title: translate("company.generalLabel"),
                columns: [
                    { label: translate("company.name"), accessor: "companyName" },
                    { label: translate("company.kvk"), accessor: "kvk" },
                    { label: translate("company.address"), accessor: "address" },
                    { label: translate("company.postalCode"), accessor: "postalCode" },
                    { label: translate("company.province"), accessor: "province" },
                    { label: translate("company.country"), accessor: "country" }
                ]
            },
            {
                title: translate("company.contactLabel"),
                columns: [
                    { label: translate("company.website"), accessor: "websiteUrl" },
                    { label: translate("company.phone"), accessor: "phone" },
                    { label: translate("company.email"), accessor: "email" },
                    { label: translate("company.contactPerson"), accessor: "contactPerson" }
                ]
            }
        ],
        PanelMember: [
            {
                title: translate("panelMember.generalLabel"),
                columns: [
                    { label: translate("panelMember.firstName"), accessor: "firstName" },
                    { label: translate("panelMember.lastName"), accessor: "lastName" },
                    { label: translate("panelMember.dateOfBirth"), accessor: "dateOfBirth" },
                    { label: translate("panelMember.address"), accessor: "address" },
                    { label: translate("panelMember.postalCode"), accessor: "postalCode" },
                    { label: translate("panelMember.city"), accessor: "city" },
                    { label: translate("panelMember.country"), accessor: "country" }
                ]
            },
            {
                title: translate("panelMember.contactLabel"),
                columns: [
                    { label: translate("panelMember.email"), accessor: "email" }
                ]
            },
            {
                title: translate("panelMember.healthLabel"),
                columns: [
                    { label: translate("panelMember.disability"), accessor: "disabilitiesName" }
                ]
            }
        ],
        Admin: [
            {
                title: translate("admin.generalLabel"),
                columns: [
                    { label: translate("admin.email"), accessor: "email" },
                    { label: translate("admin.phone"), accessor: "phone" }
                    // all the fields that are relevant I guess
                ]
            }
        ]
    };

    // I still need to get the role of current user logged in
    // Then loop over the correct key
    // Also need something for admins
    return (
        <div className="account__dashboard">
            <h1 className="account__dashboard_title">
                {translate("pageTitle")}
            </h1>
            <div className="account__dashboard_content">
                <h2 className="account__dashboard_subtitle">
                    {translate("pageSubtitle")}
                </h2>
                <div className="account__dashboard_user">
                    <img
                        className="account__dashboard_user__picture"
                        src="/img/placeholder.jpg"
                        alt="Clodsire"
                    />
                    <div className="account__dashboard_user__info">
                        <span className="account__dashboard_user__name">
                            {userData.email}
                        </span>
                        <p className="account__dashboard_user__biography">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus veritatis pariatur tenetur delectus veniam ducimus officiis suscipit dolore nisi!
                        </p>
                    </div>
                </div>
                <div className="account__dashboard_additional">
                    {userColumns[user.userRoles[0]].map((group, index) => (
                        <React.Fragment key={index}>
                            <h3 className="account__dashboard_additional__title">
                                {group.title}
                            </h3>
                            {group.columns.map(({ label, accessor }, columnIndex) => (
                                <div key={columnIndex} className="account__dashboard_additional__info">
                                    <span className="account__dashboard_additional__info_label">
                                        {label}
                                    </span>
                                    <span className="account__dashboard_additional__info_value">
                                        {
                                            Array.isArray(userData[accessor])
                                                ? (userData[accessor].length > 0 ? userData[accessor].join(", ") : "-")
                                                : (userData[accessor] || "-")
                                        }
                                    </span>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Account;
