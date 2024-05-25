//// Savolar      ////

/// Agar butun son berilgan bo'lsa, a bo'lsax , qaytaringtruex palindrom , va falseboshqa .



// Kirish: x = 121
//  Chiqish: true
//  Izoh: 121 chapdan o'ngga va o'ngdan chapga 121 deb o'qiladi.
// 2-misol:

// Kirish: x = -121
//  Chiqish: noto'g'ri
//  Izoh: Chapdan o'ngga, -121 deb o'qiydi. O'ngdan chapga 121- bo'ladi. Shuning uchun u palindrom emas.
// 3-misol:

// Kirish: x = 10
//  Chiqish: noto'g'ri
//  Izoh: 01 ni o'ngdan chapga o'qiydi. Shuning uchun u palindrom emas.

/////// Javoblar 


var isPalindrome = function(x) {
    let a = x.toString().split('').reverse().join("")
    let b = Number(a)

    if(x === b ){
        return true
    }else{
        return false
    }
};

console.log(isPalindrome(121));