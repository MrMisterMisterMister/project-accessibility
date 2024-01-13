import React, { useState, useEffect } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

const Chats = observer( () => {
    

    return (
        <div>
            <h1>Chats</h1>
            <main>
                <Container>
                    <Row className='px-5 my-5'>
                        <Col sm='12'>
                            <h1 className="font-weight-light">Welcome to {chatRoom} chat room!</h1>
                            
                        </Col>
                    </Row>
                </Container>    
            </main>
        </div>
    );
});

export default Chats;
