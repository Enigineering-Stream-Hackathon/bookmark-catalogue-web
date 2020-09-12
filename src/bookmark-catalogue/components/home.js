import React, { useState } from "react";
import { BrowserRouter, Link, Router } from "react-router-dom";

const Home = () => (
  <div>
    <div className="container">
            <Link to="/generate">Generate Short Url</Link>
    </div>
    <div className="container">
        <Link to="/create-card">Create Bookmark Card</Link>
    </div>
  </div>
);

export default Home;
