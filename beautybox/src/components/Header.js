import React, { Component }from 'react';
import './Header.css'
// import { Link } from 'react-router-dom';
import search from "../assets/images/search.svg"
import './Header.css'
import beautybox from '../assets/images/beautybox.svg'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  render() {
    if (this.props.location.pathname === '/') {
      return null
    } 
  return (
      <header id="main-header">
          <div className="header-content">
            <img className='content-logo' src={beautybox}></img>  
        </div>
        <div className="right-content">
          <a href>Hello, admin!</a>
          <img src={search} alt="search"></img>
        </div>
      </header>
  );
  }
}

export default withRouter(Header)
