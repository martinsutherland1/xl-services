import React from 'react'
import WineRack from '../images/wine-rack.png';
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
import Logo from '../images/logo.png';

const Gallery = () => {

    return (
        <main>
        <h2 className="gallery-head"><img  className="header-image" src={Logo} alt="2" /> GALLERY <img  className="header-image" src={Logo} alt="2" /></h2>
        <p className="gallery-head">You will find all the details for our items here.</p>
        <div className="image-gallery">
            <div className="image-gallery-child">
            <img className="home-image" src={WineRack} alt="1" />
            <p className="image-dets">£25.00 - Wine Rack Lamp</p>
            </div>


            <div className="image-gallery-child">
            <img className="home-image" src={tap} alt="1" />
            <p className="image-dets">£25.00 - Wine Rack Lamp</p>
            </div>
        </div>

        <div className="image-gallery-2">
            <div className="image-gallery-child-2">
            <img className="home-image" src={Burner} alt="1" />
            <p className="image-dets">£25.00 - Wine Rack Lamp</p>
            </div>


            <div className="image-gallery-child-2">
            <img className="home-image" src={desk} alt="1" />
            <p className="image-dets">£25.00 - Wine Rack Lamp</p>
            </div>
        </div>

        <div className="image-gallery-2">
            <div className="image-gallery-child-2">
            <img className="home-image" src={pipe} alt="1" />
            <p className="image-dets">£25.00 - Wine Rack Lamp</p>
            </div>


            <div className="image-gallery-child-2">
            <img className="home-image" src={WineRack} alt="1" />
            <p className="image-dets">£25.00 - Wine Rack Lamp</p>
            </div>
        </div>

        <div className="image-gallery-2">
            <div className="image-gallery-child-2">
            <img className="home-image" src={copperShade} alt="1" />
            <p className="image-dets">£25.00 - Wine Rack Lamp</p>
            </div>


            <div className="image-gallery-child-2">
            <img className="home-image" src={jar} alt="1" />
            <p className="image-dets">£25.00 - Wine Rack Lamp</p>
            </div>
        </div>

        <div className="image-gallery-2">
            <div className="image-gallery-child-2">
            <img className="home-image" src={Aluminium} alt="1" />
            <p className="image-dets">£25.00 - Wine Rack Lamp</p>
            </div>


            <div className="image-gallery-child-2">
            <img className="home-image" src={BrassLamp} alt="1" />
            <p className="image-dets">£25.00 - Wine Rack Lamp</p>
            </div>
        </div>

        <div className="image-gallery-2">
            <div className="image-gallery-child-2">
            <img className="home-image" src={CandleEffect} alt="1" />
            <p className="image-dets">£25.00 - Wine Rack Lamp</p>
            </div>


            <div className="image-gallery-child-2">
            <img className="home-image" src={deskStretch} alt="1" />
            <p className="image-dets">£25.00 - Wine Rack Lamp</p>
            </div>
        </div>

        <div className="image-gallery-2">
            <div className="image-gallery-child-2">
            <img className="home-image" src={jackD} alt="1" />
            <p className="image-dets">£25.00 - Wine Rack Lamp</p>
            </div>


            <div className="image-gallery-child-2">
            <img className="home-image" src={jackD2} alt="1" />
            <p className="image-dets">£25.00 - Wine Rack Lamp</p>
            </div>
        </div>

        </main>
      
       
    )
  

}

export default Gallery;