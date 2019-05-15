import React from 'react';
import ReactDOM from 'react-dom';
import Database from '../Database';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Database />, div);
  ReactDOM.unmountComponentAtNode(div);
});
