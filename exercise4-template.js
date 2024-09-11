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
    let maxSekarang = arr[0];
    let maxTotal = arr[0];
    let awalIndex = 0;
    let akhirIndex = 0;
    let awalSementara = 0;

    for (let i = 1; i < arr.length; i++) {
        if (maxSekarang + arr[i] > arr[i]) {
            maxSekarang = maxSekarang + arr[i];
        } else {
            maxSekarang = arr[i];
            awalSementara = i;
        }

        if (maxSekarang > maxTotal) {
            maxTotal = maxSekarang;
            awalIndex = awalSementara;
            akhirIndex = i;
        }
    }

    let hasilSubarray = [];
    for (let i = awalIndex; i <= akhirIndex; i++) {
        hasilSubarray[hasilSubarray.length] = arr[i];
    }

    return [hasilSubarray, maxTotal];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
