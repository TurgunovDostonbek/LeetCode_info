// So'z va bo'shliqlardan iborat s qatori berilgan bo'lsa, satrdagi oxirgi so'zning uzunligini qaytaring.

// So'z - bu maksimal
// pastki qator
//  faqat bo'sh joy bo'lmagan belgilardan iborat.

// 1-misol:

// Kirish: s = "Salom dunyo"
// Chiqish: 5
// Izoh: Oxirgi so'z uzunligi 5 bo'lgan "Dunyo".
// 2-misol:

// Kirish: s = "meni oyga uchir"
// Chiqish: 4
// Izoh: Oxirgi so'z uzunligi 4 bo'lgan "oy".
// 3-misol:

// Kirish: s = "luffy hali ham joyboy"
// Chiqish: 6
// Izoh: Oxirgi so'z uzunligi 6 bo'lgan "joyboy".

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let trimmedStr = s.trim(); // Bo'shliqlarni olib tashlash
  let words = trimmedStr.split(" "); // So'zlarni ajratish
  let lastWord = words[words.length - 1]; // Oxirgi so'zni olish
  return lastWord.length; // Oxirgi
};

let test = lengthOfLastWord("luffy hali ham joyboy");
console.log(test);
