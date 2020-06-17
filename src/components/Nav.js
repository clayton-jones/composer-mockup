import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function Nav(props) {
  return (
    <div className='nav-container'>
      <nav>
        <ul>
          <li>News</li>
          <li>Performances</li>
          <li>Free Piano Accompaniment Tracks</li>
          <li>Report Your Performance Here</li>
          <li>Catalog</li>
          <li>CDs</li>
          <li>Press Kit</li>
          <li>Bio</li>
          <li>Awards</li>
          <li>Reviews</li>
          <li>Contact</li>
          <li>Sign Up for Newsletter</li>
        </ul>
      </nav>
    </div>
  )
}