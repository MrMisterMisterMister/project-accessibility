import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import UserSearch from "../../../src/components/UserSearch";

describe("Testing the User Search Component", () => {
    test("allows user to input and search", async () => {
        // Arrange
        const setSearchResults = vi.fn(); // Use vi.fn() instead of jest.fn()
        const mockSearchResults = [{ id: 1, name: "John Doe", email: "john@example.com" }];

        // Act
        render(<UserSearch setSearchResults={setSearchResults} searchResults={mockSearchResults} />);
        const searchInput = screen.getByPlaceholderText("Search for users...");
        fireEvent.change(searchInput, { target: { value: "John" } });
        fireEvent.click(screen.getByText("Search"));

        // Assert
        expect(screen.getByDisplayValue("John")).toBeDefined();
        expect(screen.getByText("John Doe (john@example.com)")).toBeDefined();
    });

    test("selects a user from search results", async () => {
        // Arrange
        const mockSearchResults = [{ id: 1, name: "Jane Doe", email: "jane@example.com" }];
        const onSelectUser = vi.fn();
        const resetSearch = vi.fn();

        // Act
        render(<UserSearch onSelectUser={onSelectUser} setSearchResults={() => {}} searchResults={mockSearchResults} resetSearch={resetSearch} />);
        const userItem = screen.getByText("Jane Doe (jane@example.com)");
        fireEvent.click(userItem);

        // Assert
        expect(onSelectUser).toHaveBeenCalledWith(mockSearchResults[0]);
        expect(resetSearch).toHaveBeenCalled();
    });
});
