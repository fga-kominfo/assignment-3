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
    let maxSum = -Infinity; 
    let resultSubarray = []; 

    
    for (let start = 0; start < arr.length; start++) {
        let currentSum = 0; 
        for (let end = start; end < arr.length; end++) {
            currentSum += arr[end]; 

            
            if (currentSum > maxSum) {
                maxSum = currentSum;
                resultSubarray = arr.slice(start, end + 1); 
            }
        }
    }

    return [resultSubarray, maxSum];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // Output: [ [ 4, -1, -2, 1, 5 ], 7 ]
