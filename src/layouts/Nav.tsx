import React from 'react';
import { Link } from 'react-router-dom';

export class Nav extends React.Component {
  public render() {
    return (
      <nav>
        <Link to="/">Home</Link>
      </nav>
    );
  }
}
