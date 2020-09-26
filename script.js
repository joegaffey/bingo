'use strict';

let maxNum = 70;

const range = (start, end, step) => {
  return Array.from(Array.from(Array(Math.ceil((end-start)/step)).keys()), x => start+ x*step);
}

let nums = range(1, maxNum, 1).sort(() => {
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