import "@testing-library/jest-dom";
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render } from "@testing-library/react";
import CardView from "./card-view";

const server = setupServer(
  rest.post("/cards?context=soubhik", (req, res, ctx) => {
    return res(ctx.json([]));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

test("allows the use to see all his cards", async () => {
  render(
    <CardView
      location={{
        pathname: "/card-view",
        state: {
          userName: "soubhik",
        },
      }}
    />
  );

  await (() => {
    expect(getByText("View All your cards")).toBeInTheDocument();
  });
});
