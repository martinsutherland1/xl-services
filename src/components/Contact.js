import React from 'react';
import '../css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import Logo from '../images/logo.png';

const Contact = () => {

    return (
        <div id="contact-head">
        <h2 className="header-contact"><img  className="header-image" src={Logo} alt="2" /> CONTACT US <img  className="header-image" src={Logo} alt="2" /></h2>
        <div className="contact-box">
        <p><a href="mailto:martinsutherland1@gmail.com">Email <FontAwesomeIcon icon={faAt} className="at"/> </a></p>
        <p><a href="tel:07577 150951">Call us now <FontAwesomeIcon icon={faPhone} className="phone"/> </a></p>
        </div>
        <br></br>
        <div className="socials">
        <br></br>
        <p><a id="link" href="https://www.facebook.com/XL-Bespoke-Designs-103660018199708"><img  id="facebook"src={facebook}/></a></p>
        <p><a id="link" href="https://www.instagram.com/xl.bespokedesigns/"><img  id="instagram"src={instagram}/></a></p>
        </div>
        </div>
       
    )
  

}

export default Contact;