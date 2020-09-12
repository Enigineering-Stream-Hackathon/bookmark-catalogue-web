import React, { useState } from "react";
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
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="my-1 mr-2 ml-2" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          className="form-control"
          type="text"
          name="title"
          value={value.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="my-1 mr-2 ml-2" htmlFor="description">
          Description
        </label>
        <input
        id="description"
          className="form-control"
          type="text"
          name="description"
          value={value.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="my-1 mr-2 ml-2" htmlFor="longUrl">
          Url
        </label>
        <input
          id="longUrl"
          className="form-control"
          type="text"
          name="longUrl"
          value={value.longUrl}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary my-1 mr-2 ml-2" type="submit">
        Create New
      </button>
    </form>
  );
};

const CreateCard = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {sendRequest} = usePostRequest();

  const createCard = (body) => {
    sendRequest("http://localhost:8080/card", body)
      .then((response) => setIsSuccess(true))
      .catch(() => alert("Error occurred generating short url"));
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
