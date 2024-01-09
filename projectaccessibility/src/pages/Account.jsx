import React from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../stores/store";
import { AccountCompany, AccountPanelMember } from "../components/Account";

// TODO
// This is the page for when you click 'Profile'
// It still needs to be updated to show the correct profile, depending on which user type is logged in
const Account = () => {
    // Translation
    const { t: translate } = useTranslation(""); // todo

    // Get the stored user info
    const { userStore: { user } } = useStore();

    console.log(user);

    return (
        <>
            <AccountCompany />
            <AccountPanelMember />
        </>
    );
};

export default Account;
