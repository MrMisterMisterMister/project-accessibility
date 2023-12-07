import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'reactstrap';

export class Hero extends Component {
    render() {
        return (
            <section className="site__hero" id="hero">
                <Container className="site__hero_container">
                    <div className="site__hero_wrapper">
                        <h1 className="site__hero_title">Toegankelijkheidsportaal voor iedereen.</h1>
                        <p className="site__hero_text">Een inclusieve samenleving waarin alle mensen met of zonder beperking gelijkwaardig participeren.</p>
                        <Link to="/login">
                            <Button role="button" className="site__hero_button">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow" />
                                </span>
                                <span className="site__hero_button_text">Naar het portaal</span>
                            </Button>
                        </Link>
                    </div>
                </Container>
                <span aria-hidden="true" class="shape__rectangle" />
                <span aria-hidden="true" class="shape__circle" />
            </section>
        );
    }
}