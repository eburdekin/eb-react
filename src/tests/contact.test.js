import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Contact from "../sections/Contact";

describe("Contact form", () => {
  test("Send button is disabled by default", () => {
    render(<Contact />);
    const sendButton = screen.getByRole("button", { name: /send/i });
    expect(sendButton).toBeDisabled();
  });

  test("Error messages populate on input change", async () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/your email/i);
    const messageInput = screen.getByLabelText(/your message/i);

    userEvent.type(nameInput, "aa");
    userEvent.clear(nameInput);
    fireEvent.blur(nameInput);

    const nameError = await screen.findByText(/name is required/i);
    expect(nameError).toBeInTheDocument();

    userEvent.type(emailInput, "invalid-email");
    fireEvent.blur(emailInput);

    const emailError = await screen.findByText(
      /please enter a valid email address/i
    );
    expect(emailError).toBeInTheDocument();

    userEvent.type(messageInput, "a");
    userEvent.clear(messageInput);
    fireEvent.blur(messageInput);

    const messageError = await screen.findByText(/message is required/i);
    expect(messageError).toBeInTheDocument();
  });

  test("Adding some inputs keeps button disabled", () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/your name/i);
    userEvent.type(nameInput, "Test Name");

    const sendButton = screen.getByRole("button", { name: /send/i });
    expect(sendButton).toBeDisabled();
  });

  test("Adding all inputs enables button", async () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/your email/i);
    const messageInput = screen.getByLabelText(/your message/i);

    await act(async () => {
      userEvent.type(nameInput, "Test Name");
      userEvent.type(emailInput, "test@example.com");
      userEvent.type(messageInput, "Test message");
    });

    const sendButton = screen.getByRole("button", { name: /send/i });
    expect(sendButton).toBeEnabled();
  });

  // test("Send button submits form and shows success message", async () => {
  //   const mockOnSubmit = jest.fn();
  //   render(<Contact onSubmit={mockOnSubmit} />);

  //   const nameInput = screen.getByLabelText(/your name/i);
  //   const emailInput = screen.getByLabelText(/your email/i);
  //   const messageInput = screen.getByLabelText(/your message/i);

  //   userEvent.type(nameInput, "Test Name");
  //   userEvent.type(emailInput, "test@example.com");
  //   userEvent.type(messageInput, "Test message");

  //   const sendButton = screen.getByRole("button", { name: /send/i });
  //   userEvent.click(sendButton);

  //   await waitFor(() => expect(mockOnSubmit).toHaveBeenCalledTimes(1));
  // });
});
