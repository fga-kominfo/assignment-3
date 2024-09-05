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
    let maxSum = arr[0]; // Ubah ini
    let currentSum = 0;
    let start = 0;
    let end = 0;
    let tempStart = 0;

    //looping array
    for (let i = 0; i < arr.length; i++) {
        //jika currentSum + arr[i] lebih dari arr[i] maka tambahkan currentSum dengan arr[i]
        if (currentSum + arr[i] > arr[i]) {
            currentSum += arr[i];
        } else {
            //jika tidak maka currentSum diisi dengan arr[i] dan tempStart diisi dengan i
            currentSum = arr[i];
            tempStart = i;
        }

        if (currentSum > maxSum) {
            //jika currentSum lebih dari maxSum maka maxSum diisi dengan currentSum dan start diisi dengan tempStart dan end diisi dengan i
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }
    //return array dari start sampai end dan maxSum
    return [arr.slice(start, end + 1), maxSum];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
