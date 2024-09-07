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
    var lowerText = text.toLowerCase();
    
    for (var i = 0; i < lowerText.length; i++) {
      if (lowerText[i] === 'a') {
        for (var j = i + 1; j < lowerText.length; j++) {
          if (lowerText[j] === 'b') {
            if (j - i >= 3) {
              return true;
            }
          }
        }
      }
      
      if (lowerText[i] === 'b') {
        for (var j = i + 1; j < lowerText.length; j++) {
          if (lowerText[j] === 'a') {
            if (j - i >= 3) {
              return true;
            }
          }
        }
      }
    }
    
    return false;
}
// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false


