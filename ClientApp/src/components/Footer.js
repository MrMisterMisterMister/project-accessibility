import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    NavItem,
    NavLink
} from 'reactstrap';

import '../assets/css/Footer.css';

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="container">
                    <div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <span class="col-md-5">&copy; {new Date().getFullYear()} Stichting Accessibility</span>
                        <div className="col-md-2 d-flex justify-content-center">
                            <Link tag={Link} to="/">
                                <img src={require("../assets/img/brand/logo.png")} width="50" height="60" alt="Logo" title="Project Accessibility" />
                            </Link>
                        </div>
                        <ul className="nav col-md-5 justify-content-end">
                            <NavItem>
                                <NavLink tag={Link} className="nav-link px-2 t" to="/sitemap">Sitemap</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="nav-link px-2 t" to="/privacy-policy">Privacy Policy</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="nav-link px-2 t" to="/cookies">Cookies</NavLink>
                            </NavItem>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}