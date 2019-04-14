// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // const sorted = str.split('').sort()
  // let count = 0
  // let char;
  let max = str[0];
  let maxCount = 1
  //
  // for(let i in sorted){
  //   i++
  //   ch = sorted[i]
  //   if(maxCount < count ){
  //     maxCount = count
  //     max = char
  //   }
  //
  //   if(char === ch){
  //     count ++
  //   } else {
  //     char = ch
  //     count = 0
  //   }
  // }
  // return max

  charMap ={}
  for(let char in str){
    ch = str[char]
    charMap[ch] = charMap[ch] + 1 || 1
    if(maxCount < charMap[ch]){
      max = ch
    }
  }
  console.log(charMap)
  return max
}

module.exports = maxChar;
