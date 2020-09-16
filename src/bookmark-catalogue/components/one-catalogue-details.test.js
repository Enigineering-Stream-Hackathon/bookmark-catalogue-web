import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import OneCatalogueDetails from "./one-catalogue-details";

test("populates each catalogue details page", async () => {
  const catalogue = {
    title: "Catalogue Title",
    creator: "ironman",
    shortUrl: "http://localhost:8080/tiny/Tribe2/690b455bc8494745e1a80c1662537e6cde66e5a6b14308d4c29ffdeef099789c"
  };

  render(
    <BrowserRouter>
      <OneCatalogueDetails catalogue={catalogue} allCards = {[]} />
    </BrowserRouter>
  );

  expect(screen.getByText("Catalogue Title")).toBeInTheDocument();
  expect(screen.getByText(/ironman/i)).toBeInTheDocument();
});
