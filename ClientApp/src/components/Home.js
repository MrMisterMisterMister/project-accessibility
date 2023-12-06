import React, { Component } from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { Expertise } from './Expertise';
import { Blog } from './Blog';
import { Contact } from './Contact';

export class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <About />
                <Expertise />
                <Blog />
                <Contact />
            </>
        );
    }
}