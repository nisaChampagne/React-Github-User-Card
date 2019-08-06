import React from "react";

class FollowersCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      console.log('FOLLOWERS BIO')
    return (
      <div className="container">
        <div className="card">
          <img
            className="img"
            src={this.props.follower.avatar_url}
            alt="github user image"
          />
          <h3 className="login">{this.props.follower.login}</h3>
        </div>
      </div>
    );
  }
}
export default FollowersCard;
