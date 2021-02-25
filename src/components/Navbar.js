import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  return (
    <div className="Navbar">
      <div className="d-flex justify-content-between">
        <div className="m-4">
          <h3>
            <i className={icon}></i>
            <span className="title">{title}</span>
          </h3>
        </div>

        <div className="m-4">
          <Link to="/" className="link mr-4">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Mojo Blog",
  icon: "fas fa-blog",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
