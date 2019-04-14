// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


const fib = (function() {
  let memo = {};

  return function f(n) {
    let value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1){
        value = n;
      } else {
        value = f(n - 1) + f(n - 2);
      }
      memo[n] = value;
    }

    return value;
  }
})();


module.exports = fib;
