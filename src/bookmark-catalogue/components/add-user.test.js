import "@testing-library/jest-dom";
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  render,
  fireEvent,
  screen,
  waitForElement,
  wait,
} from "@testing-library/react";
import CreateUser from "./add-user";

const server = setupServer(
  rest.post("/user", (req, res, ctx) => {
    return res(ctx.status(201));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

test("allows the admin to create user", async () => {
  render(<CreateUser />);

  // fill out the form
  fireEvent.change(screen.getByLabelText('User Name'), {
    target: { value: "Iron.Man" },
  });
  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: "Robert Jr" },
  });

  fireEvent.change(screen.getByLabelText(/role/i), {
    target: { value: "ADMIN" },
  });

  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: "qqqqq" },
  });

  fireEvent.click(screen.getByText('Create User'));

  await (() => {
    expect(getByText("User created successfully")).toBeInTheDocument();
  });
});
