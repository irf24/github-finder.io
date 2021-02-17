import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Search from "./components/Search";
import axios from "axios";

//main component with initial state

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // loading initial data using github API
  // when component mounts

  async componentDidMount() {
    //set loading to true untill get response
    this.setState({ loading: true });

    //fetch data using Axios
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    // set loading to false
    this.setState({ users: res.data, loading: false });
  }

  // function for searching users

  searchUsers = async (text) => {
    //set loading to true untill get response
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    //set loading to false and display search results
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Search searchUsers={this.searchUsers} />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
