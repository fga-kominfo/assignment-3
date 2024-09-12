function sumArray(arr, target) {
  let result = [];

  // Loop pertama untuk mengambil setiap elemen
  for (let i = 0; i < arr.length; i++) {
    // Loop kedua untuk membandingkan elemen dengan elemen lainnya
    for (let j = i + 1; j < arr.length; j++) {
      // Jika jumlah dua elemen sama dengan target, tambahkan ke hasil
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
}

// Test Cases
console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]
console.log(sumArray([1, -1, 2, -2, 3, -3], 0)); // [[1, -1], [2, -2], [3, -3]]
console.log(sumArray([1, 1, 1, 1], 2)); // [[1, 1], [1, 1], [1, 1]]
console.log(sumArray([1, 2, 3, 4, 5], 10)); // []
