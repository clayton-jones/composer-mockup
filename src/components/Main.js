import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


import Nav from './Nav';

export default function Main(props) {
  return (
    <main>
      <Router>
        <Nav menuVisible={props.menuVisible} updateState={props.updateState}/>
        <Route path='/' exact>
          <h1>Home</h1>
        </Route>
        <Route path='/bio'>
          <h1>Bio</h1>
        </Route>
        <Route path='/performances'>
          <h1>Performances</h1>
        </Route>
        <Route path='/tracks'>
          <h1>Free Piano Accompaniment Tracks</h1>
        </Route>
        <Route path='/your-performance'>
          <h1>Report Your Performance Here</h1>
        </Route>
        <Route path='/catalog'>
          <h1>Catalog</h1>
        </Route>
        <Route path='/cds'>
          <h1>CDs Displayed Here</h1>
        </Route>
        <Route path='/press'>
          <h1>Press Kit</h1>
        </Route>
        <Route path='/awards'>
          <h1>Awards</h1>
        </Route>
        <Route path='/reviews'>
          <h1>Reviews</h1>
        </Route>
        <Route path='/contact'>
          <h1>Contact Info</h1>
        </Route>
        <Route path='/newsletter'>
          <h1>Sign Up for Newsletter!</h1>
        </Route>
      </Router>
    </main>
  )
}