import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default function Nav(props) {
  let menuItems = [
    {display: 'News', url: '/'},
    {display: 'Performances', url: '/performances'},
    {display: 'Free Piano Accompaniment Tracks', url: '/tracks'},
    {display: 'Report Your Performance Here', url: '/your-performance'},
    {display: 'Catalog', url: '/catalog'},
    {display: 'CDs', url: '/cds'},
    {display: 'Press Kit', url: '/press'},
    {display: 'Bio', url: '/bio'},
    {display: 'Awards', url: '/awards'},
    {display: 'Reviews', url: '/reviews'},
    {display: 'Contact', url: '/contact'},
    {display: 'Sign Up for Newsletter', url: '/newsletter'}
  ];

  let links = [];

  menuItems.forEach((menuItems, i) => {
    links.push(<Link key={i} to={`${menuItems.url}`}><li key={i} className={props.menuVisible ? 'fade' : null} onClick={onClick}>{menuItems.display}</li></Link>);
  })

  function onClick() {
    props.updateState('menu', !props.menuVisible);
  }

  return (
    <div id='nav-container' className={props.menuVisible ? 'show' : 'hide'}>
      <nav>
        <ul>
          {links}
        </ul>
      </nav>
    </div>
  )
}