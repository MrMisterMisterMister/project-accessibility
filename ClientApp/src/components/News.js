import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class News extends Component {
    render() {
        return (
            <section className="site__news">
                <Container className="site__news_container">
                    <h2 className="site__news_title">Actueel</h2>
                    <div className="site__news_group">
                        <div className="site__news_article">
                            <div className="site__news_banner">
                                <img src={require("../assets/img/placeholder.jpg")} className="site__news_image" alt="Clodsire" />
                            </div>
                            <div className="site__news_content">
                                <span className="site__news_date">December 27, 2023</span>
                                <h3 className="site__news_head">Clodsire outbreak in Hearthome City and Floaroma Town</h3>
                                <p className="site__news_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu.</p>
                            </div>
                        </div>
                        <div className="site__news_article">
                            <div className="site__news_banner">
                                <img src={require("../assets/img/placeholder.jpg")} className="site__news_image" alt="Clodsire" />
                            </div>
                            <div className="site__news_content">
                                <span className="site__news_date">Movember 11, 2023</span>
                                <h3 className="site__news_head">Another Clodsire outbreak</h3>
                                <p className="site__news_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu.</p>
                            </div>
                        </div>
                        <div className="site__news_article">
                            <div className="site__news_banner">
                                <img src={require("../assets/img/placeholder.jpg")} className="site__news_image" alt="Clodsire" />
                            </div>
                            <div className="site__news_content">
                                <span className="site__news_date">December 9, 2023</span>
                                <h3 className="site__news_head">Quagsire outbreak</h3>
                                <p className="site__news_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }
}