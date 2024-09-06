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
  for (let i = 0; i < text.length - 4; i++) {
    if (text[i] == 'a' || text[i] == 'b') {
      let j = i + 4; // jarak karakter
      // banyak jarak karakter >= 3:
      // while (j < text.length) {
      //   if ((text[j] !== text[i]) && (text[j] === 'a' || text[j] === 'b')) {
      //     return true;
      //   }
      //   j++;
      // }
      // banyak jarak karakter === 3:
      if ((text[j] !== text[i]) && (text[j] === 'a' || text[j] === 'b')) {
        return true;
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