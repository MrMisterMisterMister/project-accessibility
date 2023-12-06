import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';
import '../assets/css/Header.css';

export class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-md navbar-toggleable-md" container>
                    <NavbarBrand tag={Link} to="/">
                        <img src={require("../assets/img/brand/logo_black_text.png")} width="278" height="60" alt="Logo" title="Project Accessibility" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse className="d-md-inline-flex flex-md-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="nav-link px-4" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="nav-link px-4" to="/over-ons">Over ons</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="nav-link px-4" to="/contact">Contact</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}