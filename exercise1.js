function isArithmeticProgression(numbers) {
  if (numbers.length < 2) {
    return false; // Deret aritmatika harus memiliki minimal 2 angka
  }

  // Hitung selisih pertama antara dua angka pertama
  const difference = numbers[1] - numbers[0];

  // Periksa setiap selisih antara angka yang berurutan
  for (let i = 1; i < numbers.length - 1; i++) {
    if (numbers[i + 1] - numbers[i] !== difference) {
      return false; // Jika selisih tidak konsisten, bukan deret aritmatika
    }
  }

  return true; // Jika semua selisih konsisten, maka merupakan deret aritmatika
}
// my code

// Test Casses
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
