import React, { Component } from 'react';
import './NavBar.css';



class NavBar extends Component {
  render() {
    return (
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/OurQuality">Quality</a></li>
        <li><a href="/About">About Us</a></li>
        <li><a href="/Quote">Quote</a></li>
      </ul>
    )
  }
}

export default NavBar