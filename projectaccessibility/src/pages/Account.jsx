import React from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../stores/store";
import PropTypes from "prop-types";

// Account page
const Account = ({ userData }) => {
    // Translation
    const { t: translate } = useTranslation("account");

    // Get the current role from user
    const { userStore: { user } } = useStore();

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
                title: translate("panelMember.contactLabel"),
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
                    { label: translate("panelMember.email"), accessor: "email" },
                    { label: translate("panelMember.phone"), accessor: "phone" }
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
            <h4 className="account__dashboard_title">
                {translate("pageTitle")}
            </h4>
            <div className="account__dashboard_user">
                <img
                    className="account__dashboard_user__picture"
                    src="/img/placeholder.jpg"
                    alt="Clodsire"
                />
                <div className="account__dashboard_user__info">
                    <span className="account__dashboard_user__name">
                        {userData.userName}
                    </span>
                    <p className="account__dashboard_user__biography">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus veritatis pariatur tenetur delectus veniam ducimus officiis suscipit dolore nisi!
                    </p>
                </div>
            </div>
            <div className="account__dashboard_additional">
                {userColumns[user.userRoles[0]].map((group, index) => (
                    <React.Fragment key={index}>
                        <h5 className="account__dashboard_additional__title">
                            {group.title}
                        </h5>
                        {group.columns.map(({ label, accessor }, columnIndex) => (
                            <div key={columnIndex} className="account__dashboard_additional__info">
                                <span className="account__dashboard_additional__info_label">
                                    {label}
                                </span>
                                <span className="account__dashboard_additional__info_value">
                                    {userData[accessor] || "-"}
                                </span>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

// Prop types for account
Account.propTypes = {
    userData: PropTypes.object.isRequired
};

export default Account;
