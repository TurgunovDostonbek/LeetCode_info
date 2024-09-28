// s qatori berilgan boʻlsa, uning pastki qatorini olib, uning bir nechta nusxalarini birga qoʻshish orqali uni qurish mumkinligini tekshiring.

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length === 1) return false; // Agar satr uzunligi 1 bo'lsa, to'g'ridan-to'g'ri false qaytaramiz
  let doubled = (s + s).slice(1, -1); // Satrni ikki marta takrorlaymiz va boshlanish va tugash qismlarini olib tashlaymiz
  return doubled.includes(s); // Yangi hosil bo'lgan satrda asl satr bor-yo'qligini tekshiramiz
};

let test = repeatedSubstringPattern("aba");
console.log(test);
