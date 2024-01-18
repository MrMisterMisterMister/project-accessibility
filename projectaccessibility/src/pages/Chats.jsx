import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import { createEndpoint } from '../api/axiosClient';
import UserSearch from '../components/UserSearch';
import { MessageList, ChatList, Input, Button } from 'react-chat-elements';
import "react-chat-elements/dist/main.css"
import img from "../img/placeholder.jpg";

const Chats = observer(() => {
    // For user 
    const { userStore: { user, getUser } } = useStore();
    const [currentUser, setCurrentUser] = useState(null);
    // For chat
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);

    const [newMessage, setNewMessage] = useState('');
    const latestMessages = useRef(null);

    const [isConnected, setIsConnected] = useState(false);

    const [searchResults, setSearchResults] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const [historyMessages, setHistoryMessages] = useState([]);

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
                    console.log("Registering user: ", currentUser); // remove later
                    newConnection.invoke('RegisterUser', currentUser.id);
                }   
    
                // Listen for incoming messages
                newConnection.on('ReceiveMessage', (fromUser, receiver, message, chatroomId) => {
                    const updatedMessages = [...latestMessages.current];
                    updatedMessages.push({ fromUser, message });
                    setMessages(updatedMessages);

                    // For the receiver
                    if(fromUser.email !== currentUser.email) {
                        console.log("Receiverrrrrrrr Condition is being metttttttttt");
                        handleSelectUser(fromUser); // Select the user who sent the message 
                        // loadChatHistory(fromUser.id); // Load chat history
                        const senderExists = chatItems.some((item => item.id === fromUser.id) || (item => item.title === fromUser.email) || (item => item.id === chatroomId));
                        if (!senderExists) {
                            const newChatItem = {
                                id: chatroomId,
                                avatar: img,
                                alt: fromUser.email,
                                title: fromUser.email,
                                subtitle: message,
                                date: new Date(),
                                unread: 0,
                            };
                            setChatItems([...chatItems, newChatItem]);
                        }
                    }
                });
            })
            .catch(e => console.error('Connection to SignalR Hub failed: ', e));
    
        setConnection(newConnection);
    
        // Cleanup SignalR connection
        return () => {
            newConnection.stop().then(() => console.log('Disconnected from SignalR Hub'));
        };
        
    }, [currentUser]); // Dependency(ies)
    
    // Send message to selected user
    const sendPrivateMessage = async () => {
        if (connection && isConnected && newMessage && selectedUser) {
            // Send the message via SignalR
            await connection.invoke('SendMessageToUser', currentUser, selectedUser, newMessage);

            // Update the chat with the new message
            const updatedMessages = [...messages];
            updatedMessages.push({ fromUser: currentUser.email, message: newMessage });
            setMessages(updatedMessages);

            // Update the last message in the chat list
            setChatItems(prevChatItems =>
                prevChatItems.map(chatItem =>
                    chatItem.title === selectedUser.email ? {...chatItem, subtitle: newMessage, date: new Date()} : chatItem
                )
            );

            // Clear the input box
            setNewMessage('');
        }
    };

    // Upon selecting user, if there is no existing chat, create one
    // If there is an existing chat, load the message history
    const handleSelectUser = async (userResult) => {
        console.log("Selected User: ", userResult); // remove later
        setSelectedUser(userResult);

        // Clear existing messages before loading new ones
        setMessages([]);
    
        // Check if chat with this user already exists
        const existingChat = chatItems.find(item => item.title === userResult.email);
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

            console.log(newChatItem); // remove later
    
            // Update the chat items state using the functional form of setChatItems
            setChatItems(prevChatItems => [...prevChatItems, newChatItem]);
        }
        
        // Implement message history loading here
        // Load message history with the selected user
        await loadChatHistory(userResult.id);
    
        // Reset search results and query after selecting a user
        resetSearch();
    };

    // Loads your existing chats itemss
    useEffect(() => {
        const loadUserChats = async () => {
            if (!currentUser) {
                console.log("currentUser not set");
                return;
            }
    
            try {
                const response = await createEndpoint(`chats/userChats/${currentUser.id}`).get();
                console.log("Complete API response:", response);
    
                // Adjust this part based on the actual structure of response
                const responseData = response.data ? response.data : response;
    
                console.log("Response Data:", responseData);
    
                if (responseData && Array.isArray(responseData)) {
                    const chatItems = responseData.map(chat => {
                        return {
                            id: chat.otherUserId,
                            avatar: img,
                            title: chat.chatName,
                            subtitle: 'Last message...',
                            date: new Date(), // Adjust as needed
                            unread: 0,
                            onClick: () => selectUserFromChatList(chat.chatName),
                        };
                    });
                    console.log("Mapped chat items:", chatItems);
                    setChatItems(chatItems);
                } else {
                    console.log("No chat data found or responseData is not an array");
                }
            } catch (error) {
                console.error("Error loading user chats:", error);
            }
        };
    
        loadUserChats();
    }, [currentUser]);
    
    const loadChatHistory = async (targetedChatHistory) => {
        const currentUserId = currentUser.id;
    
        // Make API call to load chat history between the current user and the selected user
        const response = await createEndpoint(`chats/history/${currentUserId}/${targetedChatHistory}`).get();
        console.log("Complete API messagesssss response:", response);
        if(response.messages){
            const history = response.messages;
            const mappedMessages = history.map(msg => ({
                position: msg.senderId === currentUser.id ? 'right' : 'left',
                type: 'text',
                text: msg.content,
                date: msg.timestamp,
            }));
            console.log("Mapped messages:", mappedMessages); // Log the mapped messages for debugging
            setHistoryMessages(mappedMessages);
        }
    };

    const selectUserFromChatList = async (chatItem) => {
        console.log("SelectedUserFrom chattt clickkeddddd");
        try {
            const response = await createEndpoint(`users/byEmail/${chatItem}`).get();
            if (response.data) {
                setSelectedUser(response.data); // Set the selected user
                await loadChatHistory(chatItem.id); // Load chat history
            }
        } catch (error) {
            console.error("Error selecting user from chat list:", error);
        }
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

    // Function to reset search query and results
    const resetSearch = () => {
        setSearchResults([]);
    };

    // Inline styles for the chat messages area and the input box
    const messageListStyle = {
        height: 'calc(100vh - 200px)', // Adjust the height
        overflowY: 'auto',
        marginBottom: '50px' // Space for the input box
    };

    const inputStyle = {
        bottom: 20,
        width: '100%', // Adjust the width according to layout
        left: '40%'  // Adjust the left position according to layout
    };

    // Better is scss file but for now this will do 
    const getChatItemStyle = (chatItem) => {
        return selectedUser && chatItem.id === selectedUser.id
            ? { backgroundColor: 'lightblue' } // Highlight style for the selected chat item
            : {}; // Normal style for non-selected chat items
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
                            dataSource={chatItems.map(item => ({
                                ...item,
                                style: getChatItemStyle(item),
                                onClick: () => selectUserFromChatList(item)
                            }))} />
                    </Col>
                    <Col sm='8'>
                        <div style={messageListStyle} className='message-list'>
                            <MessageList
                                className='message-list'
                                lockable={true}
                                toBottomHeight={'100%'}
                                dataSource={historyMessages}
                            />
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
                                onKeyDown={(e) => {
                                    if(e.key === "Enter"){
                                        e.preventDefault();
                                        sendPrivateMessage();
                                    }
                                }}
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
