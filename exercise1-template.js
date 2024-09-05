/**
  Diberikan sebuah function yang menerima satu parameter berupa array yang terdiri dari angka. 
  Function tersebutakan mengembalikan true, jika array dari parameter tersebut merupakan deret aritmatika dan false jika sebaliknya.
    
  Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. 
  Contoh: 
  - 2, 4,6, 8 adalah deret aritmatika dengan pertambahan nilai sebesar 2, 
  - 2, 4, 6, 9 bukanlah deret aritmatika karena ada perbedaan selisih antar angka yang tidak konsisten.
*/

function isArithmeticProgression(numbers) {
  if (numbers.length <= 1) {
    return true; // Jika array hanya memiliki satu elemen atau kosong, itu bisa dianggap sebagai deret aritmatika.
  }

  // Hitung selisih awal antara dua angka pertama
  const difference = numbers[1] - numbers[0];

  // Periksa setiap pasangan elemen dalam array
  for (let i = 1; i < numbers.length - 1; i++) {
    if (numbers[i + 1] - numbers[i] !== difference) {
      return false; // Jika selisih tidak konsisten, maka bukan deret aritmatika
    }
  }

  return true; // Jika semua selisih konsisten, maka array adalah deret aritmatika
}

// Test Cases
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
