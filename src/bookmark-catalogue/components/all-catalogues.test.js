import "@testing-library/jest-dom";
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render } from "@testing-library/react";
import CardView from "./card-view";
import AllCatalogues from "./all-catalogues";

const server = setupServer(
  rest.post("/catalogues", (req, res, ctx) => {
    return res(ctx.json([]));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

test("allows the use to see all the catalogues", async () => {
  render(
    <AllCatalogues
    />
  );

  await (() => {
    expect(getByText("All Catalogues:")).toBeInTheDocument();
  });
});
