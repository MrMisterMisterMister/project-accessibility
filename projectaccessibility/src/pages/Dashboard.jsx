import React from "react";
import { Container } from "react-bootstrap";

// Test
const Dashboard = () => {
    return (
        <div className="dashboard__page">
            <div className="dashboard__page_menu">
                <nav className="dashboard__page_menu__topnav">
                    <Container>
                        <div className="dashboard__page_menu__wrapper">
                            <div className="dashboard__page_menu__brand">
                                <img src="/img/brand/logo_white_text_dark.png" height="60px" width="" />
                            </div>
                            <div className="dashboard__page_menu__user">
                                {/* profile goes here */}
                            </div>
                        </div>
                    </Container>
                </nav>
                <nav className="dashboard__page_menu__bottomnav">
                    <Container>
                        <ul className="nav__dashboard_menu__nav">
                            <li className="nav__dashboard_menu__nav_item">
                                <a className="nav__dashboard_menu__nav_link" href="">
                                    <i></i>
                                    <span className="nav__dashboard_menu__nav_title">Test</span>
                                </a>
                            </li>
                            <li className="nav__dashboard_menu__nav_item">
                                <a className="nav__dashboard_menu__nav_link" href="">
                                    <i></i>
                                    <span className="nav__dashboard_menu__nav_title">Test 2</span>
                                </a>
                            </li>
                            <li className="nav__dashboard_menu__nav_item">
                                <a className="nav__dashboard_menu__nav_link" href="">
                                    <i></i>
                                    <span className="nav__dashboard_menu__nav_title">Test 3</span>
                                </a>
                            </li>
                        </ul>
                    </Container>
                </nav>
            </div>
            <div className="">
            </div>
        </div>
    );
};

export default Dashboard;
