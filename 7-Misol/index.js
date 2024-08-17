// Berilgan.. ?
// Satrni teskari aylantiruvchi funksiya yozing. Kirish qatori s belgilar massivi sifatida beriladi.
// Buni kiritish massivini O (1) qo'shimcha xotira bilan joyida o'zgartirish orqali qilishingiz kerak.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
let s = ["H", "a", "n", "n", "a", "h"];
var reverseString = function (s) {
  return s.reverse();
};
const revers = reverseString(s);
console.log(revers);
