import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { NavMobile } from "../../../src/components/Nav";

describe("Testing the Mobile Nav", () => {
    test("check if mobile menu is open", () => {
        // Arrange
        const links = [
            { name: "Home", path: "/" },
            { name: "About", path: "/about" }
        ];

        // Act
        render(<NavMobile links={links} />);

        // Open the menu
        fireEvent.click(screen.getByTestId("nav-menu-toggle"));

        // Assert
        expect(document.body.classList.contains("site__header_nav_is__open")).toBeTruthy();
    });
});
