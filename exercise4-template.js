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
  let maxSum = -Infinity; // Menyimpan jumlah maksimum
  let currentSum = 0; // Menyimpan jumlah subarray saat ini
  let start = 0; // Menyimpan awal subarray maksimum
  let end = 0; // Menyimpan akhir subarray maksimum
  let tempStart = 0; // Menyimpan awal subarray sementara

  for (let i = 0; i < arr.length; i++) {
    if (currentSum <= 0) {
      // Mulai subarray baru jika currentSum tidak positif
      currentSum = arr[i];
      tempStart = i;
    } else {
      // Tambahkan elemen ke subarray yang ada
      currentSum += arr[i];
    }

    if (currentSum > maxSum) {
      // Update maxSum dan indeks subarray jika ditemukan jumlah lebih besar
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  // Mengembalikan subarray dan jumlah maksimum
  let maxSubArray = arr.slice(start, end + 1);
  return [maxSubArray, maxSum];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // Output: [[4, -1, -2, 1, 5], 7]
