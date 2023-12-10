import React from 'react';
import { Container } from 'reactstrap';
import { ButtonContact } from './Button';
import Shape from './Shape';

const Contact = () => {
    return (
        <section className="contact__section">
            <Container className="contact__section_container">
                <div className="contact__section_wrapper">
                    <Shape section="contact" position={['bottom_left', 'top_right']} />
                    <div className="contact__section_content">
                        <h2 className="contact__section_content__title">Meld je aan voor de onderzoeken</h2>
                        <p className="contact__section_content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="contact__section_content_button">
                            <ButtonContact style="signup" path="/" text="Sign up" />
                            <ButtonContact style="login" path="/" text="Login" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Contact;