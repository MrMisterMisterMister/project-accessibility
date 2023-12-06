import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'reactstrap';

export class Hero extends Component {
    render() {
        return (
            <section className="site__hero" id="hero">
                <Container>
                    <div className="col-12 col-lg-6 ">
                        <h1 className="mb-3">Lorem ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum varius sit amet.</p>
                        <Link to="/">
                            <Button role="button" className="hero__button">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow" />
                                </span>
                                <span className="hero__text">Lorem ipsum</span>
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        );
    }
}