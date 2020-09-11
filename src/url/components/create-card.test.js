import "@testing-library/jest-dom";
import React from "react";
import CreateCard from "./create-card";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  render,
  fireEvent,
  screen,
  waitForElement,
  wait,
} from "@testing-library/react";

const server = setupServer(
  rest.post("/card", (req, res, ctx) => {
    return res(ctx.status(201));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

test("allows the user to create card", async () => {
  render(<CreateCard />);

  // fill out the form
  fireEvent.change(screen.getByLabelText(/title/i), {
    target: { value: "card title" },
  });
  fireEvent.change(screen.getByLabelText(/description/i), {
    target: { value: "description title" },
  });

  fireEvent.change(screen.getByLabelText(/url/i), {
    target: { value: "http://longurl.com" },
  });

  fireEvent.click(screen.getByText(/create new/i));

  await (() => {
    expect(getByText("Card created successfully")).toBeInTheDocument();
  });
});
