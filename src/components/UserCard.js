import React, { useEffect } from "react";
import Post from "./Post";
import Spinner from "./Spinner";

const UserCard = ({ userPosts, getUserPosts, match, loading }) => {
  useEffect(() => {
    getUserPosts(match.params.id);
  }, []);
  if (loading) {
    //display spinner while fetching data from API
    return <Spinner />;
  } else {
    return (
      <div className="container">
        {userPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
};

export default UserCard;
