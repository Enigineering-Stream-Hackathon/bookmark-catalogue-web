import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./login";

test("allows the user to login with user name", async () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  fireEvent.change(screen.getByLabelText(/UserName/i), {
    target: { value: "ail.mayferar" },
  });

  fireEvent.click(screen.getByText(/Login/i));

  await (() => {
    expect(getByText("Home")).toBeInTheDocument();
  });
});
