import React, { useState } from "react";
import { Button, FormGroup, Form, FormLabel } from "react-bootstrap";
import useInput from "../hooks/use-input";
import usePostRequest from "../hooks/use-request";
import { USER_MANAGEMENT } from "./constants";

const UserForm = (props) => {
  const initialValue = {
    userName: "",
    name:"",
    role: "",
    password: "",
  };
  const { value, reset, handleChange } = useInput(initialValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createUser(value);
    console.log(JSON.stringify(value));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel className="my-1 mr-2 ml-2" htmlFor="userName">
          User Name
        </FormLabel>
        <input
          id="userName"
          className="form-control"
          type="text"
          name="userName"
          value={value.userName}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel className="my-1 mr-2 ml-2" htmlFor="name">
          Name
        </FormLabel>
        <input
        id="name"
          className="form-control"
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
        />
      </FormGroup>
      <Form.Group>
    <Form.Label className="my-1 mr-2 ml-2" htmlFor="role">Role:</Form.Label>
    <Form.Control 
    as="select"
    name="role"
    id= "role"
    value={value.role}
    onChange ={handleChange}>
      <option>ADMIN</option>
      <option>USER</option>
    </Form.Control>
  </Form.Group>
      <FormGroup>
        <FormLabel className="my-1 mr-2 ml-2" htmlFor="password">
          Password
        </FormLabel>
        <input
          id="password"
          className="form-control"
          type="password"
          name="password"
          value={value.password}
          onChange={handleChange}
        />
      </FormGroup>
      <Button className="btn btn-primary my-1 mr-2 ml-2" type="submit">
        Create User
      </Button>
    </Form>
  );
};

const CreateUser = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {sendRequest} = usePostRequest();

  const createUser = (body) => {
    sendRequest(`${USER_MANAGEMENT}/user`, body)
      .then((response) => setIsSuccess(true))
      .catch(() => alert("Error occurred while creating user"));
  };

  return (
    <div className="container">
      <h2 className= "header-design"> Create User:</h2>
      <UserForm createUser={createUser} />
      {isSuccess ? <p id="success">User created successfully</p> : <br />}
    </div>
  );
};

export default CreateUser;
