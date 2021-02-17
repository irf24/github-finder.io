import React, { Component } from "react";

//user data component

const UserData = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card col-sm-3 m-4">
      <div className="card-body">
        <img
          src={avatar_url}
          className="rounded-circle"
          style={{ width: "60px", height: "60px", marginBottom: "20px" }}
        />
        <p>{login}</p>
        <a href={html_url} className="btn btn-success my-2">
          View
        </a>
      </div>
    </div>
  );
};

export default UserData;
