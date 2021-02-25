import React from "react";
import UserData from "./UserData";
import Spinner from "./Spinner";

//user component with props

const Users = ({ loading, users }) => {
  if (loading) {
    //display spinner while fetching data from API
    return <Spinner />;
  } else {
    return (
      <>
        {users.map((user) => (
          <UserData key={user.id} user={user} />
        ))}
      </>
    );
  }
};

export default Users;
