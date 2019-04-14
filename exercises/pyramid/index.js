// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, col = '') {
  const midpoint = Math.floor((2 * n - 1) / 2 )
  if(n === row){
    return;
  }

  if((2 * n - 1) === col.length){
    console.log(col)
    pyramid(n, row + 1)
    return;
  }

  if((midpoint - row) <= col.length && (midpoint + row) >= col.length ){
    col += '#'
  } else {
    col += ' '
  }

  pyramid(n, row, col)
}

module.exports = pyramid;
