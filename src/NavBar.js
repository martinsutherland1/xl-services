import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './css/NavBar.css';
import { Link, useHistory } from "react-router-dom";
import Logo from './components/Logo';

const NavBar = (props) => {
  return (
    <header id="navBar">
      

      
        <li className="navLink">
          <Link to="/"><FontAwesomeIcon icon={faHome} className="plug"/> Home</Link>
        </li>
        <li className="navLink">
          <Link to="/gallery"><FontAwesomeIcon icon={faImages} className="plug"/> Gallery</Link>
        </li>
        <li className="navLink">
          <Link to="/contact"><FontAwesomeIcon icon={faAddressBook} className="plug"/> Contact</Link>
        </li>
        <li className="navLink">
          <Link to="/reviews" ><FontAwesomeIcon icon={faStar} className="plug"/> Reviews</Link>
        </li>
        <div className="header-top">
            <h1><Logo/></h1>
        </div>

      
    </header>
  )
}

export default NavBar;