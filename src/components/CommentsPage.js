import React, { useEffect } from "react";
import Comment from "./Comment";
import Spinner from "./Spinner";

const CommentsPage = ({
  post,
  getPost,
  comments,
  getComments,
  match,
  loading,
}) => {
  useEffect(() => {
    getComments(match.params.id);
    getPost(match.params.id);
  }, []);

  const { id, title, body } = post;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="post m-5 text-left">
          <div className="post-body">
            <h3 className="post-title">{title}</h3>
            <p className="post-text">{body}</p>
          </div>
        </div>
        <hr />
        <div className="container text-left my-4">
          {comments.map((comment) => (
            <div className="text-left" key={comment.id}>
              <Comment comment={comment} />
            </div>
          ))}
        </div>
      </>
    );
  }
};
export default CommentsPage;
