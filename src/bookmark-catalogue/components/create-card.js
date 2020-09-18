import React, { useState } from "react";
import { Button, FormGroup, Form, FormLabel } from "react-bootstrap";
import useInput from "../hooks/use-input";
import usePostRequest from "../hooks/use-request";
import { BOOKMARK_CATALOGUE } from "./constants";

const CardForm = (props) => {
  const initialValue = {
    title: "",
    description: "",
    longUrl: "",
    context: props.user,
    creator: props.user,
    featureTeam:"",
    tribe:"",
    platform:""
  };
  const { value, reset, handleChange } = useInput(initialValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCard(value);
    console.log(JSON.stringify(value));
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
          max="150"
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
      <Form.Group>
        <Form.Label className="my-1 mr-2 ml-2" htmlFor="featureTeam">
          Feature Team
        </Form.Label>
        <Form.Control
          as="select"
          name="featureTeam"
          id="featureTeam"
          required
          value={value.featureTeam}
          onChange={handleChange}
        >
          <option selected="true" value="">Please Select</option>
          <option value="FT1">FT1</option>
          <option value="FT2">FT2</option>
          <option value="FT3">FT3</option>
          <option value="FT4">FT4</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-1 mr-2 ml-2" htmlFor="tribe">
          Tribe
        </Form.Label>
        <Form.Control
          as="select"
          name="tribe"
          id="tribe"
          required
          value={value.tribe}
          onChange={handleChange}
        >
          <option selected="true" value="">Please Select</option>
          <option value="Tribe1">Tribe1</option>
          <option value="Tribe2">Tribe2</option>
          <option value="Tribe3">Tribe3</option>
          <option value="Tribe4">Tribe4</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-1 mr-2 ml-2" htmlFor="platform">
          Platform
        </Form.Label>
        <Form.Control
          as="select"
          name="platform"
          id="platform"
          required
          value={value.platform}
          onChange={handleChange}
        >
        <option selected="true" value="">Please Select</option>
          <option value="Platform1">Platform1</option>
          <option value="Platform2">Platform2</option>
          <option value="Platform3">Platform3</option>
          <option value="Platform4">Platform4</option>
        </Form.Control>
      </Form.Group>
      <Button className="btn btn-primary my-1 mr-2 ml-2" type="submit">
        Create New
      </Button>
    </Form>
  );
};

const CreateCard = (props) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { sendRequest } = usePostRequest();
  const { userName } = props.location.state;

  const createCard = (body) => {
    sendRequest(`${BOOKMARK_CATALOGUE}/card`, body)
      .then((response) => setIsSuccess(true))
      .catch(() => alert("Error occurred while creating card"));
  };

  return (
    <div className="container">
      <h2 className= "header-design"> Create BookMark card:</h2>
      <CardForm createCard={createCard} user={userName} />
      {isSuccess ? <p id="success">Card created successfully</p> : <br />}
    </div>
  );
};

export default CreateCard;
