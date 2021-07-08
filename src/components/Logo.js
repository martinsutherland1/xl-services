import logo from '../images/logo.jpg';
import React from 'react';
import '../css/Logo.css';

const Logo = () => {
  

return (
    <div className="header">
    <a href="/">

    <h1><img className="logo" src={logo}/></h1>
    
    </a>

    </div>
    
)

}

export default Logo;