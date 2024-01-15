import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import { createEndpoint } from '../api/axiosClient';
import UserSearch from '../components/UserSearch';
import { MessageList, MessageBox, ChatList, Input, Button } from 'react-chat-elements';
import "react-chat-elements/dist/main.css"
import img from "../img/placeholder.jpg";

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

    // State for chat items
    const [chatItems, setChatItems] = useState([]); 

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
    
                if (currentUser) {
                    console.log("Registering user: ", currentUser);
                    newConnection.invoke('RegisterUser', currentUser.email);
                }   
    
                // In the ReceivePrivateMessage handler
                newConnection.on('ReceivePrivateMessage', (fromUser, message) => {
                    const updatedMessages = [...latestMessages.current];
                    updatedMessages.push({ fromUser, message });
                    setMessages(updatedMessages);
                });
            })
            .catch(e => console.error('Connection to SignalR Hub failed: ', e));
    
        setConnection(newConnection);
    
        return () => {
            newConnection.stop().then(() => console.log('Disconnected from SignalR Hub'));
        };
    }, [currentUser]);


    // Function to reset search query and results
    const resetSearch = () => {
        setSearchResults([]);
    };

    // Upon selecting user, if there is no existing chat, create one, use either ChatList or ChatItem
    // , ChatItem might be better
    // If there is an existing chat, load the message history
    const handleSelectUser = (userResult) => {
        console.log("Selected User: ", userResult);
        setSelectedUser(userResult);

        // Check if chat with this user already exists
        const existingChat = chatItems.find(item => item.id === userResult.id);
        if (!existingChat) {
            // Create a new chat item for the selected user
            const newChatItem = {
                avatar: img,
                alt: userResult.name,
                title: userResult.name,
                subtitle: 'Last message...',
                date: new Date(),
                unread: 0,
                id: userResult.id,
            };

            // Add the new chat item to the chat items state
            setChatItems([...chatItems, newChatItem]);
        }
        
        // Load message history with the selected user
        // Implement message history loading here

         // Reset search results and query after selecting a user
         resetSearch();
    };

    // Send message to selected user
    const sendPrivateMessage = async () => {
        if (connection && isConnected && newMessage && selectedUser) {
            await connection.invoke('SendMessageToUser', selectedUser.email, newMessage);
            console.log("Message sent: ", newMessage); //remove after testing>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
                        <UserSearch 
                            onSelectUser={handleSelectUser} 
                            setSearchResults={setSearchResults} 
                            searchResults={searchResults}
                            resetSearch={resetSearch} />
                        <br />
                        <ChatList
                            className='chat-list'
                            dataSource={chatItems} />
                    </Col>
                    <Col sm='8'>
                        <div style={messageListStyle} className='message-list'>
                            <MessageList
                                className='message-list'
                                lockable={true}
                                toBottomHeight={'100%'}
                                dataSource={transformMessages()} // Use transformed messages (transformMessages()) here>>>>>>>
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
