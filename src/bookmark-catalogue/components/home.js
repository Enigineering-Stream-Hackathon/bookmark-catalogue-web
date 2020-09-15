import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const { userName } = props.location.state;
  return (
    <div>
      <p>{userName}</p>
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
        <Link to={{
            pathname: '/cards',
            state: {
              userName: userName,
            },
          }}>View Cards</Link>
      </div>
      <div className="container">
        <Link to={{
            pathname: '/create-group',
            state: {
              userName: userName,
            },
          }}>Create Groups</Link>
      </div>
      <div className="container">
        <Link to="/user">Add User</Link>
      </div>
      <div className="container">
        <Link to="/catalogues">All Catalogues</Link>
      </div>
    </div>
  );
};

export default Home;
