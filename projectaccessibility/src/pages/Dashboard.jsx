import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BarChart, PersonCircle, Gear, Book, BoxArrowRight, Buildings, Person } from "react-bootstrap-icons";
import { NavDashboardBottomNav, NavDashboardTopNav } from "../components/Nav";
import Account from "./Account";
import Settings from "./Settings";
import Research from "./Research";

// Dashboard page
const Dashboard = () => {
    // State to manage the navItems in the menu
    const [navItems, setNavItems] = useState([
        {
            icon: <BarChart />,
            title: "Dashboard",
            active: true
        },
        {
            icon: <Person />,
            title: "Panelmember"
        },
        {
            icon: <Buildings />,
            title: "Company"
        },
        {
            page: <Research />,
            icon: <Book />,
            title: "Research"
        },
        {
            page: <Account />,
            icon: <PersonCircle />,
            title: "Account"
        },
        {
            page: <Settings />,
            icon: <Gear />,
            title: "Settings"
        },
        {
            icon: <BoxArrowRight />,
            title: "Sign out"
        }
    ]);

    // State to keep track whether of scrolling behaviour done by user
    const [isScrolling, setIsScrolling] = useState(false);

    // State to keep track of the page that needs to be rendered based on what navItem is clicked
    const [pageToRender, setPageToRender] = useState(null);

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

    // This function handles button clicks in the Nav
    // It will then render the correct page
    const handleNavItemClick = (page) => {
        // Set the page that needs to be rendered
        setPageToRender(page);

        // If a NavItem is being clicked on, update the original array with a new active state
        // This way the user will know what page they are on
        setNavItems((prevItems) =>
            prevItems.map((item) => ({
                ...item,
                active: item.page === page
            }))
        );
    };

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
            <div
                className={`dashboard__page_menu ${isScrolling ? "fixed__scroll" : ""}`}
            >
                <NavDashboardTopNav
                    profilePicturePath="/img/placeholder.jpg"
                    profilePictureAlt="Clodsire"
                    userName="Clodsire"
                />
                <NavDashboardBottomNav
                    navItems={navItems}
                    onNavItemClick={handleNavItemClick}
                />
            </div>
            <main className="dashboard__page_main">
                <Container>
                    <div className="dashboard__page_content">
                        <h1>Welcome, Clodsire!</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum modi sit debitis a corrupti atque
                            excepturi pariatur ea, veritatis est aut alias neque
                            blanditiis esse recusandae autem beatae placeat
                            dolorum!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum modi sit debitis a corrupti atque
                            excepturi pariatur ea, veritatis est aut alias neque
                            blanditiis esse recusandae autem beatae placeat
                            dolorum!
                        </p>
                        <br />
                        <br />
                        {/* here it will render stuff */}
                        {pageToRender && pageToRender}
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
