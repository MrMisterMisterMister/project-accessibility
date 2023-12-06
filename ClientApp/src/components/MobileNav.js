import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

export class MobileNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.toggleMenuState = this.toggleMenuState.bind(this);
    }

    // need to fix this, after you open link, close menu
    toggleMenuState() {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
        document.body.classList.toggle("site__menu_is__open");
    }

    render() {
        return (
            <div className="site__header_menu">
                <input type="checkbox" className="site__header_menu_checkbox" id="site__header_menu_toggle" />
                <label className="site__header_menu_button" htmlFor="site__header_menu_toggle" onClick={this.toggleMenuState}>
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
                <div className="site__header_menu_nav">
                    <Nav className="site__header_menu_list">
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
                    </Nav>
                </div>
            </div>
        );
    }
}