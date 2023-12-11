import React from 'react';
import { Container } from 'reactstrap';
import { CardCase } from './Card';

const Case = () => {
    return (
        <section className="case__section">
            <Container className="case__section_container">
                <h2 className="case__section_title">Case</h2>
                <div className="case__section_group__card">
                    <CardCase
                        img={require("../assets/img/placeholder.jpg")}
                        altText="Clodsire"
                        title="Clodsire is more popular than Pikachu!"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Auctor augue mauris augue neque gravida in fermentum."
                        path="/"
                        linkText="Lees meer"
                    />
                    <CardCase
                        img={require("../assets/img/placeholder.jpg")}
                        altText="Clodsire"
                        title="Clodsire is the cutest"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Auctor augue mauris augue neque gravida in fermentum."
                        path="/"
                        linkText="Lees meer"
                    />
                </div>
            </Container>
        </section>
    );
}

export default Case;