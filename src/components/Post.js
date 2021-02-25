import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post: { id, title, body } }) => {
  return (
    <div className="card m-5">
      <div className="card-header">#{id}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <Link to={`/comments/${id}`} className="btn btn-secondary">
          Goto Post
        </Link>
      </div>
    </div>
  );
};

export default Post;
