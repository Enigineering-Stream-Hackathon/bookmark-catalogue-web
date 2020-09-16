import React, { useState } from "react";
import { Button, FormGroup, Form, FormLabel } from "react-bootstrap";
import useInput from "../hooks/use-input";
import usePostRequest from "../hooks/use-request";

const CatalogueForm = (props) => {
  const initialValue = {
    title: "",
    category: "",
    subCategory: "",
    creator: props.user,
    longUrl: "http://localhost:3000/catalogues/",
  };
  const { value, handleChange } = useInput(initialValue);

  const categoryToSubCategory = (category) => {
    if (category === "FEATURE_TEAM") {
      return ["FT1", "FT2"];
    } else if (category === "TRIBE") {
      return ["Tribe1", "Tribe2"];
    } else {
      return ["Platform 1", "Platform 2"];
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createGroup(value);
    console.log(JSON.stringify(value));
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
      <Form.Group>
        <Form.Label className="my-1 mr-2 ml-2" htmlFor="category">
          Category
        </Form.Label>
        <Form.Control
          as="select"
          name="category"
          id="category"
          value={value.category}
          onChange={handleChange}
        >
          <option value="FEATURE_TEAM">Feature Team</option>
          <option value="TRIBE">Tribe</option>
          <option value="PLATFORM">Platform</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-1 mr-2 ml-2" htmlFor="subCategory">
          Sub Category
        </Form.Label>
        <Form.Control
          as="select"
          name="subCategory"
          id="subCategory"
          value={value.subCategory}
          onChange={handleChange}
        >
          {categoryToSubCategory(value.category).map((it) => (
            <option key={it} value={it}>
              {it}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button className="btn btn-primary my-1 mr-2 ml-2" type="submit">
        Create Catalogue
      </Button>
    </Form>
  );
};

const CreateGroup = (props) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { sendRequest } = usePostRequest();
  const { userName } = props.location.state;

  const createGroup = (body) => {
    sendRequest("http://localhost:8080/catalogue", body)
      .then((response) => setIsSuccess(true))
      .catch(() => alert("Error occurred while creating group"));
  };

  return (
    <div className="container">
      <h2 className= "header-design"> Create Catalogue:</h2>
      <CatalogueForm createGroup={createGroup} user={userName} />
      {isSuccess ? (
        <div>
          <p id="success">Group created successfully</p>
          <div className="input-group mb-3 my-5">
            <input
              type="text"
              className="form-control"
              placeholder="Short Url"
              aria-label="Short Url"
              value="http://shorturl"
              readOnly
            ></input>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Copy
              </button>
            </div>
          </div>
        </div>
      ) : (
        <br />
      )}
    </div>
  );
};

export default CreateGroup;
