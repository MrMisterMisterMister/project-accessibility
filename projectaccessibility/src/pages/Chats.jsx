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
    
                // Add this part here in your existing useEffect
                newConnection.on('ReceiveMessage', (fromUser, message) => {
                    const updatedMessages = [...latestMessages.current];
                    updatedMessages.push({ fromUser, message });
                    setMessages(updatedMessages);
                    
                    console.log("From User: ", fromUser);

                    if(fromUser.email !== currentUser.email) {
                        handleSelectUser(fromUser); 
                    }// Select the user who sent the message

                    const senderExists = chatItems.some(item => item.id === fromUser); // Use fromUser for comparison
                    if (!senderExists) {
                        const newChatItem = {
                            avatar: img, // replace with actual sender's avatar
                            alt: fromUser.name, // replace with actual sender's name
                            title: fromUser.name, // replace with actual sender's name
                            subtitle: 'Last message...',
                            date: new Date(),
                            unread: 1,
                            id: fromUser, // Use fromUser as the unique identifier
                        };
                        setChatItems([...chatItems, newChatItem]);
                    }
                });
            })
            .catch(e => console.error('Connection to SignalR Hub failed: ', e));
    
        setConnection(newConnection);
    
        return () => {
            newConnection.stop().then(() => console.log('Disconnected from SignalR Hub'));
        };
    }, [currentUser]); // Make sure the dependencies array is correctly set
    
    useEffect(() => {
        const loadUserChats = async () => {
            const response = await createEndpoint(`chats/userChats/${currentUser.id}`).get();
            setChatItems(response.data.map(chat => {
                // Transform chat data to the format expected by your ChatList component
                return {
                    id: chat.ChatId,
                    avatar: img, // You might want to use real avatars
                    title: chat.ChatId,
                    subtitle: 'Last message...', // You might want to show the actual last message
                    date: new Date(chat.lastMessageTimestamp), // Adjust according to your data
                    unread: 0 // Calculate the number of unread messages, if needed
                };
            }));
        };
    
        if (currentUser) {
            loadUserChats();
        }
    }, [currentUser]);
    
    const loadChatHistory = async (selectedUserId) => {
        // Assuming 'currentUser' holds the current user's details
        const currentUserId = currentUser.id; // Replace with actual logic to get the current user's ID
    
        // Make an API call to load chat history between the current user and the selected user
        // Adjust the endpoint to match your backend implementation
        const response = await createEndpoint(`chats/history/${currentUserId}/${selectedUserId}`).get();
        if(response.data){
            const history = response.data;
            setMessages(history.map(msg => ({
                fromUser: msg.senderId,
                message: msg.content
            })));
        }
    };

    // Send message to selected user
    const sendPrivateMessage = async () => {
        if (connection && isConnected && newMessage && selectedUser) {
            // Send the message via SignalR
            await connection.invoke('SendMessageToUser', currentUser.email, currentUser.id, selectedUser.email, selectedUser.id, newMessage, currentUser);

            // Update the chat with the new message
            const updatedMessages = [...messages];
            updatedMessages.push({ fromUser: currentUser.email, message: newMessage });
            setMessages(updatedMessages);

            // Update the last message in the chat list
            setChatItems(prevChatItems =>
                prevChatItems.map(chatItem =>
                    chatItem.id === selectedUser.id ? {...chatItem, subtitle: newMessage, date: new Date()} : chatItem
                )
            );

            setNewMessage('');
        }
    };

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
                id: userResult.id,
                avatar: img,
                alt: userResult.email,
                title: userResult.email,
                subtitle: 'Last message...',
                date: new Date(),
                unread: 0,
                
            };
    
            // Update the chat items state using the functional form of setChatItems
            setChatItems(prevChatItems => [...prevChatItems, newChatItem]);
        }
    
        // Load message history with the selected user
        // Implement message history loading here
        // Load message history with the selected user
        //  qloadChatHistory(userResult.id);

    
        // Reset search results and query after selecting a user
        resetSearch();
    };

    // Function to transform messages to the format required by MessageList
    const transformMessages = () => {
        return messages.map(message => ({
            position: message.fromUser === currentUser.email ? 'right' : 'left',
            type: 'text',
            text: message.message,
            date: new Date(),
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
                                dataSource={transformMessages()}
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
