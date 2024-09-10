/**
  Diberikan function yang menerima 2 parameter, yaitu :
    parameter 1: array of integer (unsorted) 
    parameter 2: integer. 
  Function tersebut akan mengembalikan array 2 dimensi.
  Masing-masing dimensi array terdiri 2 angka yang jika dijumlahkan mempunyai nilai yang sama dengan parameter 2.
 */

  function sumArray(arr, int) {
    let result = [];
    
    // loop through each element in the array 'arr'
    for (let i = 0; i < arr.length; i++) {
      // loop through the elements after the current element 'i'
        for (let j = i + 1; j < arr.length; j++) {
          // check if the sum of the current pair (arr[i] and arr[j]) equals 'int'
            if (arr[i] + arr[j] === int) {
              // if the condition is met, add the pair to the 'result' array
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


