import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
  const [userName, setUserName] = useState("");
  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <Container className="center-div">
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>UserName:</Form.Label>
          <Form.Control type="text" value={userName} onChange={handleChange} />
        </Form.Group>
        <Link
          to={{
            pathname: "/home",
            state: {
              userName: userName,
            },
          }}
        >
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Link>
      </Form>
    </Container>
  );
};

const Login = () => {
  return (
    <div className="container">
      <h2 className="header-design"> Welcome to Bookmark Catalogue</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
