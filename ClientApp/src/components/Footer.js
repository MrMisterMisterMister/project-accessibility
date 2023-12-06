import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

export class Footer extends Component {
    render() {
        return (
            <footer className="site__footer">
                <Container className="site__footer_container">
                    <span className="site__footer_copyright">&copy; {new Date().getFullYear()} Stichting Accessibility</span>
                    <div className="site__footer_logo">
                        <Link to="/">
                            <img src={require("../assets/img/brand/logo.png")} width="50" height="60" alt="Logo" title="Project Accessibility" />
                        </Link>
                    </div>
                    <div className="site__footer_nav">
                        <Nav className="site__footer_nav_list">
                            <NavItem className="site__footer_nav_item">
                                <NavLink tag={Link} className="site__footer_nav_link" to="/sitemap">Sitemap</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="site__footer_nav_link" to="/privacy-policy">Privacy Policy</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="site__footer_nav_link" to="/cookies">Cookies</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Container>
            </footer>
        );
    }
}