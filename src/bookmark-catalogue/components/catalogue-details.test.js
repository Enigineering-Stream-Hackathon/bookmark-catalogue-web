import "@testing-library/jest-dom";
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render } from "@testing-library/react";
import CardView from "./card-view";
import CatalogueDetails from "./catalogue-details";
import { BrowserRouter } from "react-router-dom";

const server = setupServer(
  rest.post("/catalogue?catalogueId=1111", (req, res, ctx) => {
    return res(ctx.json([]));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

test("allows the use to see each catalogue details", async () => {
  render(
    <BrowserRouter>
      <CatalogueDetails
        location={{
          pathname: "/card-view",
          state: {
            userName: "soubhik",
          },
        }}
      />
    </BrowserRouter>,
    {
      route: "/1111",
    }
  );

  await (() => {
    expect(getByText("Catalogue view")).toBeInTheDocument();
  });
});
