import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import CardBookmark from "./bookmark-card"

const CardView = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState([]);
  const { userName } = props.location.state;

  useEffect(() => {
    fetch(`http://localhost:8080/cards?context=${userName}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCards(result);
        },

        (error) => {
          setIsLoaded(true);
          alert("Error occurre while retrieving cards");
        }
      );
  }, [userName]);

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
    return cardsOfCards;
  };

  return (
    <div>
      <h2 className ="header-design">View All your cards</h2>
      {!isLoaded ? (
        <div>Still loading</div>
      ) : (
        <div>
          <ListGroup>
            {cardOfCards(cards).map((it) => (
              <ListGroup horizontal>
                {it.map((c) => (
                  <ListGroup.Item>
                    <CardBookmark card={c} />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ))}
          </ListGroup>
        </div>
      )}
    </div>
  );
};

export default CardView;
