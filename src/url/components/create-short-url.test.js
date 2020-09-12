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
import CreateShortUrl from "./create-short-url";

const server = setupServer(
  rest.post("/short-url", (req, res, ctx) => {
    return res(ctx.json({shortUrl: 'http://shorturl'}))
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

test("allows the user to generate short url from long url", async () => {
  render(<CreateShortUrl />);

  // fill out the form
  fireEvent.change(screen.getByLabelText('Enter Url'), {
    target: { value: "http://longurl" },
  });
  fireEvent.change(screen.getByLabelText('Expiry Date:'), {
    target: { value: "description title" },
  });

  fireEvent.click(screen.getByText(/Generate Short Url/i));

  await (() => {
    expect(getByText('http://shorturl')).toBeInTheDocument();
  });
});
