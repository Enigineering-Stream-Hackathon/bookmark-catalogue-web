import React, { useState } from "react";
import { Button, FormGroup, Form, FormLabel } from "react-bootstrap";
import useInput from "../hooks/use-input";
import usePostRequest from "../hooks/use-request";

const CardForm = (props) => {
  const initialValue = {
    title: "",
    description: "",
    longUrl: "",
  };
  const { value, reset, handleChange } = useInput(initialValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCard(value);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel className="my-1 mr-2 ml-2" htmlFor="title">
          Title
        </FormLabel>
        <input
          id="title"
          className="form-control"
          type="text"
          name="title"
          value={value.title}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel className="my-1 mr-2 ml-2" htmlFor="description">
          Description
        </FormLabel>
        <input
        id="description"
          className="form-control"
          type="text"
          name="description"
          value={value.description}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel className="my-1 mr-2 ml-2" htmlFor="longUrl">
          Url
        </FormLabel>
        <input
          id="longUrl"
          className="form-control"
          type="text"
          name="longUrl"
          value={value.longUrl}
          onChange={handleChange}
        />
      </FormGroup>
      <Button className="btn btn-primary my-1 mr-2 ml-2" type="submit">
        Create New
      </Button>
    </Form>
  );
};

const CreateCard = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {sendRequest} = usePostRequest();

  const createCard = (body) => {
    sendRequest("http://localhost:8080/card", body)
      .then((response) => setIsSuccess(true))
      .catch(() => alert("Error occurred while creating card"));
  };

  return (
    <div className="container">
      <h2> Create BookMark card:</h2>
      <CardForm createCard={createCard} />
      {isSuccess ? <p id="success">Card created successfully</p> : <br />}
    </div>
  );
};

export default CreateCard;
