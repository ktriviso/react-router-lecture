import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Quote extends Component {
  render() {
    return (
      <div className="my-quote">
        <Link to={"/singlequote/" + this.props.quote.id}>
            <h3>{this.props.quote.content}</h3>
            <span className="author">{this.props.quote.author}</span>
            <span className="genre">{this.props.quote.genre_type}</span>
        </Link>
      </div>
    );
  };
}

export default Quote;
