import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shape from "../../../src/components/Shape";

describe("Testing the Cookies Shape", () => {
    test("renders cookie shapes for cookie page", () => {
        // Arrange
        const section = "cookies";
        const position = ["right", "left"];

        // Act
        render(<Shape section={section} position={position} />);

        // Assert
        position.forEach((position) => {
            expect(screen.getByTestId(`shape__${section}_${position}`)).toBeDefined();
        });
    });
});
