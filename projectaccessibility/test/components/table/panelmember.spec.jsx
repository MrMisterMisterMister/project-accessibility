import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TablePanelMemberView } from "../../../src/components/Table";

describe("Testing the Panel Member Table", () => {
    test("renders correctly with panel member data", () => {
        // Arrange
        const data = [{
            id: 1,
            firstName: "Essex",
            lastName: "Essex",
            email: "essex@email.com",
            dateOfBirth: "1942-12-31",
            address: "The street of Essex's",
            postalCode: "9999CV",
            city: "City of Essex",
            country: "Essex of the freedom",
            disabilitiesName: [
                "Lemon", "Alchohol", "Seggs"
            ]
        }];

        // Act
        render(<TablePanelMemberView data={data} />);

        // Assert
        expect(screen.getByText("Essex Essex")).toBeDefined();
        expect(screen.getByText("essex@email.com")).toBeDefined();
        expect(screen.getByText("31 december 1942")).toBeDefined();
        expect(screen.getByText("The street of Essex's")).toBeDefined();
        expect(screen.getByText("9999CV")).toBeDefined();
        expect(screen.getByText("City of Essex")).toBeDefined();
        expect(screen.getByText("Essex of the freedom")).toBeDefined();
    });
});
