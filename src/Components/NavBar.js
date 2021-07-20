import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to="/">Home</Link>{' / '}
        <Link to="/about">About Us</Link>{' / '}
        <Link to="/OurQuality">Our Quality</Link>{' / '}
        <Link to="/contact">Contact US</Link>{' / '}
        <Link to="/Quote">Request a Quote</Link>{' / '}
      </div>
    )
  }
}

export default NavBar