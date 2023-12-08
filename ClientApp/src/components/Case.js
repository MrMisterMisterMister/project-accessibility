import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class Case extends Component {
    render() {
        return (
            <section className="site__case">
                <Container className="site__case_container">
                    <h2 className="site__case_title">Case</h2>
                </Container>
                <div className="">
                    
                </div>
                <span className="case__shape_top" aria-hidden="true" />
            </section>
        );
    }
}