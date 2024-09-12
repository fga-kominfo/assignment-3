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
  if (numbers.length <= 2) return true; // Deret dengan kurang dari 2 elemen pasti aritmatika

  const difference = numbers[1] - numbers[0]; // Hitung selisih awal

  // Periksa apakah selisih antara elemen-elemen berikutnya konsisten
  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] - numbers[i - 1] !== difference) {
      return false; // Jika ada selisih yang berbeda, bukan deret aritmatika
    }
  }

  return true; // Semua selisih konsisten
}

// Test Cases
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
console.log(isArithmeticProgression([-3, 0, 3, 6, 9, 12])); // true
