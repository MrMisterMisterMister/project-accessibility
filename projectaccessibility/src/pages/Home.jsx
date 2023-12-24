import { Component } from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Member from '../components/Member';
import News from '../components/News';
import Case from '../components/Case';
import Contact from '../components/Contact';

export class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <Expertise />
                <Member />
                <News />
                <Case />
                <Contact />
            </>
        );
    }
}