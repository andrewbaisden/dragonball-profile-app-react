import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <p>Andrew Baisden is a, {this.props.jobtitle}</p>
      </div>
    );
  }
}

export default UserProfile;
