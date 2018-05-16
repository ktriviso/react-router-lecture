import React, { Component } from 'react';

class Nav extends Component {

  render() {
    return (
      <nav>
        <ul>
          <a href={'/'}><li>Home</li></a>
          <a href={'/quotelist'}><li>Quotes</li></a>
          <a href={'/about'}><li>About</li></a>
        </ul>
      </nav>
    );
  };

}

export default Nav;
