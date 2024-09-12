/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */

function subArray(arr) {
  let currentMaxSumNum = -Infinity;
  let currentMaxArr = [];
  for (let i = 0; i < arr.length; i++) {
    // Set variables for the current sum and array that will be compared
    let tempSum = arr[i];
    let tempArr = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      // Add the current array with the next array.
      tempSum += arr[j];
      // Push the number into the array list for the final answer.
      tempArr.push(arr[j]);
      // Check if the current sum is better than the already known sum.
      if (tempSum > currentMaxSumNum) {
        // Update both of the variable.
        currentMaxSumNum = tempSum;
        currentMaxArr = Array.from(tempArr);
      }
    }
  }
  return [currentMaxArr, currentMaxSumNum];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
