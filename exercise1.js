/**
   Diberikan sebuah function yang menerima satu parameter berupa array yang terdiri dari angka. 
   Function tersebutakan mengembalikan true, jika array dari parameter tersebut merupakan deret aritmatika 
      dan false jika sebaliknya.
    
    Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. 
    Contoh: 
    - 2, 4,6, 8 adalah deret aritmatika dengan pertambahan nilai sebesar 2, 
    - 2, 4, 6, 9 bukanlah deret aritmatika karena ada perbedaan selisih antar angka yang tidak konsisten.

 */

function isArithmeticProgression(numbers) {
   // Get the base difference in the arithmetic
   let arithmeticDiff = numbers[1] - numbers[0];

   for (let i = 1; i < numbers.length - 1; i++) {
      let currentDiff = numbers[i + 1] - numbers[i];
      // See if the current diff is the same as the base diff
      if (currentDiff !== arithmeticDiff) {
         return false;
         //if the base is not the same, return false to say that it's not a arithmethic numbers
      }
   }

   // When there is no difference found in the diff, return true since the whole numbers have the same diff
   return true;
}

// Test Cases
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
