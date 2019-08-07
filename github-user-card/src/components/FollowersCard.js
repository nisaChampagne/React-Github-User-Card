import React from "react";
import githublogo from './githublogo.png';


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
          <img className='github-logo' src={githublogo} alt='github logo' width='30px' height='30px' />
        </div>
      </div>
    );
  }
}
export default FollowersCard;
