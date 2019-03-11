import React from 'react';
import { Nav } from './Nav';

export default class Frame extends React.Component {
  public render () {
    return (
      <div className="frame">
      <section className="header">
        <Nav/>
      </section>
      <section className="container">
        {this.props.children}
      </section>
    </div>
    );
  }
}