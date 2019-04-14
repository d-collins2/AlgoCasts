// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
function steps(n, row = 0, stair = '') {
  if(n === row){
    return;
  }

  if(n === stair.length){
    console.log(stair);
    steps(n, row + 1);
    return;
  }
y
  const add = stair.length <= row ? '#' : ' ';

  steps(n, row, stair + add)
}

module.exports = steps;

// function steps(n) {
//   for(let i = 0; i < n; i++){
//     result = ''
//     j = 0
//     while(j < n){
//       if(j <= i){
//         result += '#'
//       } else {
//         result += ' '
//       }
//       j++
//     }
//
//     console.log(result)
//   }
// }
//
// module.exports = steps;
