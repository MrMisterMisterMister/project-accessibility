import React, { useState, useEffect } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useStore } from "../stores/store";

const Chats = () => {
    const { userStore } = useStore();
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [chatRoom, setChatRoom] = useState("General"); // Example room

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl("http://localhost:5000/chat")
            .configureLogging(LogLevel.Information)
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => {
                    console.log('Connected!');
                    connection.invoke("JoinRoom", { Username: userStore.getUser().username, ChatRoom: chatRoom });
                })
                .catch(e => console.error('Connection failed: ', e));

            connection.on("ReceiveMessage", (user, msg) => {
                setMessages(messages => [...messages, { user, msg }]);
            });
        }

        return () => {
            connection?.stop();
        };
    }, [connection]);

    const sendMessage = async () => {
        if (connection && currentMessage.trim() !== "") {
            await connection.invoke("SendMessageToRoom", chatRoom, currentMessage);
            setCurrentMessage("");
        }
    };

    return (
        <div>
            <h1>Chats</h1>
            <main>
                <Container>
                    <Row className='px-5 my-5'>
                        <Col sm='12'>
                            <h1 className="font-weight-light">Welcome to {chatRoom} chat room!</h1>
                            <div>
                                {messages.map((message, index) => (
                                    <div key={index}>
                                        <strong>{message.user}:</strong> {message.msg}
                                    </div>
                                ))}
                            </div>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter message" 
                                        value={currentMessage} 
                                        onChange={(e) => setCurrentMessage(e.target.value)} 
                                    />
                                </Form.Group>
                                <Button variant="primary" onClick={sendMessage}>
                                    Send
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>    
            </main>
        </div>
    );
};

export default Chats;
