// Sizga qator nomlari qatori va aniq musbat sonlardan iborat massiv balandliklari beriladi. Ikkala massiv ham n uzunlikda.

// Har bir i indeksi uchun ismlar [i] va balandliklar [i] i-shaxsning ismini va balandligini bildiradi.

// Odamlarning balandligi bo'yicha kamayish tartibida ismlarni qaytaring.

// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let sum = names.map((item, index) => [item, heights[index]]);
  let sum1 = sum.sort((a, b) => b[1] - a[1]);
  return sum1.map((item) => item[0]);
};

let test = sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]);
console.log(test);
