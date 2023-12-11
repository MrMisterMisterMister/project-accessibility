import React from 'react';
import { Container } from 'reactstrap';
import { ButtonHero } from './Button';
import Shape from './Shape';

const Hero = () => {
    return (
        <section className="hero__section">
            <Container className="hero__section_container">
                <div className="hero__section_wrapper">
                    <h1 className="hero__section_title">Toegankelijkheidsportaal voor iedereen.</h1>
                    <p className="hero__section_text">Een inclusieve samenleving waarin alle mensen met of zonder beperking gelijkwaardig participeren.</p>
                    <ButtonHero text="Naar het portaal" />
                </div>
            </Container>
            <Shape section="hero" position={['right', 'bottom', 'top']} />
        </section>
    );
}

export default Hero;