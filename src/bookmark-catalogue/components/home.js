import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { USER_MANAGEMENT } from "./constants";

const Home = (props) => {
  const { userName } = props.location.state;
  const noUser = {
    id: "",
    name: "",
    role: "ADMIN",
    password: "",
  };
  const [user, setUser] = useState(noUser);

  useEffect(() => {
    fetch(`${USER_MANAGEMENT}/user?userName=${userName}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setUser(result);
          console.log("***********" + JSON.stringify(result));
        },

        (error) => {
          alert("Error occurre while retrieving user");
        }
      );
  }, [userName]);

  let createGroup;
  let addUser;
  if ("ADMIN" === user.role) {
    createGroup = (
      <div className="container">
        <Link
          to={{
            pathname: "/create-group",
            state: {
              userName: userName,
            },
          }}
        >
          Create Groups
        </Link>
      </div>
    );

    addUser = (
      <div className="container">
        <Link to="/user">Add User</Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className= "header-design">Home</h2>
      <div className="container">
        <Link to="/generate">Generate Short Url</Link>
      </div>
      <div className="container">
        <Link
          to={{
            pathname: "/create-card",
            state: {
              userName: userName,
            },
          }}
        >
          Create Bookmark Card
        </Link>
      </div>
      <div className="container">
        <Link
          to={{
            pathname: "/cards",
            state: {
              userName: userName,
            },
          }}
        >
          View Cards
        </Link>
      </div>
      {createGroup}

      {addUser}
      <div className="container">
        <Link to="/catalogues">All Catalogues</Link>
      </div>
    </div>
  );
};

export default Home;
