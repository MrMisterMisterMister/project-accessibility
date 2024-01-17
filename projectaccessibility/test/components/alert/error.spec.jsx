import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Alert } from "../../../src/components/Alert";

describe("Testing the Error Alert", () => {
    test("renders error messages", () => {
        // Arrange
        const data = {
            error: [
                { code: "firstErrorCode" },
                { code: "secondErrorCode" }
            ]
        };

        // Act
        render(<Alert data={data} />);

        // Assert
        data.error.forEach((error) => {
            expect(screen.getByText(`error.${error.code}`)).toBeDefined();
        });
    });
});
