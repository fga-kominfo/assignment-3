/**
  Diberikan function yang menerima 2 parameter, yaitu :
    parameter 1: array of integer (unsorted) 
    parameter 2: integer. 
  Function tersebut akan mengembalikan array 2 dimensi.
  Masing-masing dimensi array terdiri 2 angka yang jika dijumlahkan mempunyai nilai yang sama dengan parameter 2.
 */

function sumArray(arr, int) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Check is the current index and the other index next sum is equal to the needed number.
      if (arr[i] + arr[j] === int) {
        // If true, add the combination into the array of result.
        result.push([arr[i], arr[j]]);
        // Remove the current index and move on to the next.
        arr[i] = '';
        // Why? because, if not then for the fourth example should be
        // [ [ 1, 1 ], [ 1, 1 ], [ 1, 1 ], [ 1, 1 ], [ 1, 1 ], [ 1, 1 ] ] and not [[1, 1], [1, 1], [1, 1]]
        // If it's the former then for an example reference console.log(sumArray([2, 1, 4, 3, 3], 5))
        // should be [ [ 2, 3 ], [ 2, 3 ], [ 1, 4 ] ] not just [ [ 2, 3 ], [ 1, 4 ] ].
        // If both should be deleted as in cannot use the same variable, 
        // then for the fourth example should just be [[1,1], [1,1]].
        continue; // To minimize the amount of loop.
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


