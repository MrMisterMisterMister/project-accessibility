import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../assets/scss/main.scss';

export class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <main id="main-content">
                    {this.props.children}
                </main>
                <Footer />
            </>
        );
    }
}
