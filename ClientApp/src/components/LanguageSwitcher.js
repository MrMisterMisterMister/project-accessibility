import React from "react";

// Language switcher component
const LanguageSwitcher = ({ language, handleChangeLanguage }) => {
    // Languages
    const languages = [
        { name: "Nederlands", code: "nl" },
        { name: "English", code: "en" }
    // CAN BE EXPANDED
    ];

    return (
        <div className="language">
            {/* TODO FIX STYLING */}
            <select onChange={handleChangeLanguage} value={language}>
                {languages.map(({ name, code }) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSwitcher;
