import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import BeersAll from './components/BeersAll';
import BeerDetails from './components/BeerDetails';
import apiInstance from './lib/Api';
import RandomBeer from './components/RandomBeer';

class App extends Component {
  state = {
    beersArray: []
  }
  componentDidMount() {
    apiInstance.getAllBeers()
      .then((beers) => {
        this.setState({
          beersArray: beers
        })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  render() {
    return (
      <Switch>
        <Route exact path='/home' >
          <div><Link to='/beers'>
            <h1>All Beers</h1>
          </Link>
            <Link to='/random-beer'>
              <h1>Random beer</h1>
            </Link>
            <Link to='/new-beer'>
              <h1>New Beer</h1>
            </Link>
          </div>
        </Route>

        <Route exact path='/beers' >
          <div>
            <Header />
            <div className="beerContainer">
              {this.state.beersArray.map((beer) => {
                return <BeersAll key={beer._id} id={beer._id} image={beer.image_url} name={beer.name} tagline={beer.tagline} contributor={beer.contributed_by} />
              })}
            </div>
          </div>
        </Route>

        <Route exact path='/random-beer' render={(props) => {
          return (
            <div>
              <Header />
              <RandomBeer {...props} />
            </div>
          )
        }} >

        </Route>

        <Route exact path='/new-beer' >
          <Header />

        </Route>
        <Route path='/beers/:beerId' render={(props) => {
          return (
            <div>
              <Header />
              <BeerDetails {...props} />
            </div>
          )
        }}>

        </Route>
      </Switch>
    );
  }
}

export default App;
