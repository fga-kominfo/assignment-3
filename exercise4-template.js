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
    let maxSum = arr[0];
    let currentSum = arr[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (currentSum + arr[i] > arr[i]) {
        currentSum += arr[i];
      } else {
        currentSum = arr[i];
        tempStart = i;
      }
  
      // cek apakah total saat ini lebih besar dari masSum
      if (currentSum > maxSum) {
        maxSum = currentSum;
        start = tempStart;
        end = i;
      }
    }
    
    // kembalikan dalam bentuk array
    return [arr.slice(start, end + 1), maxSum];
  }
  
// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
