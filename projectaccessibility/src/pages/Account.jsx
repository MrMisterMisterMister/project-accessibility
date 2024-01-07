import React from "react";
import { AccountCompany, AccountPanelMember } from "../components/Account";

// TODO
// This is the page for when you click 'Profile'
// It still needs to be updated to show the correct profile, depending on which user type is logged in
const Account = () => {
    return (
        <>
            <AccountCompany />
            <AccountPanelMember />
        </>
    );
};

export default Account;
