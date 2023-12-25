import React from "react";
import PropTypes from "prop-types";

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

// Prop type for languageswitcher
LanguageSwitcher.propTypes = {
    language: PropTypes.string.isRequired,
    handleChangeLanguage: PropTypes.func.isRequired
};

export default LanguageSwitcher;
