import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CardExpertise } from "../../../src/components/Card";

describe("Testing the Expertise Card", () => {
    test("renders correctly", () => {
        // Arrange
        const icon = <svg data-testid="icon-1" />;
        const title = "Title 1";
        const text = "Text 1";

        // Act
        render(<CardExpertise icon={icon} title={title} text={text} />);

        // Assert
        expect(screen.getByTestId("icon-1")).toBeDefined();
        expect(screen.getByText(title)).toBeDefined();
        expect(screen.getByText(text)).toBeDefined();
    });

    test("does not render icon, title and text", () => {
        // Arrange
        const title = "Title 2";
        const text = "Text 2";

        // Act
        render(<CardExpertise />);

        // Assert
        expect(screen.queryByTestId("icon-2")).toBeNull();
        expect(screen.queryByText(title)).toBeNull();
        expect(screen.queryByText(text)).toBeNull();
    });
});
