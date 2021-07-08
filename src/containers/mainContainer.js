import React, {useEffect, userState, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Home from '../components/Home'
import NavBar from '../NavBar';

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
          {/* <Route path="/reviews" component={ReviewContainer} />
          <Route path="/contact" component={contact} />
          <Route path="/gallery" component={gallery} /> */}
         
        </Switch>
        
       
  
  
        </Fragment>
        </Router>
    )
}

export default MainContainer;