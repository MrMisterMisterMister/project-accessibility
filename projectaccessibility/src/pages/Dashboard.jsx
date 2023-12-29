import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BarChart, PersonCircle, Gear, BoxArrowRight } from "react-bootstrap-icons";
import { NavDashboardBottomNav, NavDashboardTopNav } from "../components/Nav";
// Test
import { SettingsPanelmember, SettingsEmail, SettingsPassword, SettingsCompany } from "../components/Settings";

// Dashboard page
// For now it's just the nav
const Dashboard = () => {
    // Some test items
    const items = [
        {
            path: "#",
            icon: <BarChart />,
            title: "Dashboard"
        },
        {
            path: "#",
            icon: <PersonCircle />,
            title: "Account"
        },
        {
            path: "#",
            icon: <Gear />,
            title: "Settings"
        },
        {
            path: "#",
            icon: <BoxArrowRight />,
            title: "Sign out"
        }
    ];

    // State to keep track whether of scrolling behaviour done by user
    const [isScrolling, setIsScrolling] = useState(false);

    // This effect checks if the nav should be fixed to stay visible while the user is scrolling
    useEffect(() => {
        const scrollHandler = () => {
            const scrollPosition = window.scrollY;
            setIsScrolling(scrollPosition > 90); // Update the state based on scroll position (90 is the height of navtop)
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    // All the different components need to be loaded in the main
    // The page will not refresh, but instead just replace the current content on screen
    // This way the user can perform tasks like, changing their settings, their account information or joining a research
    // The components that will be loaded depend on the user type
    // For example:
    // A panelmember doesn't have a list to view all panelmembers, companies or researches
    // A company can't change a panelmember account information, and so on
    // First need to determine what kind of user is logged in from backend or something
    return (
        <div className="dashboard__page">
            <div className={`dashboard__page_menu ${isScrolling ? "fixed__scroll" : ""}`}>
                <NavDashboardTopNav
                    profilePicturePath="/img/placeholder.jpg"
                    profilePictureAlt="Clodsire"
                    userName="Your Mom"
                />
                <NavDashboardBottomNav items={items} />
            </div>
            <main className="dashboard__page_main">
                <Container>
                    <div className="dashboard__page_content">
                        <SettingsPanelmember />
                        <SettingsCompany />
                        <SettingsEmail />
                        <SettingsPassword />
                        <h1>Welcome, Your mom</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi sit debitis a corrupti atque excepturi pariatur ea, veritatis est aut alias neque blanditiis esse recusandae autem beatae placeat dolorum!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi sit debitis a corrupti atque excepturi pariatur ea, veritatis est aut alias neque blanditiis esse recusandae autem beatae placeat dolorum!</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </Container>
            </main>
        </div>
    );
};

export default Dashboard;
