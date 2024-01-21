import React, { useState } from "react";
import { createEndpoint } from "../api/axiosClient";
import { Input, Button } from "react-chat-elements";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";

const UserSearch = ({ onSelectUser, setSearchResults, searchResults, resetSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    // Handle search for users
    const handleSearch = async () => {
        try {
            const data = await createEndpoint(`users/search/${searchQuery}`).get();
            setSearchResults(data);
        } catch (error) {
            console.error("Error during search:", error);
        }
    };

    // Handle change in search query
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value.trim() === "") {
            setSearchResults([]);
        }
    };

    // Update onSelectUser function to also reset the search query
    const handleSelect = (user) => {
        onSelectUser(user);
        setSearchQuery(""); // Reset the search query
        resetSearch(); // Reset the search results
    };

    // Handle key press in the input field
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div>
            <Input
                placeholder="Search for users..."
                value={searchQuery}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                rightButtons={
                    <Button text="Search" onClick={handleSearch} />
                }
            />

            <ListGroup>
                {searchResults && searchResults.map(user => (
                    <ListGroup.Item action key={user.id} onClick={() => handleSelect(user)}>
                        {user.name} ({user.email})
                    </ListGroup.Item>
                ))}
            </ListGroup>

        </div>
    );
};

UserSearch.propTypes = {
    onSelectUser: PropTypes.func.isRequired,
    setSearchResults: PropTypes.func.isRequired,
    searchResults: PropTypes.array.isRequired, // Adjust the type based on what you expect
    resetSearch: PropTypes.func.isRequired
};

export default UserSearch;
