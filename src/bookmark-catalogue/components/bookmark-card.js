import React from "react";
import { Button, Card } from "react-bootstrap";

const CardBookmark = (props) => (
    <Card border="info" style={{ width: "18rem", height: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.card.title}</Card.Title>
        <Card.Text>{props.card.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = props.card.shortUrl;
          }}
        >
          Open Link
        </Button>
        </Card.Footer>
    </Card>
  );

  export default CardBookmark;