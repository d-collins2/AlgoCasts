// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - i; j++){
      if(arr[j] > arr[j + 1]){
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++){
    let min = i

    for(let j = i + 1; j < arr.length; j++){
      if(arr[min] > arr[j]){
        min = j
      }
    }

    if(min !== i){
      temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
      // swap(arra, min, i)
    }
  }

  return arr
}

function mergeSort(arr) {
  if(arr.length === 1){
    return arr
  }

  const midpoint = Math.floor(arr.length / 2)
  const left = arr.slice(0 , midpoint)
  const right = arr.slice(midpoint)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let results = []

  while(left.length && right.length){
    if (left[0] < right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
