/**
 * Function untuk mencari subarray yang memiliki jumlah terbesar dari array yang diberikan.
//  * @param {number[]} arr - Array of integer.
//  * @returns {Array} - Array yang berisi subarray dengan jumlah terbesar dan jumlahnya.
 */
function subArray(arr) {
    let maxSum = arr[0]; // Inisialisasi dengan elemen pertama
    let currentSum = arr[0]; // Menyimpan jumlah sementara
    let start = 0; // Awal subarray maksimum
    let end = 0;   // Akhir subarray maksimum
    let tempStart = 0; // Menyimpan awal sementara untuk subarray saat ini

    for (let i = 1; i < arr.length; i++) {
        // Memperbarui currentSum dan tempStart jika nilai arr[i] lebih besar dari currentSum + arr[i]
        if (arr[i] > currentSum + arr[i]) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum += arr[i];
        }

        // Memperbarui maxSum, start, dan end jika currentSum lebih besar dari maxSum
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    return [arr.slice(start, end + 1), maxSum];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // output: [ [ 4, -1, -2, 1, 5 ], 7 ]