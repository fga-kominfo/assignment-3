function subArray(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  let start = 0,
    end = 0,
    tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    // Periksa apakah menambahkan elemen baru meningkatkan jumlah subarray
    if (arr[i] > maxEndingHere + arr[i]) {
      maxEndingHere = arr[i];
      tempStart = i;
    } else {
      maxEndingHere += arr[i];
    }

    // Jika jumlah saat ini lebih besar dari jumlah terbesar yang ditemukan sejauh ini
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
      start = tempStart;
      end = i;
    }
  }

  // Return subarray dengan sum terbesarnya
  return [arr.slice(start, end + 1), maxSoFar];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // output: [[4, -1, -2, 1, 5], 7]
