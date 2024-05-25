//// Savolar      ////

// Butun son berilgan bo'lsa , qator qatorini ( 1-indeksli )n qaytaring, bu erda :answer

// answer[i] == "FizzBuzz"agar va ga ibo'linadigan bo'lsa .35
// answer[i] == "Fizz"iga bo'linadigan bo'lsa 3.
// answer[i] == "Buzz"iga bo'linadigan bo'lsa 5.
// answer[i] == i(satr sifatida) agar yuqoridagi shartlarning hech biri to'g'ri bo'lmasa

// 1-misol:

// Kirish: n = 3
//  Chiqish: ["1","2","Fizz"]
// 2-misol:

// Kirish: n = 5
//  Chiqish: ["1","2","Fizz","4","Buzz"]
// 3-misol:

// Kirish: n = 15
//  Chiqish: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11 ","Fizz","13","14","FizzBuzz"]

/////// Javoblar /////

var fizzBuzz = function (n) {
    let a = [];

    for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        a.push("FizzBuzz");
    } else if (i % 3 === 0) {
        a.push("Fizz");
    } else if (i % 5 == 0) {
        a.push("Buzz");
    } else {
        a.push("" + i);
    }
    }

    return a;
};


console.log(fizzBuzz(3));
