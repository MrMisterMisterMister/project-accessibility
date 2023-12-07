import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class Member extends Component {
    render() {
        return (
            <section className="site__member">
                <Container className="site__member_container">
                    <h2 className="site__member_title">Maak kennis met de experts</h2>
                    <div className="site__member_group">
                        <div className="site__member_item">
                            <img src={require("../assets/img/placeholder.jpg")} className="site__member_picture" />
                            <h3 className="site__member_name">Clodsire</h3>
                            <div className="site__member_meta_data">
                                <div className="site__member_role">Gulp</div>
                            </div>
                        </div>
                        <div className="site__member_item">
                            <img src={require("../assets/img/placeholder.jpg")} className="site__member_picture" />
                            <h3 className="site__member_name">Clodsire #2</h3>
                            <div className="site__member_meta_data">
                                <div className="site__member_role">Gulp</div>
                            </div>
                        </div>
                        <div className="site__member_item">
                            <img src={require("../assets/img/placeholder.jpg")} className="site__member_picture" />
                            <h3 className="site__member_name">Clodsire #3</h3>
                            <div className="site__member_meta_data">
                                <div className="site__member_role">Gulp</div>
                            </div>
                        </div>
                        <div className="site__member_item">
                            <img src={require("../assets/img/placeholder.jpg")} className="site__member_picture" />
                            <h3 className="site__member_name">Clodsire #4</h3>
                            <div className="site__member_meta_data">
                                <div className="site__member_role">Gulp</div>
                            </div>
                        </div>
                        <div className="site__member_item">
                            <img src={require("../assets/img/placeholder.jpg")} className="site__member_picture" />
                            <h3 className="site__member_name">Clodsire #5</h3>
                            <div className="site__member_meta_data">
                                <div className="site__member_role">Gulp</div>
                            </div>
                        </div>
                    </div>
                </Container>
                <span className="member__shape_cube" aria-hidden="true" />
                <span className="member__shape_circle" aria-hidden="true" />
            </section>
        );
    }
}