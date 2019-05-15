import React from 'react';

const DatabaseList = ({ dbz }) => {
  if (!dbz) {
    return <div>Loading...</div>;
  }
  return <ul>{dbz.map(theUsers => <li key={theUsers.id}>{theUsers.name}</li>)}</ul>;
};

export default DatabaseList;
