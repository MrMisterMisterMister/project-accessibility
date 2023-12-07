import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

export class Footer extends Component {
    render() {
        return (
            <footer className="site__footer">
                <Container className="site__footer_wrapper">
                    <div className="site__footer_menu">
                        <div className="site__footer_logo">
                            <img src={require("../assets/img/brand/logo.png")} width="50" height="60" alt="Logo" title="Project Accessibility" />
                        </div>
                        <div className="site_footer_col">
                            <h2 className="site__footer_heading">Snel naar</h2>
                            <Nav className="site__footer_menunav">
                                <NavItem className="site__footer_menunav_item">
                                    <NavLink tag={Link} className="site__footer_menunav_link" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem className="site__footer_menunav_item">
                                    <NavLink tag={Link} className="site__footer_menunav_link" to="/over-ons">Over ons</NavLink>
                                </NavItem>
                                <NavItem className="site__footer_menunav_item">
                                    <NavLink tag={Link} className="site__footer_menunav_link" to="/expertise">Expertise</NavLink>
                                </NavItem>
                                <NavItem className="site__footer_menunav_item">
                                    <NavLink tag={Link} className="site__footer_menunav_link" to="/blog">Actueel</NavLink>
                                </NavItem>
                                <NavItem className="site__footer_menunav_item">
                                    <NavLink tag={Link} className="site__footer_menunav_link" to="/contact">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <div className="site_footer_col">
                            <h2 className="site__footer_heading">Lorem ipsum</h2>
                            <Nav className="site__footer_menunav">
                                <NavItem className="site__footer_menunav_item">
                                    <NavLink tag={Link} className="site__footer_menunav_link" to="/">Lorem ipsum</NavLink>
                                </NavItem>
                                <NavItem className="site__footer_menunav_item">
                                    <NavLink tag={Link} className="site__footer_menunav_link" to="/">Lorem ipsum</NavLink>
                                </NavItem>
                                <NavItem className="site__footer_menunav_item">
                                    <NavLink tag={Link} className="site__footer_menunav_link" to="/">Lorem ipsum</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <div className="site_footer_col">
                            <h2 className="site__footer_heading">Lorem ipsum</h2>
                            <Nav className="site__footer_menunav">
                                <NavItem className="site__footer_menunav_item">
                                    <NavLink tag={Link} className="site__footer_menunav_link" to="/">Lorem ipsum</NavLink>
                                </NavItem>
                                <NavItem className="site__footer_menunav_item">
                                    <NavLink tag={Link} className="site__footer_menunav_link" to="/">Lorem ipsum</NavLink>
                                </NavItem>
                                <NavItem className="site__footer_menunav_item">
                                    <NavLink tag={Link} className="site__footer_menunav_link" to="/">Lorem ipsum</NavLink>
                                </NavItem>
                                <NavItem className="site__footer_menunav_item">
                                    <NavLink tag={Link} className="site__footer_menunav_link" to="/">Lorem ipsum</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                </Container>
                <Container className="site__footer_container border-top">
                    <span className="site__footer_copyright">&copy; {new Date().getFullYear()} Stichting Accessibility</span>
                    <div className="site__footer_nav">
                        <Nav className="site__footer_nav_list">
                            <NavItem className="site__footer_nav_item">
                                <NavLink tag={Link} className="site__footer_nav_link" to="/sitemap">Sitemap</NavLink>
                            </NavItem>
                            <NavItem className="site__footer_nav_item">
                                <NavLink tag={Link} className="site__footer_nav_link" to="/privacy-policy">Privacy Policy</NavLink>
                            </NavItem>
                            <NavItem className="site__footer_nav_item">
                                <NavLink tag={Link} className="site__footer_nav_link" to="/cookies">Cookies</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Container>
            </footer>
        );
    }
}