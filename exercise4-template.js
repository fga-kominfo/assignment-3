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
    let maxSementara = arr[0]; 
    let maxEnd = arr[0]; 
    let start = 0, end = 0, s = 0; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxEnd + arr[i]) {
            maxEnd = arr[i];
            s = i; 
        } else {
            maxEnd += arr[i];
        }

        if (maxEnd > maxSementara) {
            maxSementara = maxEnd;
            start = s; 
            end = i;   
        }
    }

    return [arr.slice(start, end + 1), maxSementara];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
