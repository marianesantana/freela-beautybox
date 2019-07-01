import React from 'react';
import './Header.css'
// import { Link } from 'react-router-dom';
import logout from "../assets/images/arrow.svg"
import './Header.css'

export default function Header() {
  return (
      <header id="main-header">
          <div className="header-content">
            <h1 className='content-logo'>beautybox</h1>  
        </div>
        <div className="right-content">
          <a>Hello, admin!</a>
          <img src={logout} alt="loupe"></img>
        </div>
      </header>
     
  );
}
