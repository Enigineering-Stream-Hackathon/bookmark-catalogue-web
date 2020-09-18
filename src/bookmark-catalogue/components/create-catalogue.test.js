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
import { MemoryRouter } from "react-router-dom";
import CreateGroup from "./create-catalogue";

const server = setupServer(
  rest.post("/catalogue", (req, res, ctx) => {
    return res(ctx.status(201));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

test("allows the user to create catalogue", async () => {
  render(
    <CreateGroup
      location={{
        pathname: "/create-catalogue",
        state: {
          userName: "userName",
        },
      }}
    />
  );

  // fill out the form
  fireEvent.change(screen.getByLabelText(/title/i), {
    target: { value: "catalogue title" },
  });
  fireEvent.change(screen.getByLabelText("Category"), {
    target: { value: "TRIBE" },
  });

  fireEvent.change(screen.getByLabelText("Sub Category"), {
    target: { value: "Tribe2" },
  });

  fireEvent.click(screen.getByText("Create Catalogue"));

  await (() => {
    expect(getByText("Catalogue created successfully")).toBeInTheDocument();
  });
});

test("Should show Feature team list in the sub category if category is FEATURE_TEAM", () => {
  render(
    <CreateGroup
      location={{
        pathname: "/create-catalogue",
        state: {
          userName: "userName",
        },
      }}
    />
  );

  fireEvent.change(screen.getByLabelText("Category"), {
    target: { value: "FEATURE_TEAM" },
  });

  expect(screen.getByText("FT1")).toBeInTheDocument();
});

test("Should show tribe list in the sub category if category is TRIBE", () => {
  render(
    <CreateGroup
      location={{
        pathname: "/create-catalogue",
        state: {
          userName: "userName",
        },
      }}
    />
  );

  fireEvent.change(screen.getByLabelText("Category"), {
    target: { value: "TRIBE" },
  });

  expect(screen.getByText("Tribe1")).toBeInTheDocument();
});

test("Should show platform list in the sub category if platform is PLATFORM", () => {
  render(
    <CreateGroup
      location={{
        pathname: "/create-catalogue",
        state: {
          userName: "userName",
        },
      }}
    />
  );

  fireEvent.change(screen.getByLabelText("Category"), {
    target: { value: "PLATFORM" },
  });

  expect(screen.getByText("Platform1")).toBeInTheDocument();
});
