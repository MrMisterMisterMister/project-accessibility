import React, { useState, useEffect } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useStore } from "../stores/store";

const Chats = ({ userName }) => {
    const { userStore } = useStore();
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [chatRoom, setChatRoom] = useState("General"); // Example room

    // Make connection to the chat hub
    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl("http://localhost:5000/chat")
            .configureLogging(LogLevel.Information)
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        console.log(userName); // see if userName is available (testing purposes)
        if (connection && userName) { // Check if userName is available
            connection.start()
                .then(() => {
                    console.log('Connected!');
                    connection.invoke("JoinRoom", { Username: userName, ChatRoom: chatRoom });
                })
                .catch(e => console.error('Connection failed: ', e));

            connection.on("ReceiveMessage", (user, msg) => {
                setMessages(messages => [...messages, { user, msg }]);
            });
        }
        else {
            console.error("Connection/username not available");
        }

        return () => {
            connection?.stop();
        };
    }, [connection, userName, chatRoom]); // Use userName in dependencies

    const sendMessage = async () => {
        if (connection && currentMessage.trim() !== "" && userName) { // Use userName
            await connection.invoke("SendMessageToRoom", chatRoom, userName, currentMessage);
            setCurrentMessage("");
        } else {
            console.error("Connection or user data not available");
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
