import React, { useState } from "react";
import Spinner from "./Spinner";

const Comment = ({ comment: { id, name, body }, loading }) => {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };

  if (loading) {
    //display spinner while fetching data from API
    return <Spinner />;
  } else {
    return (
      <div className="card-body">
        <h5 className="card-title">
          <i className="fas fa-user-alt mx-3"></i>
          {name}
        </h5>
        <p className="card p-3">
          <div className="d-flex justify-content-between">
            <div>{body}</div>
            <div>
              {like ? (
                <i
                  class="fas fa-heart"
                  style={{ color: "red" }}
                  onClick={toggleLike}
                ></i>
              ) : (
                <i class="far fa-heart" onClick={toggleLike}></i>
              )}
            </div>
          </div>
        </p>
      </div>
    );
  }
};

export default Comment;
