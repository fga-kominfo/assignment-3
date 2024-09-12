/**
 * Function untuk mencari pasangan angka dalam array yang jumlahnya sama dengan nilai integer yang diberikan.
//  * @param {number[]} arr - Array of integer (unsorted).
//  * @param {number} int - Integer yang merupakan target jumlah.
//  * @returns {number[][]} - Array 2 dimensi yang berisi pasangan angka yang jumlahnya sama dengan integer yang diberikan.
//  */
function sumArray(arr, int) {
    let result = [];
    
    // Membuat objek untuk melacak angka yang telah dilihat
    let seenNumbers = {};

    // Loop melalui setiap angka dalam array
    for (let num of arr) {
        // Menghitung angka yang diperlukan untuk mencapai target
        let complement = int - num;

        // Jika angka yang diperlukan sudah dilihat sebelumnya
        if (seenNumbers[complement]) {
            // Tambahkan pasangan ke hasil
            result.push([num, complement]);
        }

        // Tandai angka saat ini sebagai sudah dilihat
        seenNumbers[num] = true;
    }

    return result;
}

// Test Cases
console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]
console.log(sumArray([1, -1, 2, -2, 3, -3], 0)); // [[1, -1], [2, -2], [3, -3]]
console.log(sumArray([1, 1, 1, 1], 2)); // [[1, 1], [1, 1], [1, 1]]
console.log(sumArray([1, 2, 3, 4, 5], 10)); // []