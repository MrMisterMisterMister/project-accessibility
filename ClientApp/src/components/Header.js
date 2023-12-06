import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
import { Container, NavbarBrand } from 'reactstrap';

export class Header extends Component {
    render() {
        return (
            <header className="site__header">
                <Container className="site__header_container" fluid>
                    <NavbarBrand tag={Link} to="/">
                        <img src={require("../assets/img/brand/logo_white_text.png")} width="278" height="60" alt="Logo" title="Project Accessibility" />
                    </NavbarBrand>
                    <DesktopNav />
                    <MobileNav />
                </Container>
            </header>
        );
    }
}