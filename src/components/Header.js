import React from 'react';

export default function Headers(props) {

  function onClick() {
    

    props.updateState('menu', !props.menuVisible);

  }

  return (
    <header>
      <div id='hamburger' onClick={onClick}>
        <div className='burger-line'></div>
        <div className='burger-line'></div>
        <div className='burger-line'></div>
      </div>

    <div id='title'>
      <h1>Greg Bartholomew</h1>
      <h2>Composer</h2>
    </div>
    </header>
  )
}