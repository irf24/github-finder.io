import "./App.css";
import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import About from "./components/About";
import NotFound from "./components/NotFound";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserCard from "./components/UserCard";
import CommentsPage from "./components/CommentsPage";

//main component with initial state

const App = ({ getUserPosts, getPost, getComments }) => {
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  // loading initial data using mock API
  // when component mounts

  useEffect(async () => {
    //set loading to true untill get response
    setLoading(true);

    //fetch data using Axios
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    // set loading to false
    setUsers(res.data);
    setLoading(false);
  }, []);

  getUserPosts = async (id) => {
    setLoading(true);

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userid=${id}&skip=0&limit=10`
    );

    //set loading to false and display search results
    setUserPosts(res.data);
    setLoading(false);
  };

  getPost = async (postId) => {
    setLoading(true);

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    //set loading to false and display search results
    setPost(res.data);
    setLoading(false);
  };

  getComments = async (id) => {
    setLoading(true);

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postid=${id}`
    );

    //set loading to false and display search results
    setComments(res.data);
    setLoading(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <div className="container p-4">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Company</th>
                        <th scope="col">Posts</th>
                      </tr>
                    </thead>
                    <tbody>
                      <Users loading={loading} users={users} />
                    </tbody>
                  </table>
                </div>
              </Fragment>
            )}
          />
          <Route path="/about" component={About} />
          <Route
            exact
            path="/users/:id/posts"
            render={(props) => (
              <UserCard
                {...props}
                getUserPosts={getUserPosts}
                userPosts={userPosts}
                loading={loading}
              />
            )}
          />
          <Route
            exact
            path="/comments/:id"
            render={(props) => (
              <CommentsPage
                {...props}
                getComments={getComments}
                getPost={getPost}
                post={post}
                comments={comments}
                loading={loading}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
