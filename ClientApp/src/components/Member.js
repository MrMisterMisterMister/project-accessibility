import React from 'react';
import { Container } from 'reactstrap';
import Shape from './Shape';
import { GroupMember } from './Group';

const Member = () => {
    return (
        <section className="member__section">
            <Container className="member__section_container">
                <h2 className="member__section_title">Maak kennis met de experts</h2>
                <div className="member__section_group__group">
                    <GroupMember img={require("../assets/img/placeholder.jpg")} altText="Boss Clodsire" name="Clodsire" role="Boss" />
                    <GroupMember img={require("../assets/img/placeholder.jpg")} altText="Grunt Clodsire" name="Clodsire" role="Grunt #1" />
                    <GroupMember img={require("../assets/img/placeholder.jpg")} altText="Grunt Clodsire" name="Clodsire" role="Grunt #2" />
                    <GroupMember img={require("../assets/img/placeholder.jpg")} altText="Grunt Clodsire" name="Clodsire" role="Grunt #3" />
                    <GroupMember img={require("../assets/img/placeholder.jpg")} altText="Grunt Clodsire" name="Clodsire" role="Grunt #4" />
                </div>
            </Container>
            <Shape section="member" position={['left', 'right']} />
        </section>
    );
}

export default Member;