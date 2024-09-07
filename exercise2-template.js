/**
Diberikan sebuah function yang menerima satu parameter berupa string. 
Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang berjarak minimal 3 karakter lain (termasuk spasi). 
Jika tidak ditemukan sama sekali, kembalikan nilai false.

Contoh: 
barbarian akan mengembalikan nilai true
you are boring akan mengembalikan nilai true
bacon sand meat akan mengembalikan nilai false

 */

function threeStepsAB(text) {
  // your code here

  // membuat loop untuk mengecek setiap karakter
  for (let i = 0; i < text.length; i++) {
    // jika karakter a ditemukan dan karakter b ditemukan pada jarak 3 karakter
    if (text[i] === "a" && text[i + 4] === "b") {
      // maka kembalikan nilai true
      return true;
    }
    // jika karakter b ditemukan dan karakter a ditemukan pada jarak 3 karakter
    if (text[i] === "b" && text[i + 4] === "a") {
      // maka kembalikan nilai true
      return true;
    }
  }
  // jika tidak ditemukan sama sekali, kembalikan nilai false
  return false;
}

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false
