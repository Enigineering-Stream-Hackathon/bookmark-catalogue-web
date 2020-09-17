import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CardBookmark from "./bookmark-card";

test("populates each bookmark card", async () => {
  const card = {
    title: "Card Title",
    description: "card description",
    shortUrl: `${BOOKMARK_CATALOGUE}/tiny/Tribe2/690b455bc8494745e1a80c1662537e6cde66e5a6b14308d4c29ffdeef099789c`
  };

  render(
    <BrowserRouter>
      <CardBookmark card={card}/>
    </BrowserRouter>
  );

  expect(screen.getByText("Card Title")).toBeInTheDocument();
  expect(screen.getByText('card description')).toBeInTheDocument();
});
