/**
  Diberikan function yang menerima 2 parameter, yaitu :
    parameter 1: array of integer (unsorted) 
    parameter 2: integer. 
  Function tersebut akan mengembalikan array 2 dimensi.
  Masing-masing dimensi array terdiri 2 angka yang jika dijumlahkan mempunyai nilai yang sama dengan parameter 2.
 */

function sumArray(arr, int) {
    // your code here
    const hasil = [];

  // Iterasi setiap elemen dalam array
  for (let i = 0; i < arr.length; i++) {
    // Iterasi elemen sisanya mulai dari indeks berikutnya
    for (let j = i + 1; j < arr.length; j++) {
      // Periksa apakah jumlah elemen saat ini sama dengan target jumlah
      if (arr[i] + arr[j] === int) {
        // Jika ditemukan, tambahkan pasangan ke array hasil
        hasil.push([arr[i], arr[j]]);
      }
    }
  }

  return hasil;
}


// Test Cases
console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]
console.log(sumArray([1, -1, 2, -2, 3, -3], 0)); // [[1, -1], [2, -2], [3, -3]]
console.log(sumArray([1, 1, 1, 1], 2)); // [[1, 1], [1, 1], [1, 1]]
console.log(sumArray([1, 2, 3, 4, 5], 10)); // []


