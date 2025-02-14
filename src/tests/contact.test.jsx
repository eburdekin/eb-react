import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Contact from "../sections/Contact";

describe("Contact form", () => {
  it("Send button is disabled by default", () => {
    render(<Contact />);
    const sendButton = screen.getByRole("button", { name: /send/i });
    expect(sendButton).toBeDisabled();
  });

  it("Error messages populate on input change", async () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/your email/i);
    const messageInput = screen.getByLabelText(/your message/i);

    await userEvent.type(nameInput, "aa");
    await userEvent.clear(nameInput);
    fireEvent.blur(nameInput);

    const nameError = await screen.findByText(/name is required/i);
    expect(nameError).toBeInTheDocument();

    await userEvent.type(emailInput, "invalid-email");
    fireEvent.blur(emailInput);

    const emailError = await screen.findByText(
      /please enter a valid email address/i
    );
    expect(emailError).toBeInTheDocument();

    await userEvent.type(messageInput, "a");
    await userEvent.clear(messageInput);
    fireEvent.blur(messageInput);

    const messageError = await screen.findByText(/message is required/i);
    expect(messageError).toBeInTheDocument();
  });

  it("Adding some inputs keeps button disabled", async () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/your name/i);
    await userEvent.type(nameInput, "Test Name");

    const sendButton = screen.getByRole("button", { name: /send/i });
    expect(sendButton).toBeDisabled();
  });

  it("Adding all inputs enables button", async () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/your email/i);
    const messageInput = screen.getByLabelText(/your message/i);

    await userEvent.type(nameInput, "Test Name");
    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(messageInput, "Test message");

    const sendButton = screen.getByRole("button", { name: /send/i });
    expect(sendButton).toBeEnabled();
  });

  it("Send button submits form and shows success message", async () => {
    const mockOnSubmit = vi.fn();
    render(<Contact onSubmit={mockOnSubmit} />);

    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/your email/i);
    const messageInput = screen.getByLabelText(/your message/i);

    const sendButton = screen.getByRole("button", { name: /send/i });

    await userEvent.type(nameInput, "Test Name");
    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(messageInput, "Test message");

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    await userEvent.click(sendButton);

    await waitFor(() =>
      expect(
        screen.getByText("Form submitted successfully!")
      ).toBeInTheDocument()
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
