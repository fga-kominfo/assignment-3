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
  // Inisialisasi maxSum dengan elemen pertama array sebagai jumlah maksimum awal
  let maxSum = arr[0];

  // Loop pertama: untuk setiap elemen di array, mulai dari elemen pertama hingga terakhir
  for (let i = 0; i < arr.length; i++) {
    // Inisialisasi sum menjadi 0 untuk memulai perhitungan jumlah subarray baru
    let sum = 0;

    // Loop kedua: untuk setiap elemen mulai dari indeks i hingga akhir array
    for (let j = i; j < arr.length; j++) {
      // Tambahkan elemen arr[j] ke dalam sum
      sum += arr[j];

      // Jika sum lebih besar dari maxSum saat ini, perbarui maxSum dan simpan subarray yang baru ditemukan
      if (sum > maxSum) {
        maxSum = sum; // Perbarui nilai maxSum

        // Simpan subarray yang baru dengan menggunakan slice dari indeks i ke j (termasuk j)
        var result = arr.slice(i, j + 1);
      }
    }
  }

  // Kembalikan subarray dengan jumlah maksimum dan nilai maxSum
  return [result, maxSum];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // Output: [ [ 4, -1, -2, 1, 5 ], 7 ]
