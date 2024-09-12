/**
  Diberikan function yang menerima 2 parameter, yaitu :
    parameter 1: array of integer (unsorted) 
    parameter 2: integer. 
  Function tersebut akan mengembalikan array 2 dimensi.
  Masing-masing dimensi array terdiri 2 angka yang jika dijumlahkan mempunyai nilai yang sama dengan parameter 2.
 */

function sumArray(arr, int) {
  // your code here
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    // mengapa k = i + i? karena yang kita inginkan adalah jika i (perulangan utama)
    // sampai pada titik tertentu / element tertentu, kita ingin mencari 1 angka di depan perulangan utama
    for (let j = i + 1; j < arr.length; j++) {
      // cek apakah angka memiliki hasil === int
      if (arr[i] + arr[j] === int) {
        // maka buat sebuah array dari angka arr[i] dengan arr[j]
        let number = [arr[i], arr[j]];
        // masukkan ke dalam array res
        res.push(number);
      }
    }
  }
  return res;
}

// Test Cases
console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]
console.log(sumArray([1, -1, 2, -2, 3, -3], 0)); // [[1, -1], [2, -2], [3, -3]]
console.log(sumArray([1, 1, 1, 1], 2)); // [[1, 1], [1, 1], [1, 1]]
console.log(sumArray([1, 2, 3, 4, 5], 10)); // []
