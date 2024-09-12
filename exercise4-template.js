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
  let maxSoFar = -Infinity;
  let maxArr = 0;
  let start = 0;
  let end = 0;
  let tmp = 0;

  for (let i = 0; i < arr.length; i++) {
    maxArr += arr[i];

    if (maxSoFar < maxArr) {
      maxSoFar = maxArr;
      start = tmp;
      end = i;
    }

    if (maxArr < 0) {
      maxArr = 0;
      tmp = i + 1;
    }
  }

  let maxSubArray = arr.slice(start, end + 1);

  return [maxSubArray, maxSoFar];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
