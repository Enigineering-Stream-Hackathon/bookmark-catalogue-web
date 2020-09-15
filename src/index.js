import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import CreateShortUrl from "./bookmark-catalogue/components/create-short-url";
import CreateCard from "./bookmark-catalogue/components/create-card";
import Home from "./bookmark-catalogue/components/home";
import CreateUser from "./bookmark-catalogue/components/add-user";
import CardView from "./bookmark-catalogue/components/card-view";
import Login from "./bookmark-catalogue/components/login";
import CreateGroup from "./bookmark-catalogue/components/create-catalogue";
import AllCatalogues from "./bookmark-catalogue/components/all-catalogues";
import CatalogueDetails from "./bookmark-catalogue/components/catalogue-details";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/generate" component={CreateShortUrl} />
      <Route exact path="/create-card" component={CreateCard} />
      <Route exact path="/user" component={CreateUser}/>
      <Route exact path="/cards" component={CardView}/>
      <Route exact path="/create-group" component={CreateGroup} />
      <Route exact path="/catalogues" component={AllCatalogues}/>
      <Route exact path="/catalogues/:catalogueId" component={CatalogueDetails}/>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
