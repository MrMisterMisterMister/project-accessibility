import React from "react";

// Account component for panelmember
const AccountPanelMember = () => {
    // All the fields are hardcoded for now
    // This will be removed and added as property once I figure out how to get the user guid after they logged in
    // I will also most likely merge both panelmember and company into 1 view, and load the data automatically
    return (
        <div className="account__dashboard">
            <h4 className="account__dashboard_title">Your Profile</h4>
            <div className="account__dashboard_user">
                <img
                    className="account__dashboard_user__picture"
                    src="/img/placeholder.jpg"
                    alt="Clodsire"
                />
                <div className="account__dashboard_user__info">
                    <span className="account__dashboard_user__name">
                        John Doe
                    </span>
                    <p className="account__dashboard_user__biography">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam accusamus veritatis pariatur tenetur delectus
                        veniam ducimus officiis suscipit dolore nisi!
                    </p>
                </div>
            </div>
            <div className="account__dashboard_additional">
                <h5 className="account__dashboard_additional__title">
                    General
                </h5>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Birthday:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        December 30, 2023
                    </span>
                </div>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Country:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        The Netherlands
                    </span>
                </div>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Language:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        English
                    </span>
                </div>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Address:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        Streetname 123, 5678 BC
                    </span>
                </div>
                <h5 className="account__dashboard_additional__title">
                    Contacts
                </h5>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Phone:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        +31 (0)6 123 45 678
                    </span>
                </div>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Email:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        your@mom.com
                    </span>
                </div>
                <h5 className="account__dashboard_additional__title">
                    Assistive Tools
                </h5>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Tool(s):
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        Screenreader and Voice command software
                    </span>
                </div>
            </div>
        </div>
    );
};

// Account component for company
// It's best to also load in the properties like a data of array for company
const AccountCompany = () => {
    return (
        <div className="account__dashboard">
            <h4 className="account__dashboard_title">Your Profile</h4>
            <div className="account__dashboard_user">
                <img
                    className="account__dashboard_user__picture"
                    src="/img/placeholder.jpg"
                    alt="Clodsire"
                />
                <div className="account__dashboard_user__info">
                    <span className="account__dashboard_user__name">
                        Accessibility
                    </span>
                    <p className="account__dashboard_user__biography">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam accusamus veritatis pariatur tenetur delectus
                        veniam ducimus officiis suscipit dolore nisi!
                    </p>
                </div>
            </div>
            <div className="account__dashboard_additional">
                <h5 className="account__dashboard_additional__title">
                    General
                </h5>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Company Name:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        Project Accessibility
                    </span>
                </div>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        KvK:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        8417214
                    </span>
                </div>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Streetname:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        Teststraat 123
                    </span>
                </div>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Zipcode:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        1234 AB
                    </span>
                </div>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Place:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        Utrecht
                    </span>
                </div>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Country:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        The Netherlands
                    </span>
                </div>
                <h5 className="account__dashboard_additional__title">
                    Contacts
                </h5>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Website:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        https://clodsire.nl
                    </span>
                </div>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Phone:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        +31 (0)6 123 45 678
                    </span>
                </div>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Email:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        your@mom.com
                    </span>
                </div>
                <div className="account__dashboard_additional__info">
                    <span className="account__dashboard_additional__info_label">
                        Contactperson:
                    </span>
                    <span className="account__dashboard_additional__info_value">
                        John Doe
                    </span>
                </div>
            </div>
        </div>
    );
};

// The key and values are suppose to be automatically done
const AccountProfile = () => {
    return <></>;
};

export { AccountProfile, AccountPanelMember, AccountCompany };
