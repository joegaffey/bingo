'use strict';

let maxNum = 90;

// Nope - Can contain duplicates
// let nums = Array.from({length: 24}, () => Math.floor(Math.random() * maxNum)); 

// Nope - Can contain 0
// let nums = [...Array(maxNum).keys()].sort(() => { 
//     return Math.random() - 0.5; 
// });

const range = (start, end, step) => {
  return Array.from(Array.from(Array(Math.ceil((end-start)/step)).keys()), x => start+ x*step);
}

let nums = range(1, maxNum, 1).sort(() => { // Can contain 0
    return Math.random() - 0.5; 
});


document.querySelectorAll('#card tbody td').forEach((space, spaceIndex) => {
  space.addEventListener('click', () => {
    space.classList.toggle('stamped');
  });
  
  // Skip "Safe Space"
  // if (spaceIndex == 12) {
  //   return;
  // };
  
  space.innerText = nums.pop();
});