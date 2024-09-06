/**
  Diberikan function yang menerima 2 parameter, yaitu :
    parameter 1: array of integer (unsorted) 
    parameter 2: integer. 
  Function tersebut akan mengembalikan array 2 dimensi.
  Masing-masing dimensi array terdiri 2 angka yang jika dijumlahkan mempunyai nilai yang sama dengan parameter 2.
 */

  function sumArray(arr, int) {
    const result = [];
    let len = 1; // nilai default jika semua value elemen sama

    // cek apakah semua elemen array memiliki value sama
    for (let i = 0; i < 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
          len = arr.length - 1;
          break;
        }
      }
    }
    
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === int) { // cek apakah sum of elemen = int target
          result.push([arr[i],arr[j]]);
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