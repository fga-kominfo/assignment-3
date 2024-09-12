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

// function subArray(arr) {
//   let result = [];
//   let maxSum = -1/0;
//   for (let i = 0; i < arr.length; i++) {
//     let index = [];
//     let sum = arr[i];
//     index.push(arr[i]);
//     for (let j = i + 1; j < arr.length; j++) {
//       index.push(arr[j]);
//       sum += arr[j];
//       if (sum > maxSum) {
//         result.length = 0;
//         maxSum = sum;
//         sum = maxSum;
//         result.push([...index], maxSum);
//       }
//     }
//     sum = 0;
//     index.length = 0;
//   }
//   return result;
// }

function subArray(arr) {
  let result = [];
  let maxSum = -1 / 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > maxSum) {
        maxSum = sum;
        result = [arr.slice(i, j + 1), maxSum];
      }
    }
  }
  return result;
}

let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
// let input = [-2, -3, -4, -1, -2, -1, -5, -3];
// let input = [1, -2, 3];
