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
    let maxSum = 0;
    let currentSum = 0;
    let startIndex = 0;
    let endIndex = 0;
    
    for (let i = 0; i < arr.length; i++) {
      currentSum += arr[i];
      
      if (currentSum > maxSum) {
        maxSum = currentSum;
        endIndex = i;
      }
      
      if (currentSum < 0) {
        currentSum = 0;
        startIndex = i + 1;
      }
    }
    
    return [arr.slice(startIndex, endIndex + 1), maxSum];
  }
  
  let input = [-2, -3, 4, -1, -2, 1, 5, -3];
  console.log(subArray(input)); // output: [ [ 4, -1, -2, 1, 5 ], 7 ]
  