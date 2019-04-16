// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let current = [root, 's']
  let results = [0]
  while(current.length !== 1){
    let temp = current.shift()

    if(temp === 's'){
      results.push(0)
      current.push(temp)
    } else {
      current.push(...temp.children)
      results[results.length - 1]++
    }
  }

  return results
}

module.exports = levelWidth;
