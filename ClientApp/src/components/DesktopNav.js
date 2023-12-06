import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

export class DesktopNav extends Component {
    render() {
        return (
            <div className="site__header_nav">
                <Nav className="site__header_nav_list">
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
                </Nav>
            </div>
        );
    }
}