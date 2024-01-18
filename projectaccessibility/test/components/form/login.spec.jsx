import { describe, expect, test, vi } from "vitest";
import { FormLogin } from "../../../src/components/Form";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createEndpoint } from "../../../src/api/axiosClient";

describe("Testing the Login Form", () => {
    // Mock the createEndpoint function
    vi.mock("../../../src/api/axiosClient", () => ({
        createEndpoint: vi.fn()
    }));

    test("valid email, password : ", async () => {
        // Arrange
        // Mock the createEndpoint function
        createEndpoint.mockReturnValue({
            post: vi.fn().mockResolvedValue({
                status: 200,
                data: { token: "mockedToken" }
            })
        });
        render(<FormLogin />);
        const emailInput = screen.getByTestId("emailInput");
        const passwordInput = screen.getByTestId("passwordInput");
        const submitButton = screen.getByRole("button", { name: /login/i });
        const loginCreds = { email: "test@email.com", password: "Pa$$w0rd" };

        // Act
        fireEvent.change(emailInput, { target: { value: loginCreds.email } });
        fireEvent.change(passwordInput, { target: { value: loginCreds.password } });
        fireEvent.click(submitButton);

        // Assert
        // Wait for the asynchronous operations to complete
        await waitFor(() => {
            // Check if the form has been reset
            expect(emailInput.value).toBe("");
            expect(passwordInput.value).toBe("");
        });
    });

    test("invalid email, password : ", async () => {
        // Arrange
        // Mock the createEndpoint function
        createEndpoint.mockReturnValue({
            post: vi.fn().mockRejectedValue({
                response: { data: { error: "UserNotFound" } }
            })
        });
        const emailInput = screen.getByTestId("emailInput");
        const passwordInput = screen.getByTestId("passwordInput");
        const submitButton = screen.getByRole("button", { name: /login/i });
        const loginCreds = { email: "invalid@email.com", password: "Pa$$w0rd" };

        // Act
        fireEvent.change(emailInput, { target: { value: loginCreds.email } });
        fireEvent.change(passwordInput, { target: { value: loginCreds.password } });
        fireEvent.click(submitButton);

        // Assert
        // Wait for the asynchronous operations to complete
        await waitFor(() => {
            // Check if the form has been reset
            expect(emailInput.value).toBe(loginCreds.email);
            expect(passwordInput.value).toBe(loginCreds.password);
        });
    });
});
