import React, { Component } from 'react';
import DatabaseList from './DatabaseList';

class Database extends Component {
  render() {
    return (
      <div>
        <h2>Database</h2>
        <div>
            <DatabaseList dbz={this.props.database} />
          </div>
      </div>
    );
  }
}

export default Database;
