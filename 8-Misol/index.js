// arr massivi va fn funksiyasi berilgan bo‘lsa, sortedArr tartiblangan massivni qaytaring. Siz fn faqat raqamlarni qaytaradi deb taxmin qilishingiz mumkin va bu raqamlar sortedArr ning tartiblash tartibini aniqlaydi. sortedArray fn chiqishi bo'yicha o'sish tartibida saralanishi kerak.

// Siz fn hech qachon berilgan massiv uchun raqamlarni takrorlamaydi deb taxmin qilishingiz mumkin.

// 1-misol:

// Kirish: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Chiqish: [1, 2, 3, 4, 5]
// Izoh: fn shunchaki unga berilgan raqamni qaytaradi, shuning uchun massiv o'sish tartibida tartiblanadi.
// 2-misol:

// Kirish: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
// Chiqish: [{"x": -1}, {"x": 0}, {"x": 1}]
// Izoh: fn "x" tugmasi qiymatini qaytaradi. Shunday qilib, massiv shu qiymat asosida tartiblanadi.
// 3-misol:

// Kirish:
// (arr = [
//   [3, 4],
//   [5, 2],
//   [10, 1],
// ]),
//   (fn = (x) => x[1]);
// Chiqish: [[10, 1], [5, 2], [3, 4]]
// Izoh: arr indeks=1 bo'yicha raqam bo'yicha o'sish tartibida tartiblangan.

var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

const sort = sortBy(
  (arr = [
    [3, 4],
    [5, 2],
    [10, 1],
  ]),
  (fn = (x) => x[1])
);
console.log(sort);
