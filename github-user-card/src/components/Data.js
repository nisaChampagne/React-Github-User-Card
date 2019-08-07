import React from "react";
import axios from "axios";
import UserCard from "./UserCard";
import FollowersCard from "./FollowersCard";

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: "",
      followersData: ["Wat"]
    };
  }

  componentDidMount() {
    const usersData = axios
      .get(`https://api.github.com/users/nisaChampagne`, [])
      .then(response => {
        this.setState({ usersData: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    const followersData = axios
      .get(`https://api.github.com/users/nisaChampagne/followers`, [])
      .then(response => {
        this.setState({ followersData: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetchUsersData();
  };

  render() {
    console.log("USERS", this.state.usersData);
    console.log("FOLLOWERS", this.state.followersData);
    return (
      <div>
        <UserCard user={this.state.usersData} />
        {this.state.followersData.map(follower => (
          <FollowersCard follower={follower} />
        ))}
      </div>
    );
  }
}

export default Data;
