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
    let max_so_far = arr[0];        // Menyimpan jumlah terbesar sejauh ini
    let max_ending_here = arr[0];   // Menyimpan jumlah subarray sampai titik saat ini
    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        // Jika memulai subarray baru lebih baik, kita ubah titik awal
        if (arr[i] > max_ending_here + arr[i]) {
            max_ending_here = arr[i];
            tempStart = i;  // Mulai subarray baru
        } else {
            max_ending_here += arr[i];
        }
        
        // Update max_so_far jika kita menemukan subarray yang lebih besar
        if (max_ending_here > max_so_far) {
            max_so_far = max_ending_here;
            start = tempStart;
            end = i;
        }
    }
    
    // Mengembalikan subarray dengan jumlah terbesar dan jumlahnya
    return [arr.slice(start, end + 1), max_so_far];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input));  // Output: [[4, -1, -2, 1, 5], 7]

