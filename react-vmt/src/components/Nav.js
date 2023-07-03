import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Nav = (props) => {
  return (
    <div className="navContainer">
      <h2>View My Travels</h2>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <a
          href="https://github.com/cortes-web-tech/viewMyTravels"
          target="_blank"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Nav;
