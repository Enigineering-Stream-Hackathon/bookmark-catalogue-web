import React from "react";
import { ListGroup } from "react-bootstrap";
import CardBookmark from "./bookmark-card";

const OneCatalogueDetails = (props) => {
  const cardOfCards = (original) => {
    let cards = [];
    let cardsOfCards = [];
    original.forEach((it) => {
      if (cards.length === 4) {
        cardsOfCards.push(cards);
        cards = [];
      }
      cards.push(it);
    });
    cardsOfCards.push(cards);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@" + JSON.stringify(cardsOfCards));
    return cardsOfCards;
  };

  return (
    <div className="container">
      <h3 className="header-design">{props.catalogue.title}</h3>
      <p>Creator : {props.catalogue.creator}</p>
      <div className="input-group mb-3 my-5">
        <label>Short Url :</label>
        <input
          type="text"
          className="form-control"
          placeholder="Short Url"
          aria-label="Short Url"
          value={props.catalogue.shortUrl}
          readOnly
        ></input>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            Copy
          </button>
        </div>
      </div>
      <br />
      <div>
        <ListGroup>
          {cardOfCards(props.allCards).map((it) => (
            <ListGroup horizontal key={it}>
              {it.map((c) => (
                <ListGroup.Item>
                  <CardBookmark card={c} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default OneCatalogueDetails;
