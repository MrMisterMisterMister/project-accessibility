import React, { Component } from 'react';
import { Hero } from './Hero';
import { Expertise } from './Expertise';

export class Home extends Component {   
    render() {
        return (
            <>
                <Hero />
                <Expertise />
            </>
        );
    }
}