import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import OneCatalogueDetails from "./one-catalogue-details";

test("populates each catalogue details page", async () => {
  const catalogue = {
    title: "Catalogue Title",
    creator: "ironman"
  };

  render(
    <BrowserRouter>
      <OneCatalogueDetails catalogue={catalogue} allCards = {[]} />
    </BrowserRouter>
  );

  expect(screen.getByText("Catalogue Title")).toBeInTheDocument();
  expect(screen.getByText(/ironman/i)).toBeInTheDocument();
});
