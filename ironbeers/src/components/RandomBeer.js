import React, { Component } from 'react';
import apiInstance from '../lib/Api';

class RandomBeer extends Component {
  state = {
    beer: {}
  }

  render() {
    return (
      <div>
        <img src={this.state.beer.image_url} alt="" />
        <h1>{this.state.beer.name}</h1>
        <h2>{this.state.beer.tagline}</h2>
        <h3>{this.state.beer.first_brewed}</h3>
        <h4>{this.state.beer.attenuation_level}</h4>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    )
  }

  componentDidMount = () => {
    apiInstance.randomBeer()
      .then((data) => {
        console.log(data[0])
        this.setState({
          beer: data[0]
        })
      })
  }
}

export default RandomBeer;