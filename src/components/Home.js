import React from 'react';
import '../css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from "react-router-dom";
import WineRack from '../images/wine-rack.png';
import {Carousel} from '3d-react-carousal';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Logo from '../images/logo.png';
import Aluminium from '../images/aluminium.png';
import BrassLamp from '../images/Brass-Lamp.png';
import Burner from '../images/burner.png';
import CandleEffect from '../images/candle-effect.png';
import copperShade from '../images/copper-shade.png';
import desk from '../images/desk.png';
import deskStretch from '../images/deskStretch.png';
import glass from '../images/glass.png';
import jackD from '../images/jackD.png';
import jackD2 from '../images/jackD2.png';
import jar from '../images/jar.png';
import metal from '../images/metal.png';
import pebble from '../images/pebble.png';
import pipe from '../images/pipe.png';
import slimBrass from '../images/slim-brass.png';
import Stone from '../images/Stone.png';
import tap from '../images/tap.png';
import woodenHand from '../images/wooden-hand.png';
import wooden from '../images/wooden.png';


const Home = () => {

    let slides = [
        <img className="home-image" src={WineRack} alt="1" />,
        <img  className="home-image" src={tap} alt="2" />  ,
        <img  className="home-image" src={BrassLamp} alt="2" />,
        <img  className="home-image" src={Burner} alt="2" />,
        <img  className="home-image" src={CandleEffect} alt="2" />,
        <img  className="home-image" src={copperShade} alt="2" />,
        <img  className="home-image" src={desk} alt="2" />,
        <img  className="home-image" src={deskStretch} alt="2" />,
        <img  className="home-image" src={glass} alt="2" />,
        <img  className="home-image" src={jackD} alt="2" />,
        <img  className="home-image" src={jackD2} alt="2" />,
        <img  className="home-image" src={jar} alt="2" />,
        <img  className="home-image" src={metal} alt="2" />,
        <img  className="home-image" src={pebble} alt="2" />,
        <img  className="home-image" src={pipe} alt="2" />,
        <img  className="home-image" src={slimBrass} alt="2" />,
        <img  className="home-image" src={Stone} alt="2" />,
        <img  className="home-image" src={Aluminium} alt="2" />,
        <img  className="home-image" src={wooden} alt="2" />,
        <img  className="home-image" src={woodenHand} alt="2" />
       
           ];

    return(

<div className="about">
<h2 className="home-header"><img  className="header-image" src={Logo} alt="2" /> WHAT WE DO <img  className="header-image" src={Logo} alt="2" /></h2>
        <p>At XL Bespoke Designs we create unique furniture and lamps from recycled materials, these make our products unconventional and full of character. We encourage our customers to get involved and inspire us with their creative mindsets. Together we can create products with meaning. </p>
        
        <p>For a free quote get in touch or to make a purchase click <a href="/socials">here.</a></p>

        <div className="images">
        <Carousel slides={slides} autoplay={false} interval={4000}/>
        </div>
        </div>

        
        
        
        
        
        
    

        

    )
  
   
   
}

export default Home;
