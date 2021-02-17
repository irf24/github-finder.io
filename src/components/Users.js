import React, { Component } from "react";
import UserData from "./UserData";
import Spinner from "./Spinner";

//user component with props

const Users = ({ loading, users }) => {
  if (loading) {
    //display spinner while fetching data from API
    return <Spinner />;
  } else {
    return (
      <div className="row justify-content-center">
        {users.map((user) => (
          <UserData key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
