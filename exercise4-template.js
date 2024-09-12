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
    let maxSum = -Infinity; // Inisialisasi nilai maksimum dengan nilai terkecil
    let result = []; // Inisialisasi array untuk menyimpan subarray dengan jumlah terbesar

    // Perulangan pertama untuk memilih elemen awal dari subarray
    for (let i = 0; i < arr.length; i++) {
        let sum = 0; // Inisialisasi jumlah saat ini

        // Perulangan kedua untuk memilih elemen akhir dari subarray
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]; // Tambahkan elemen saat ini ke jumlah saat ini

            // Jika jumlah saat ini lebih besar dari jumlah maksimum yang ditemukan
            if (sum > maxSum) {
                maxSum = sum; // Perbarui jumlah maksimum
                result = arr.slice(i, j + 1); // Simpan subarray dengan jumlah terbesar
            }
        }
    }
    // Kembalikan subarray dengan jumlah terbesar dan nilai jumlah tersebut
    return [result, maxSum]; 
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
