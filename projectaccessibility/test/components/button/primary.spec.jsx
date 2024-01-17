import { describe, expect, test, vi } from "vitest";
import { ButtonPrimary } from "../../../src/components/Button";
import { fireEvent, render } from "@testing-library/react";

describe("Testing the Primary Button", () => {
    test("renders correctly", () => {
        // Arrange
        const text = "Primary";
        const isActive = true;
        const action = vi.fn();

        // Act
        const { getByText } = render(<ButtonPrimary text={text} isActive={isActive} action={action} />);
        const primaryButton = getByText(text);
        fireEvent.click(primaryButton);

        // Assert
        expect(action).toHaveBeenCalled();
        expect(primaryButton).toBeDefined();
    });
});
