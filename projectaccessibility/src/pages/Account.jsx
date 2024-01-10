import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

// Account page
const Account = ({ userData }) => {
    // Translation
    const { t: translate } = useTranslation("account"); // todo

    // Columns to generate the company profile
    // These still need to be localized, just the labels
    const companyColumns = [
        {
            title: "General",
            columns: [
                { label: "Company Name:", accessor: "companyName" },
                { label: "KvK:", accessor: "kvk" },
                { label: "Address:", accessor: "address" },
                { label: "Postal Code:", accessor: "postalCode" },
                { label: "Province:", accessor: "province" },
                { label: "Country:", accessor: "country" }
            ]
        },
        {
            title: "Contacts",
            columns: [
                { label: "Website:", accessor: "websiteUrl" },
                { label: "Phone Number:", accessor: "phone" },
                { label: "Email Address:", accessor: "email" },
                { label: "Contact Person:", accessor: "contactPerson" }
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
