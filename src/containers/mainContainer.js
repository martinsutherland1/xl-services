import React, {useEffect, userState, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Home from '../components/Home'
import NavBar from '../NavBar';
import Contact from '../components/Contact';
import Ideas from '../components/Ideas';
import Gallery from '../components/Gallery';

const MainContainer = () => {

    const TITLE = 'XL Bespoke Designs'
  

    return (
        <Router>
        <Fragment>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/socials" component={Contact} />
          <Route path="/ideas" component={Ideas} />
          <Route path="/gallery" component={Gallery} />
         
        </Switch>
        
       
  
  
        </Fragment>
        </Router>
    )
}

export default MainContainer;