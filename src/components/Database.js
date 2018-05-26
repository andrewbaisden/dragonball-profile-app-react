import React, { Component } from 'react';

class Database extends Component {
  render() {
    return (
      <div>
        <h2>Database</h2>
        <div>
          <ul>{this.props.database.map(theUsers => <li key={theUsers.id}>{theUsers.name}</li>)}</ul>
        </div>
      </div>
    );
  }
}

export default Database;
