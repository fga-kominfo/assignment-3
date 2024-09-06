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
  const maxSumOfSubArray = [[], 0];
  for (let i = 1; i <= arr.length -1; i++) { // kelompok banyak elemen per sub-array yang akan dicek
    // menemukan max-sum sub-array dengan banyak elemen = 1
    if (i === 1) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > maxSumOfSubArray[1]) {
          maxSumOfSubArray[0] = [arr[j]];
          maxSumOfSubArray[1] = arr[j];
        }
      }
    } 
    else {   
      for (let j = 0; j <= arr.length - i; j++) { 
        const sub = arr.slice(j,j+i);
        let sumOfSub = 0;
        for (let k = 0; k < sub.length; k++) {
          sumOfSub += sub[k];
        }
        // cek apakah sumOfSub > maxSumOfSubArray
        if (sumOfSub > maxSumOfSubArray[1]) {
          maxSumOfSubArray[0] = sub;
          maxSumOfSubArray[1] = sumOfSub;
        }
      }
    }
  }
  return maxSumOfSubArray;
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]