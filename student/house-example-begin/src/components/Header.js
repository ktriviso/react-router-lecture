import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/topics/router">Router</Link></li>
            <li><Link to="/topics/route">Route</Link></li>
          </ul>
        </nav>
      </header>
    );
  };
}

export default Header;
