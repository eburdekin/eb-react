// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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

    userEvent.type(nameInput, "a");
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

  // test("Adding all inputs enables button", () => {
  //   render(<Contact />);

  //   const nameInput = screen.getByLabelText(/your name/i);
  //   const emailInput = screen.getByLabelText(/your email/i);
  //   const messageInput = screen.getByLabelText(/your message/i);

  //   userEvent.type(nameInput, "Test Name");
  //   userEvent.type(emailInput, "test@example.com");
  //   userEvent.type(messageInput, "Test message");

  //   const sendButton = screen.getByRole("button", { name: /send/i });
  //   expect(sendButton).toBeEnabled();
  // });

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

  // Optionally check the arguments passed to onSubmit
  // expect(mockOnSubmit).toHaveBeenCalledWith({
  //   name: "Test Name", // Replace with expected values
  //   email: "test@example.com",
  //   message: "Test message",
  // });

  // const successMessage = await screen.findByText(
  //   /form submitted successfully!/i
  // );
  // expect(successMessage).toBeInTheDocument();
  // });
});
