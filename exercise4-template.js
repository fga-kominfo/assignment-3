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

// Answer1
function subArray(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (maxEndingHere < 0) {
            maxEndingHere = arr[i];
            tempStart = i;
        } else {
            maxEndingHere += arr[i];
        }

        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = tempStart;
            end = i;
        }
    }

    let resultArray = arr.slice(start, end + 1);
    return [resultArray, maxSoFar];
}

// Answer2
// function subArray(arr) {
//     if (arr.length === 0) return [[], 0];

//     let maxSum = arr[0];
//     let currentSum = arr[0];
//     let start = 0;
//     let end = 0;
//     let s = 0; 

//     for (let i = 1; i < arr.length; i++) {
//         if (currentSum < 0) {
//             currentSum = arr[i];
//             s = i; 
//         } else {
//             currentSum += arr[i];
//         }

//         if (currentSum > maxSum) {
//             maxSum = currentSum;
//             start = s;
//             end = i;
//         }
//     }
//     return [arr.slice(start, end + 1), maxSum];
// }

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
