/**
  Diberikan function yang menerima 2 parameter, yaitu :
    parameter 1: array of integer (unsorted) 
    parameter 2: integer. 
  Function tersebut akan mengembalikan array 2 dimensi.
  Masing-masing dimensi array terdiri 2 angka yang jika dijumlahkan mempunyai nilai yang sama dengan parameter 2.
 */

  function sumArray(arr, int) {
    const result = [];
    const seen = []; 

    for (let i = 0; i < arr.length; i++) {
        const complement = int - arr[i]; 
        let isSeen = false;
        for (let j = 0; j < seen.length; j++) {
            if (seen[j] === complement) {
                isSeen = true;
                break;
            }
        }
        if (isSeen) {
            const pair = [complement, arr[i]];
            result[result.length] = pair;
        }
        seen[seen.length] = arr[i];
    }

    return result;
}

// Test Cases
console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]
console.log(sumArray([1, -1, 2, -2, 3, -3], 0)); // [[1, -1], [2, -2], [3, -3]]
console.log(sumArray([1, 1, 1, 1], 2)); // [[1, 1], [1, 1], [1, 1]]
console.log(sumArray([1, 2, 3, 4, 5], 10)); // []


