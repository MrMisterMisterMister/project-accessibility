import React from 'react';
import { Container } from 'reactstrap';
import Shape from './Shape';

const Case = () => {
    return (
        <section className="case__section">
            <Container className="case__section_container">
                <h2 className="case__section_title">Case</h2>
            </Container>
            {/* TODO */}
            <Shape section="case" position={['top']} />
        </section>
    );
}

export default Case;