import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';

export class Hero extends Component {
    render() {
        return (
            <section className="site__hero">
                <Container className="site__hero_container">
                    <div className="site__hero_wrapper">
                        <h1 className="site__hero_title">Toegankelijkheidsportaal voor iedereen.</h1>
                        <p className="site__hero_text">Een inclusieve samenleving waarin alle mensen met of zonder beperking gelijkwaardig participeren.</p>
                        <Button role="button" className="site__hero_button">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow" />
                            </span>
                            <span className="site__hero_button_text">Naar het portaal</span>
                        </Button>
                    </div>
                </Container>
                <span className="hero__shape_rectangle" aria-hidden="true" />
                <span className="hero__shape_circle" aria-hidden="true" />
                <span className="hero__shape_cube" aria-hidden="true" />
            </section>
        );
    }
}