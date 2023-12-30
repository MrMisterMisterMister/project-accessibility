import React from "react";

// Account component for panelmember
const AccountPanelmember = () => {
    return (
        <div className="account__dashboard">
            <div className="account__dashboard_user">
                <div className="account__dashboard_user__picture">
                    <img src="/img/placeholder.jpg" />
                </div>
                <div className="account__dashboard_user__info">
                    <span className="account__dashboard_user__name">Your Mom</span>
                    <p className="account__dashboard_user__biograph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus veritatis pariatur tenetur delectus veniam ducimus officiis suscipit dolore nisi! Velit eligendi ad voluptatibus eius, voluptatem consectetur laudantium asperiores. Odit.</p>
                </div>
            </div>
            <div className="account__dashboard_additional__info">
                like birthday, country, etc
            </div>
        </div>
    );
};

// Account component for company
// It's best to also load in the properties like a data of array for company
const AccountCompany = () => {
    return (
        <></>
    );
};

export { AccountPanelmember, AccountCompany };
