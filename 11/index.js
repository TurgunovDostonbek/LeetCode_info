// Unga uzatilgan argumentlar sonini qaytaruvchi arguments Length funksiyasini yozing.

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation:
// argumentsLength({}, null, "3"); // 3

var argumentsLength = function (...args) {
  return args.length;
};

let res = argumentsLength([5]);
console.log(res);
