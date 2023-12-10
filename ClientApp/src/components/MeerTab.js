import React, { useState } from 'react';
import "../pages/Styling/MeerTab.css";

const DropDownMenu = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const websiteLinks = [
        { name: 'Account', path: './Account' },
        { name: 'Inloggen', path: './login' },
        { name: 'Uitloggen', path: '/' }  //Tijdelijk path
    ];

    return (
        <div className="dropdown">
            <button id="MeerKnop" onClick={toggleDropdown}>Meer</button>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                {websiteLinks.map(link => (
                    <li key={link.name}>
                        <a href={link.path}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDownMenu;
