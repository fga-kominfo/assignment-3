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
  // your code here
  let maxSum = -Infinity;
  let currentSum = 0;
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;

      result.start = result.end || 0;
      result.end = i;
      result.sum = maxSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
      result.end = i + 1;
    }
  }

  let subArrayResult = [];

  for (let i = result.start; i <= result.end; i++) {
    subArrayResult.push(arr[i]);
  }

  return [subArrayResult, result.sum];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
