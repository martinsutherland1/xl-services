import React from 'react';
import '../css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from "react-router-dom";
import WineRack from '../images/wine-rack.png';
import {Carousel} from '3d-react-carousal';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Home = () => {

    let slides = [
        <img className="home-image" src={WineRack} alt="1" />,
        <img  className="home-image" src={WineRack} alt="2" />  ,
        <img  className="home-image" src={WineRack} alt="2" />,
        <img  className="home-image" src={WineRack} alt="2" />,
        <img  className="home-image" src={WineRack} alt="2" />,
        <img  className="home-image" src={WineRack} alt="2" />,
        <img  className="home-image" src={WineRack} alt="2" />,
        <img  className="home-image" src={WineRack} alt="2" />,
        <img  className="home-image" src={WineRack} alt="2" />,
        <img  className="home-image" src={WineRack} alt="2" />
           ];

    return(

<div className="about">
<h2 className="home-header">WHAT WE DO</h2>
        <p>At XL Bespoke Designs we create unique furniture and lamps from recycled materials, these make our products unconventional and full of character. We encourage our customers to get involved and inspire us with their creative mindsets. Together we can create products with meaning. </p>
        
        <p>For a free quote get in touch or to make a purchase click <a href="/contact">here.</a></p>

        <div className="images">
        <Carousel slides={slides} autoplay={false} interval={4000}/>
        </div>
        </div>

        
        
        
        
        
        
    

        

    )
  
   
   
}

export default Home;
