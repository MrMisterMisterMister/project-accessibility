import React from 'react';
import { Container } from 'reactstrap';
import { CardNews } from './Card';

const News = () => {
    return (
        <section className="news__section">
            <Container className="news__section_container">
                <h2 className="news__section_title">Actueel</h2>
                <div className="news__section_group__card">
                    <CardNews
                        img={require('../assets/img/placeholder.jpg')}
                        altText="Clodsire"
                        date="December 27, 2023"
                        title="Clodsire outbreak in Hearthome City and Floaroma Town"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu."
                    />
                    <CardNews
                        img={require('../assets/img/placeholder.jpg')}
                        altText="Clodsire"
                        date="December 29, 2023"
                        title="Another Clodsire outbreak"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu."
                    />
                    <CardNews
                        img={require('../assets/img/placeholder.jpg')}
                        altText="Clodsire"
                        date="December 9, 2023"
                        title="Clodsire is the cutest"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu."
                    />
                </div>
            </Container>
        </section>
    );
}

export default News;