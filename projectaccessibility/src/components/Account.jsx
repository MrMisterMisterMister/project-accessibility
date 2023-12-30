import React from "react";

// Account component for panelmember
const AccountPanelmember = () => {
    // All the fields are hardcoded for now
    // This will be removed and added as property once I figure out how to get the user guid after they logged in
    // I will also most likely merge both panelmember and company into 1 view, and load the data automatically
    return (
        <div className="account__dashboard">
            <div className="account__dashboard_user">
                <img className="account__dashboard_user__picture" src="/img/placeholder.jpg" alt="Clodsire" />
                <div className="account__dashboard_user__info">
                    <span className="account__dashboard_user__name">Your Mom</span>
                    <p className="account__dashboard_user__biography">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus veritatis pariatur tenetur delectus veniam ducimus officiis suscipit dolore nisi!</p>
                </div>
            </div>
            <div className="account__dashboard_additional">
                <div className="">
                    <h4>General</h4>
                    <div className="">
                        <span className="">Birthday:</span>
                        <span className="">December 30, 2023</span>
                    </div>
                    <div className="">
                        <span className="">Country:</span>
                        <span className="">The Netherlands</span>
                    </div>
                    <div className="">
                        <span className="">Language:</span>
                        <span className="">English</span>
                    </div>
                    <h4>Contact</h4>
                    <div className="">
                        <span className="">Phone:</span>
                        <span className="">+31 (0)6 123 45 678</span>
                    </div>
                    <div className="">
                        <span className="">Email:</span>
                        <span className="">your@mom.com</span>
                    </div>
                </div>
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
