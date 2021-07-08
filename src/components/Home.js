import React from 'react';
import '../css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from "react-router-dom";


const Home = () => {

    return(
<div className="home-page">
<div className="about">
<h2>WHAT WE DO</h2>
        <p>At XL Bespoke Designs we create unique furniture and maps from recycled materials, these make our products unconventional and full of character. We encourage our customers to get involved and inspire us with their creative mindsets. Together we can create products with meaning. </p>
        
        <p>For a free quote get in touch <a href="/contact">here.</a></p>
        </div>
        

        

                

       

    </div>
        
        
        
        
        
        
    

        

    )
  
   
   
}

export default Home;
