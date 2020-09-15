import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import OneCatalogue from "./one-catalogue";

test("populates each catalogue with the catalogue details", async () => {
  const catalogue = {
    title: "Catalogue Title",
    creator: "ironman",
    catalogueId: "123121312312",
  };

  render(
    <BrowserRouter>
      <OneCatalogue cat={catalogue} />
    </BrowserRouter>
  );

  expect(screen.getByText("Catalogue Title")).toBeInTheDocument();
  expect(screen.getByText(/ironman/i)).toBeInTheDocument();
});
