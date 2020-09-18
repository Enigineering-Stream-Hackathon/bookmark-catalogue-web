import React, { useState } from "react";
import { Button, FormGroup, Form, FormLabel } from "react-bootstrap";
import useInput from "../hooks/use-input";
import usePostRequest from "../hooks/use-request";
import { BOOKMARK_CATALOGUE, BOOKMARK_CATALOGUE_WEB } from "./constants";

const CatalogueForm = (props) => {
  const initialValue = {
    title: "",
    category: "",
    subCategory: "",
    creator: props.user,
    longUrl: `${BOOKMARK_CATALOGUE_WEB}/catalogues/`,
  };
  const { value, handleChange } = useInput(initialValue);

  const categoryToSubCategory = (category) => {
    if (category === "FEATURE_TEAM") {
      return ['FT1', 'FT2','FT3', 'FT4' ];
    } else if (category === "TRIBE") {
      return ['Tribe1', 'Tribe2','Tribe3','Tribe4'];
    } else {
      return ['Platform1', 'Platform2','Platform3','Platform4'];
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
    sendRequest(`${BOOKMARK_CATALOGUE}/catalogue`, body)
      .then((response) => setIsSuccess(true))
      .catch(() => alert("Error occurred while creating group"));
  };

  return (
    <div className="container">
      <h2 className= "header-design"> Create Catalogue:</h2>
      <CatalogueForm createGroup={createGroup} user={userName} />
      {isSuccess ? (
        <div>
          <p id="success">Catalogue created successfully</p>
        </div>
      ) : (
        <br />
      )}
    </div>
  );
};

export default CreateGroup;
