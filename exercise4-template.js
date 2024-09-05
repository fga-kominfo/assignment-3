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
  let maxSoFar = arr[0]; // Nilai maksimum yang ditemukan sejauh ini
  let maxEndingHere = arr[0]; // Nilai maksimum yang berakhir di posisi saat ini

  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    // Tentukan apakah akan memulai subarray baru atau melanjutkan subarray yang ada
    if (arr[i] > maxEndingHere + arr[i]) {
      maxEndingHere = arr[i];
      tempStart = i;
    } else {
      maxEndingHere += arr[i];
    }

    // Perbarui nilai maksimum yang ditemukan sejauh ini
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
      start = tempStart;
      end = i;
    }
  }

  // Mengambil subarray yang memberikan jumlah terbesar
  const subArray = arr.slice(start, end + 1);

  return [subArray, maxSoFar];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
