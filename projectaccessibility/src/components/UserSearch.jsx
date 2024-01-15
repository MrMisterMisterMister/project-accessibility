import React, { useState } from 'react';
import { createEndpoint } from "../api/axiosClient";
import { Input, Button } from 'react-chat-elements';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

const UserSearch = ({ onSelectUser, setSearchResults, searchResults }) => {
    const [searchQuery, setSearchQuery] = useState('');

    // Handle search for users
    const handleSearch = async () => {
        try {
            const data = await createEndpoint(`users/search/${searchQuery}`).get();
            setSearchResults(data);
        } catch (error) {
            console.error('Error during search:', error);
        }
    };

    // Handle change in search query
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value.trim() === '') {
            setSearchResults([]);
        }
    };

    return (
        <div>
            <Input
                placeholder="Search for users..."
                value={searchQuery}
                onChange={handleChange}
                rightButtons={
                    <Button text="Search" onClick={handleSearch} />
                }
            />

            <ListGroup>
                {searchResults && searchResults.map(user => (
                    <ListGroup.Item action key={user.id} onClick={() => onSelectUser(user)}>
                        {user.name} ({user.email})
                    </ListGroup.Item>
                ))}
            </ListGroup>

        </div>
    );
};

export default UserSearch;
