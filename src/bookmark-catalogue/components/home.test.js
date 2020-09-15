import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Home from "./home";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

test("allows the user to route to create card component", async () => {
  render(
    <BrowserRouter>
      <Home
        location={{
          pathname: "/home",
          state: {
            userName: "userName",
          },
        }}
      />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByText(/Create Bookmark Card/i));
  expect(screen.getByText(/BookMark/i)).toBeInTheDocument();
});

test("allows the user to route to create short url component", async () => {
  render(
      <BrowserRouter>
        <Home
          location={{
            pathname: "/home",
            state: {
              userName: "userName",
            },
          }}
        />
      </BrowserRouter>
    
  );

  fireEvent.click(screen.getByText(/Generate Short Url/i));
  expect(screen.getByText(/Short/i)).toBeInTheDocument();
});
