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
    let currentSum = 0;
    let start = 0, end = 0, tempStart = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        // Jika currentSum lebih besar dari maxSum, kita update maxSum dan posisi subarray
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }

        // Jika currentSum menjadi negatif, kita reset currentSum dan mulai subarray baru
        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1; // Mulai subarray baru dari elemen berikutnya
        }
    }

    // Mengembalikan subarray dengan jumlah terbesar serta nilai totalnya
    return [arr.slice(start, end + 1), maxSum];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
