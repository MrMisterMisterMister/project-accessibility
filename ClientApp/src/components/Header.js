import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    NavbarBrand,
    NavItem,
    NavLink
} from 'reactstrap';
import '../assets/css/Header.css';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
        document.body.classList.toggle("site__menu_is__open");
    }

    render() {
        return (
            <header className="site__header">
                <div className="site__header_container">
                    <NavbarBrand tag={Link} to="/">
                        <img src={require("../assets/img/brand/logo_white_text.png")} width="278" height="60" alt="Logo" title="Project Accessibility" />
                    </NavbarBrand>
                    <div className="site__header_menu">
                        <input type="checkbox" className="site__header_menu_checkbox" id="site__header_menu_toggle" />
                        <label className="site__header_menu_button" for="site__header_menu_toggle" onClick={this.handleClick}>
                            <span className="site__header_menu_icon">
                                <span className="site__header_menu_span" />
                                <span className="site__header_menu_span" />
                                <span className="site__header_menu_span" />
                                <span className="site__header_menu_span" />
                                <span className="site__header_menu_span" />
                                <span className="site__header_menu_span" />
                            </span>
                        </label>
                        <div className="site__header_menu_background" />
                        <nav className="site__header_menu_nav">
                            <ul className="site__header_menu_list">
                                <NavItem className="site__header_menu_item">
                                    <NavLink tag={Link} className="site__header_menu_link" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem className="site__header_menu_item">
                                    <NavLink tag={Link} className="site__header_menu_link" to="/over-ons">Over ons</NavLink>
                                </NavItem>
                                <NavItem className="site__header_menu_item">
                                    <NavLink tag={Link} className="site__header_menu_link" to="/expertise">Expertise</NavLink>
                                </NavItem>
                                <NavItem className="site__header_menu_item">
                                    <NavLink tag={Link} className="site__header_menu_link" to="/blog">Actueel</NavLink>
                                </NavItem>
                                <NavItem className="site__header_menu_item">
                                    <NavLink tag={Link} className="site__header_menu_link" to="/contact">Contact</NavLink>
                                </NavItem>
                            </ul>
                        </nav>
                    </div>
                    <nav className="site__header_nav">
                        <ul className="site__header_nav_list">
                            <NavItem className="site__header_nav_item">
                                <NavLink tag={Link} className="site__header_nav_link" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem className="site__header_nav_item">
                                <NavLink tag={Link} className="site__header_nav_link" to="/over-ons">Over ons</NavLink>
                            </NavItem>
                            <NavItem className="site__header_nav_item">
                                <NavLink tag={Link} className="site__header_nav_link" to="/expertise">Expertise</NavLink>
                            </NavItem>
                            <NavItem className="site__header_nav_item">
                                <NavLink tag={Link} className="site__header_nav_link" to="/blog">Actueel</NavLink>
                            </NavItem>
                            <NavItem className="site__header_nav_item">
                                <NavLink tag={Link} className="site__header_nav_link" to="/contact">Contact</NavLink>
                            </NavItem>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}