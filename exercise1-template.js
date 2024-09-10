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
   // if the length of numbers is less than 2, then it's not arithmetic
   if (numbers.length < 2) {
      return false;
   }

   // find the difference between number (n+1) and number (n)
   const difference = numbers[1] - numbers[0];

   // check each pair to see if they have same difference
   for (let i = 1; i < numbers.length - 1; i++) {
      // if the differences are not the same, then it isn't arithmetic.
      if (numbers[i + 1] - numbers[i] !== difference) {
      // return false if it's not arithmetic
         return false; 
      }
   }
   // return true if each pair has the same difference
   return true; 
}

// Test Cases
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
