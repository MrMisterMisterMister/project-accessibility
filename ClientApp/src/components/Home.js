import React, { Component } from 'react';
import { Hero } from './Hero';
import { Expertise } from './Expertise';
import { Member } from './Member';
import { News } from './News';

export class Home extends Component {   
    render() {
        return (
            <>
                <Hero />
                <Expertise />
                <Member />
                <News />
            </>
        );
    }
}