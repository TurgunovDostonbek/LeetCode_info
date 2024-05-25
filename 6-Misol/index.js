////// Savolar //// 

// Massiv berilgan nums. Biz massivning ishlaydigan yig'indisini sifatida belgilaymiz  runningSum[i] = sum(nums[0]…nums[i]). ning amaldagi summasini qaytaring nums.


// 1-misol:

// Kirish: nums = [1,2,3,4]
//  Chiqish: [1,3,6,10]
//  Izoh: Ishlash summasi quyidagicha olinadi: [1, 1+2, 1+2+3, 1+2+ 3+4].


// 2-misol:

// Kirish: nums = [1,1,1,1,1]
//  Chiqish: [1,2,3,4,5]
//  Izoh: Ishlash summasi quyidagicha olinadi: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].


// 3-misol:

// Kirish: raqamlar = [3,1,2,10,1]
//  Chiqish: [3,4,6,16,17]


///// Javoblar /// 

var runningSum = function(nums) {
    nums.reduce((sum,item, index, arr) => arr[index] += sum)
      return nums
  };

  console.log(runningSum([1,2,3,4]));