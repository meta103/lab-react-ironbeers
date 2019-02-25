import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './beersAll.css';

class BeersAll extends Component {
  render() {
    return (
      <div className="beer-container">
        <h2>{this.props.name}</h2>
        <h3>{this.props.tagline}</h3>
        <p>{this.props.contributor}</p>
        <Link to={`/beers/${this.props.id}`}>Details</Link>

      </div>
    )
  }
}

export default BeersAll;