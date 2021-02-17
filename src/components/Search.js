import React, { Component } from "react";

//search bar component with initial state

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();

    //pass the query via callback function searchUser
    this.props.searchUsers(this.state.text);

    this.setState({ text: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="d-flex flex-column align-items-center my-4">
          <input
            type="text"
            name="text"
            className="form-control w-50"
            value={this.state.text}
            onChange={this.onChange}
          />
          <button className="btn btn-primary my-2">Search</button>
        </div>
      </form>
    );
  }
}

export default Search;
