/**
Diberikan sebuah function yang menerima satu parameter berupa string. 
Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang berjarak sama dengan 3 karakter lain (termasuk spasi). 
Jika tidak ditemukan sama sekali, kembalikan nilai false.

Contoh: 
barbarian akan mengembalikan nilai true
you are boring akan mengembalikan nilai true
bacon sand meat akan mengembalikan nilai false

 */

function threeStepsAB(text) {
  const toLower = text.toLowerCase();
  // Loop from the start of the character inside until the 4th before last as the condition won't match an undefined variable
  for (let i = 0; i < toLower.length - 4; i++) {
    // Check for is the current a or be and the four next (three space) is b or a.
    if (toLower[i] === "a" && toLower[i + 4] === "b") return true;
    if (toLower[i] === "b" && toLower[i + 4] === "a") return true;
  }
  // When none is found, return false.
  return false;
}

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false
// Self added test case
console.log(threeStepsAB("aaaab")); // true (first a and final b have 3 space)
console.log(threeStepsAB("bbbba")); // true (first b and final a have 3 space)
console.log(threeStepsAB("ababb")); // true (first a and final b have 3 space)
