// s satri berilgan bo'lsa, satrdagi segmentlar sonini qaytaring.
// Segment bo'sh joy bo'lmagan belgilarning ulashgan ketma-ketligi sifatida aniqlanadi.

// Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1

var countSegments = function (s) {
  let sum = 0;
  let arry = s.split(" ");
  for (let val of arry) {
    if (val != "") {
      sum++;
    }
  }
  return sum;
};

let res = countSegments("Hello");
console.log(res);
