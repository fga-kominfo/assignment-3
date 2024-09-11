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
  const arrSub = makeSubArray(arr);
  let maxValue = 0;
  let maxSubArr = [];
  for (let sub of arrSub) {
    let sum = 0;
    for (let i = 0; i < sub.length; i++) {
      sum += sub[i];
    }
    if (sum > maxValue) {
      maxValue = sum;
      maxSubArr = sub;
    }
  }

  const result = [];
  result.push(maxSubArr);
  result.push(maxValue);
  return result;
}

function makeSubArray(arr) {
  const arrSub = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (i === 0) {
      let counter = 0;
      while (counter < arr.length - 1 - 1) {
        let addArr = [];
        let addArrIdx = 0;

        while (addArrIdx <= counter + 1) {
          addArr[addArrIdx] = arr[addArrIdx];
          addArrIdx++;
        }
        arrSub.push(addArr);
        counter++;
      }
    } else {
      let counter = 0;
      while (counter < arr.length - i - 1) {
        let addArr = [];
        let addArrIdx = 0;
        let startCopy = i;
        while (addArrIdx <= counter + 1) {
          addArr[addArrIdx] = arr[startCopy];
          addArrIdx++;
          startCopy++;
        }
        arrSub.push(addArr);
        counter++;
      }
    }
  }
  return arrSub;
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
