import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
    BarChart,
    PersonCircle,
    Gear,
    Book,
    BoxArrowRight,
    Buildings,
    Person,
    ChatLeftDots
} from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { useStore } from "../stores/store";
import { createEndpoint } from "../api/axiosClient";
import { observer } from "mobx-react-lite";
import { NavDashboardBottomNav, NavDashboardTopNav } from "../components/Nav";
import PanelMember from "./PanelMember";
import Company from "./Company";
import Research from "./Research";
import Chats from "./Chats";
import Account from "./Account";
import Settings from "./Settings";
import Logout from "./Logout";

// Dashboard page
const Dashboard = observer(() => {
    // Translation
    const { t: translate } = useTranslation("dashboard");

    // Get the user and GetUser from userstore
    const { userStore: { user, getUser } } = useStore();

    // Hook to store the current user in
    const [currentUser, setCurrentUser] = useState({});

    // fetches and updates user if the user is changed
    useEffect(() => {
        const getData = async () => {
            // If user is not available or needs to be updated, fetch it
            if (!user) await getUser();
            // Proceed to fetch additional user data or details
            if (user) {
                const data = await createEndpoint(`users/${user.userId}`).get();
                setCurrentUser(data);
            }
        };

        getData();
    }, [user]);

    // State to manage the navItems in the menu
    const [navItems, setNavItems] = useState([
        {
            page: <p>Insert some inspiring text here, also welcome.</p>,
            icon: <BarChart />,
            title: translate("dashboard"),
            active: true
        },
        {
            page: <PanelMember />,
            icon: <Person />,
            title: translate("panelmember")
        },
        {
            page: <Company />,
            icon: <Buildings />,
            title: translate("company")
        },
        {
            page: <Research />,
            icon: <Book />,
            title: translate("research")
        },
        {
            page: <Chats />,
            icon: <ChatLeftDots />,
            title: translate("chats")
        }
    ]);

    // These are the items that are displayed in the userMenu dropdown
    // Had to make a seperate one, so they wouldn't be in the way of the main nav menu in dashboard
    const userMenuItems = [
        {
            page: <Account />,
            icon: <PersonCircle />,
            label: translate("profile")
        },
        {
            page: <Settings />,
            icon: <Gear />,
            label: translate("settings")
        },
        {
            page: <Logout />,
            icon: <BoxArrowRight />,
            label: translate("signout")
        }
    ];

    // State to keep track whether of scrolling behaviour done by user
    const [isScrolling, setIsScrolling] = useState(false);

    // State to keep track of the page that needs to be rendered based on what navItem is clicked
    const [pageToRender, setPageToRender] = useState(navItems[0].page || null); // temp

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
                    picturePath="/img/placeholder.jpg"
                    pictureAlt="Clodsire"
                    userName={currentUser.userName}
                    userMenuItems={userMenuItems}
                    onNavItemClick={handleNavItemClick}
                />
                <NavDashboardBottomNav
                    navItems={navItems}
                    onNavItemClick={handleNavItemClick}
                />
            </div>
            <main className="dashboard__page_main">
                <Container>
                    <div className="dashboard__page_content">
                        {pageToRender && pageToRender}
                    </div>
                </Container>
            </main>
        </div>
    );
});

export default Dashboard;
