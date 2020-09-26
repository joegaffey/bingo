'use strict';

let maxNum = 40;

let strings = Array.from({length: 24}, () => Math.floor(Math.random() * maxNum));


document.querySelectorAll('#card tbody td').forEach((space, spaceIndex) => {
  space.addEventListener('click', () => {
    space.classList.toggle('stamped');
  });
  
  // Skip "Safe Space"
  if (spaceIndex == 12) {
    return;
  };
  
  space.innerText = strings.pop();
});