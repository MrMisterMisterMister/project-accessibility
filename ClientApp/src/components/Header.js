import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
import { Container, NavbarBrand } from 'reactstrap';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.toggleMenuState = this.toggleMenuState.bind(this);
    }

    toggleMenuState() {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
        document.body.classList.toggle("site__menu_is__open");
    }

    render() {
        return (
            <header className="site__header">
                <Container className="site__header_container" fluid>
                    <NavbarBrand tag={Link} to="/">
                        <img src={require("../assets/img/brand/logo_white_text.png")} width="278" height="60" alt="Logo" title="Project Accessibility" />
                    </NavbarBrand>
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
                        <DesktopNav />
                    </div>
                    <MobileNav />
                </Container>
            </header>
        );
    }
}