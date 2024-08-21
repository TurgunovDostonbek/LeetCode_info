// Ob'ekt yoki massiv berilgan bo'lsa, agar u bo'sh bo'lsa, uni qaytaring.
// Bo'sh ob'ektda kalit-qiymat juftlari mavjud emas.
// Bo'sh massiv hech qanday elementni o'z ichiga olmaydi.
// Ob'ekt yoki massiv JSON.parse chiqishi deb taxmin qilishingiz mumkin.

// 1-misol:

// Kirish: obj = {"x": 5, "y": 42}
// Chiqish: noto'g'ri
// Izoh: Ob'ektda 2 ta kalit-qiymat juftligi mavjud, shuning uchun u bo'sh emas.
// 2-misol:

// Kirish:
obj = {};
// Chiqish: rost
// Izoh: Ob'ektda kalit-qiymat juftligi yo'q, shuning uchun u bo'sh.
// 3-misol:

// Kirish:
obj = [null, false, 0];
// Chiqish: noto'g'ri
// Izoh: Massivda 3 ta element bor, shuning uchun u bo'sh emas.

var isEmpty = function (obj) {
  return Object.keys(obj).length == 0;
};

const test = isEmpty(obj);
console.log(test);
