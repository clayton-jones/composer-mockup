'use strict';

let hamburger = document.getElementById('hamburger');
let navContainer = document.getElementById('nav-container');
hamburger.addEventListener('click', () => {
  console.log('click');
  navContainer.classList.toggle('show');
});
