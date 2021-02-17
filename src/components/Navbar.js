import React, { Component } from "react";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  return (
    <div className="Navbar">
      <h3>
        <i className={icon}></i>
        <span className="title">{title}</span>
      </h3>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
