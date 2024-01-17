import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Alert } from "../../../src/components/Alert";

describe("Testing the Success Alert", () => {
    test("correctly counts success messages length", () => {
        // Arrange
        const data = {
            success: [
                { code: "firstSuccessCode" },
                { code: "secondSuccessCode" }
            ]
        };

        // Act
        render(<Alert data={data} />);

        // Assert
        expect(screen.getAllByTestId("success-alert")).toHaveLength(2);
    });
});
