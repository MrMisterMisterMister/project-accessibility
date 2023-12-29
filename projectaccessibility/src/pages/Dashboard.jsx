import React from "react";
import { Container } from "react-bootstrap";
import { BarChart, PersonCircle, Gear } from "react-bootstrap-icons";
import { NavDashboardBottomNav, NavDashboardTopNav } from "../components/Nav";

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
        }
    ];

    return (
        <div className="dashboard__page">
            <div className="dashboard__page_menu">
                <NavDashboardTopNav
                    profilePicturePath="/img/placeholder.jpg"
                    profilePictureAlt="Clodsire"
                    userName="Your Mom"
                />
                <NavDashboardBottomNav items={items} />
            </div>
            {/* content */}
            <div className="dashboard__page_content">
                <Container>
                    <h1>Welcome, Your mom</h1>
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
                </Container>
            </div>
        </div>
    );
};

export default Dashboard;
