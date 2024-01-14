import React, { useState, useEffect, useRef } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { createEndpoint } from "../api/axiosClient";

const Chats = observer( () => {
    const { userStore: { user, getUser } } = useStore();
    const [currentUser, setCurrentUser] = useState({});
    const [connection, setConnection] = useState(null);
    const [chatRoom, setChatRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const latestMessages = useRef(null);
    const [isConnected, setIsConnected] = useState(false);

    // Set the latest messages to the messages state
    latestMessages.current = messages;

    // Fetch user data
    useEffect(() => {
        // Fetch user data
        const getData = async () => {
            // If user is not available or needs to be updated, fetch it
            if (!user) await getUser();
            // Proceed to fetch additional user data or details
            if (user) {
                const data = await createEndpoint(`users/${user.userId}`).get();
                setCurrentUser(data);
            }
        };

        getData();
    }, [user]);

    // Create the connection to the signalR hub (ChatHub, http://whateverrrr/chat)
    useEffect(() => {
        // Make the connection to signalR hub
        const newConnection = new HubConnectionBuilder()
            .withUrl("http://localhost:5000/chat")
            .configureLogging(LogLevel.Information)
            .build();

        // Set the connection to the state
        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) { // If connection is not null
            console.log(currentUser.userName) // Just checking if the username is being passed correctly :) removing this later, not needed
            connection.start()
                .then(() => {
                    console.log('Connected!');
                    setIsConnected(true);  // Set isConnected to true when the connection is established
                    connection.on('ReceiveMessage', (username, message) => {
                        const updatedMessages = [...latestMessages.current];
                        updatedMessages.push({ username, message });

                        setMessages(updatedMessages);
                    });
                })
                .catch(e => {
                    console.log('Connection failed: ', e);
                    setIsConnected(false);
                });
        }
    }, [connection]);
    
    // Join the chat room function
    const joinRoom = () => {
        if (connection && isConnected) {
            connection.invoke('JoinRoom', { Username: currentUser.userName, ChatRoom: chatRoom })
                .catch(err => console.error(err));
        }
    };

    // Send message to the chat room function
    const sendMessage = async () => {
        if (connection && isConnected && newMessage) {
            await connection.invoke('SendMessageToRoom', chatRoom, currentUser.userName, newMessage);
            setNewMessage('');
        }
    };

    return (
        <div>
            <h1>Chats</h1>
            <main>
                <Container>
                    <Row className='px-5 my-5'>
                        <Col sm='12'>
                            <h1 className='font-weight-light'>Welcome to {chatRoom} chat room!</h1>
                            <Form.Group>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter chat room name...'
                                    value={chatRoom}
                                    onChange={(e) => setChatRoom(e.target.value)}
                                />
                                <Button onClick={joinRoom}>Join Room</Button>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    as='textarea'
                                    rows={3}
                                    placeholder='Enter your message...'
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />
                                <Button onClick={sendMessage}>Send Message</Button>
                            </Form.Group>

                            <div>
                                {messages.map((message, index) => (
                                    <div key={index}><strong>{message.username}</strong>: {message.message}</div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
});

export default Chats;
