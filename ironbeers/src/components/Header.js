import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to='/home' className="link">HOME</Link>
      </div>
    )
  }
}

export default Header;