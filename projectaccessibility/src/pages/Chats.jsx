import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// TODO
// Chat view with SignalR?
const Chats = () => {
    return (
        <div>
            <h1>Chats</h1>
            <main>
                <Container>
                    <Row class='px-5 my-5'>
                        <Col sm='12'>
                            <h1 className="font-weight-light">Welcome to the chat room!</h1>
                        </Col>
                    </Row>
                </Container>    
            </main>
        </div>
    );
};

export default Chats;
