import React from "react";
import { Container, Navbar } from "react-bootstrap";

// Test
const Dashboard = () => {
    return (
        <div className="dashboard__page">
            <div className="dashboard__page_menu">
                <nav className="dashboard__page_menu__topnav">
                    <Container className="dashboard__page_menu__container">
                        <div className="dashboard__page_menu__brand">
                            <Navbar.Brand href="/">
                                <img
                                    src="/img/brand/logo_white_text_dark.png"
                                    width="278"
                                    height="60"
                                    alt="Logo"
                                    title="Project Accessibility"
                                />
                            </Navbar.Brand>
                        </div>
                        <div className="dashboard__page_menu__user">
                            <img
                                className="dashboard__page_menu__user_picture"
                                src="/img/placeholder.jpg" // Placeholder
                                alt="Profile" width="30px"
                                height="30px"
                            />
                            <span className="dashboard__page_menu__user_name">John Doe</span>
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
                <br/>
                <br/>
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi, eum aliquam sed ab molestias facilis officiis? Suscipit est minima asperiores voluptatem sequi corrupti voluptas odit itaque, distinctio doloremque molestias?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi, eum aliquam sed ab molestias facilis officiis? Suscipit est minima asperiores voluptatem sequi corrupti voluptas odit itaque, distinctio doloremque molestias?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi, eum aliquam sed ab molestias facilis officiis? Suscipit est minima asperiores voluptatem sequi corrupti voluptas odit itaque, distinctio doloremque molestias?
            </div>
        </div>
    );
};

export default Dashboard;
