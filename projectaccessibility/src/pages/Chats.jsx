import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import { createEndpoint } from '../api/axiosClient';
import UserSearch from '../components/UserSearch';
import { MessageList, MessageBox, ChatList, Input, Button } from 'react-chat-elements';
import "react-chat-elements/dist/main.css"

const Chats = observer(() => {
    // For user 
    const { userStore: { user, getUser } } = useStore();
    const [currentUser, setCurrentUser] = useState({});
    // For chat
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);

    const [newMessage, setNewMessage] = useState('');
    const latestMessages = useRef(null);

    const [isConnected, setIsConnected] = useState(false);

    const [searchResults, setSearchResults] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    latestMessages.current = messages;

    // Fetch user data
    useEffect(() => {
        const getData = async () => {
            if (!user) await getUser();
            if (user) {
                const data = await createEndpoint(`users/${user.userId}`).get();
                setCurrentUser(data);
            }
        };

        getData();
    }, [user]);

    // SignalR connection
    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('http://localhost:5000/chat')
            .configureLogging(LogLevel.Information)
            .build();
    
        newConnection.start()
            .then(() => {
                console.log('Connected to SignalR Hub');
                setIsConnected(true);
    
                if (currentUser && currentUser.email) {
                    newConnection.invoke('RegisterUser', currentUser.email);
                }
    
                // In the ReceivePrivateMessage handler
                newConnection.on('ReceivePrivateMessage', (fromUser, message) => {
                    setMessages(prevMessages => [...prevMessages, { fromUser, message }]);
                });
            })
            .catch(e => console.error('Connection to SignalR Hub failed: ', e));
    
        setConnection(newConnection);
    
        return () => {
            newConnection.stop().then(() => console.log('Disconnected from SignalR Hub'));
        };
    }, []);    

    const handleSelectUser = (userResult) => {
        console.log("Selected User: ", userResult);
        setSelectedUser(userResult);
        // Load message history with the selected user
    };

    const sendPrivateMessage = async () => {
        if (connection && isConnected && newMessage && selectedUser) {
            await connection.invoke('SendMessageToUser', selectedUser.id, newMessage);
            setNewMessage('');
        }
    };

    // Function to transform messages to the format required by MessageList
    const transformMessages = () => {
        return messages.map(message => ({
            position: message.fromUser === currentUser.email ? 'right' : 'left',
            type: 'text',
            text: message.message,
            date: new Date(), // Adjust as per your requirements
        }));
    };

    // Inline styles for the chat messages area and the input box
    const messageListStyle = {
        height: 'calc(100vh - 150px)', // Adjust the height as needed
        overflowY: 'auto',
        marginBottom: '50px' // Space for the input box
    };

    const inputStyle = {
        position: 'fixed',
        bottom: 20,
        width: '50%', // Adjust the width according to your layout
        left: '40%'  // Adjust the left position according to your layout
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col sm='4'>
                        <UserSearch onSelectUser={handleSelectUser} setSearchResults={setSearchResults} searchResults={searchResults} />
                        <br />
                        <ChatList
                            className='chat-list'
                            dataSource={[
                                {
                                avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                                alt: 'kursat_avatar',
                                title: 'Kursat',
                                subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                                date: new Date(),
                                unread: 3,
                                },
                                {
                                avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                                alt: 'kursat_avatar',
                                title: 'Kursat',
                                subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                                date: new Date(),
                                unread: 3,
                                }
                            ]} />
                    </Col>
                    <Col sm='8'>
                        <div style={messageListStyle} className='message-list'>
                            <MessageList
                                className='message-list'
                                lockable={true}
                                toBottomHeight={'100%'}
                                dataSource={[
                                    {
                                      position:"left",
                                      type:"text",
                                      title:"Kursat",
                                      text:"Give me a message list example !",
                                    },
                                    {
                                      position:"right",
                                      type:"text",
                                      title:"Emre",
                                      text:"That's all.",
                                    },
                                    ]} // Use transformed messages (transformMessages) here
                            />
                        </div>
                        <div style={inputStyle}>
                            <Input
                                placeholder="Type a message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                rightButtons={
                                    <Button onClick={sendPrivateMessage} color='white' backgroundcolor='black' text='Send'/>
                                }
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
});

export default Chats;
