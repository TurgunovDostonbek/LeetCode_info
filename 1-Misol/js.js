//  Oraliqda aniq raqamlarni numso'z ichiga olgan massiv berilgan bo'lsa , qatorda etishmayotgan yagona raqamni qaytaring .n[0, n]..

// 1-misol:

// Kirish: nums = [3,0,1]
//  Chiqish: 2
//  Izoh: n = 3 chunki 3 ta raqam mavjud, shuning uchun barcha raqamlar [0,3] oralig'ida. 2 diapazondagi etishmayotgan raqam, chunki u raqamlarda ko'rinmaydi.

// 3-misol:

// Kirish: nums = [9,6,4,2,3,5,7,0,1]
//  Chiqish: 8
//  Izoh: n = 9 chunki 9 ta raqam mavjud, shuning uchun barcha raqamlar [0,9] oralig'ida. 8 diapazondagi etishmayotgan raqam, chunki u raqamlarda ko'rinmaydi.



////////////////////////////////////   ////////////////////////////
             //   Javbolar //

        var missingNumber = function(nums) {
           const n = nums.length;   ///  birinchi nums uzunligi topiladi 
           const Tsum = (n * (n + 1)) / 2;  /// (3 * (3 + 1 ) / 2) = 6
           const actualSum = nums.reduce((acc, num) => acc + num, 0);  /// hammasini yig"amiz 4 
           console.log(Tsum - actualSum); //  6 - 4 = 2 
        };

        missingNumber([3,0,1])
        missingNumber([9,6,4,2,3,5,7,0,1])

