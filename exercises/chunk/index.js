// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];
  // let current = [];
  //
  // for(let i in array){
  //   current.push(array[i])
  //   if(current.length === size){
  //     chunked.push(current)
  //     current = []
  //   }
  // }
  //
  // current.length > 0 ? chunked.push(current) : null
  // return chunked
  i = 0
  j = size
  while(i < array.length){
    chunked.push(array.slice(i, j))
    i += size
    j += size
  }
  return chunked
}

module.exports = chunk;
