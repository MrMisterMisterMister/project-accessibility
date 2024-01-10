import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

// Account page
const Account = ({ userData }) => {
    // Translation
    const { t: translate } = useTranslation("account"); // todo

    // Columns to generate the company profile
    const companyColumns = [
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
    ];

    // Columns to generate the panel member profile
    // Labels need to be localized
    // These labels also aren't correct yet, will need to update
    // Also need disabilities somewhere
    const panelMemberColumns = [
        {
            title: "General",
            columns: [
                { label: "Birthday:", accessor: "birthday" },
                { label: "Country:", accessor: "country" },
                { label: "Language:", accessor: "language" },
                { label: "Address:", accessor: "address" }
            ]
        },
        {
            title: "Contacts",
            columns: [
                { label: "Phone:", accessor: "phone" },
                { label: "Email:", accessor: "email" }
            ]
        },
        {
            title: "Assistive Tools",
            columns: [
                { label: "Tool(s):", accessor: "tools" }
            ]
        }
    ];

    // Columns for admins
    const adminColumns = [
        {
            // empty like your head
        }
    ];

    // I still need to get the role of current user logged in
    // Then loop over the correct key
    // Also need something for admins
    return (
        <div className="account__dashboard">
            <h4 className="account__dashboard_title">
                Your Profile
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
                {
                    /*
                    The column it loops over needs to be changed
                    depending on what user is logged in
                    panelmember is now just here for show, since it's the most complete
                    */
                }
                {companyColumns.map((group, index) => (
                    <React.Fragment key={index}>
                        <h5 className="account__dashboard_additional__title">
                            {group.title}
                        </h5>
                        {group.columns.map((column, columnIndex) => (
                            <div key={columnIndex} className="account__dashboard_additional__info">
                                <span className="account__dashboard_additional__info_label">
                                    {column.label}
                                </span>
                                <span className="account__dashboard_additional__info_value">
                                    {userData[column.accessor]}
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
