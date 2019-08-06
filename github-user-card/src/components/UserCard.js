import React from "react";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <img
            className="img"
            src={this.props.user.avatar_url}
            alt="github user image"
          />
          <h3 className="login">{this.props.user.login}</h3>
        </div>
      </div>
    );
  }
}
export default UserCard;
