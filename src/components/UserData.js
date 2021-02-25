import React, { Component } from "react";
import { Link } from "react-router-dom";

//user data component

const UserData = ({ user: { id, name, company } }) => {
  return (
    <>
      <tr>
        <th>{id}</th>
        <td>{name}</td>
        <td>{company.name}</td>
        <td>
          <Link to={`/users/${id}/posts`} className="btn btn-success my-2">
            View
          </Link>
        </td>
      </tr>
    </>
  );
};

export default UserData;
