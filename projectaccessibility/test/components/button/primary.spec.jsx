import { describe, expect, test, vi } from "vitest";
import { ButtonPrimary } from "../../../src/components/Button";
import { fireEvent, render } from "@testing-library/react";

describe("Testing the Primary Button", () => {
    test("renders correctly when active and clicked", () => {
        // Arrange
        const text = "Primary 1";
        const isActive = true;
        const action = vi.fn();
        const primaryButton = render(
            <ButtonPrimary text={text} isActive={isActive} action={action} />)
            .getByText(text);

        // Act
        fireEvent.click(primaryButton);

        // Assert
        expect(action).toHaveBeenCalled();
        expect(primaryButton).toBeDefined();
        expect(primaryButton.className).toContain("button__primary");
        expect(primaryButton.className).toContain("active");
    });

    test("renders correctly when inactive and clicked", () => {
        // Arrange
        const text = "Primary 2";
        const isActive = false;
        const action = vi.fn();
        const primaryButton = render(
            <ButtonPrimary text={text} isActive={isActive} action={action} />)
            .getByText(text);

        // Act
        fireEvent.click(primaryButton);

        // Assert
        expect(action).toHaveBeenCalled();
        expect(primaryButton).toBeDefined();
        expect(primaryButton.className).toContain("button__primary");
        expect(primaryButton.className).not.toContain("active");
    });
});
