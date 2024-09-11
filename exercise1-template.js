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
   // your code here
   
   // Calculate the difference between the first two elements
   const difference = numbers[1] - numbers[0];

   // If the array has less than 2 elements, it can't be a progression
   if (numbers.length < 2) {
      return false;
   }

   // Check if the difference is consistent between all pairs of adjacent elements
   for (let i = 2; i < numbers.length; i++) {
      if (numbers[i] - numbers[i - 1] !== difference) {
      return false;
      }
   }

   // If we haven't returned false by now, then the array is a progression
   return true;
    
}

// Test Cases
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
