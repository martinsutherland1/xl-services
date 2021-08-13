import React from 'react';
import '../css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';


const Contact = () => {

    return (
        <div id="contact-head">
            <h2 className="header-contact">CONTACT US</h2>
            
        <div className="container">
            
            <div className="contact-box">
            
               
                <a href="mailto:martinsutherland1@gmail.com">Email <FontAwesomeIcon icon={faAt} className="at"/> </a>
                
                <a href="tel:07577 150951">Call us now <FontAwesomeIcon icon={faPhone} className="phone"/> </a>
                
                </div>
                
                
               
        </div>
        <br></br>
        <div className="socials">
            
            <br></br>
        <p><a id="link" href="https://www.facebook.com/MGElectrical18"><img  id="facebook"src={facebook}/></a></p>
        
        <p><a id="link" href="https://www.instagram.com/mgelectrical1/"><img  id="instagram"src={instagram}/></a></p>
        </div>
        
        
        
 
        </div>
       
    )
  

}

export default Contact;