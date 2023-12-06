import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

export class DesktopNav extends Component {

    render() {
        return (
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
        );
    }
}