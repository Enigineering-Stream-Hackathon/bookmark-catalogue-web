import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const OneCatalogue = (props) => {
  return (
    <Card>
      <Card.Header as="h5">{props.cat.title}</Card.Header>
      <Card.Body>
        <Card.Title>Creator: {props.cat.creator}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
          {props.cat.catalogueId}
        </Card.Text>
        <Link to={`/catalogues/${props.cat.catalogueId}`}>
          <Button variant="primary">Open</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default OneCatalogue;
