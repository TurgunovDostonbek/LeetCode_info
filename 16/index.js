// Sizga quyidagi xususiyatlarga ega sonlar qatori berilgan:

// sonlar.uzunlik == 2 * n.
// nums n + 1 noyob elementni o'z ichiga oladi.
// Raqamlarning aynan bir elementi n marta takrorlanadi.
// n marta takrorlangan elementni qaytaring.

// Example 1:

// Input: nums = [1,2,3,3]
// Output: 3
// Example 2:

// Input: nums = [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: nums = [5,1,5,2,5,3,5,4]
// Output: 5

var repeatedNTimes = function (nums) {
  let elementCount = {};

  for (let num of nums) {
    if (elementCount[num]) {
      elementCount[num] += 1;
    } else {
      elementCount[num] = 1;
    }

    // Agar element takrorlash soni n ga yetgan bo'lsa
    if (elementCount[num] === nums.length / 2) {
      return num;
    }
  }
};

let test = repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]);
console.log(test);
