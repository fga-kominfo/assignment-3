/**
Diberikan sebuah function yang menerima satu parameter berupa string. 
Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang berjarak minimal 3 karakter lain (termasuk spasi). 
Jika tidak ditemukan sama sekali, kembalikan nilai false.

Contoh: 
barbarian akan mengembalikan nilai true
you are boring akan mengembalikan nilai true
bacon sand meat akan mengembalikan nilai false

 */ 

function threeStepsAB(word) {
    // your code here
    let aIndex = -1;
    let bIndex = -1;
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a') {
            aIndex = i;
        } else if (word[i] === 'b') {
            bIndex = i;
        }
        // Check if 'a' is 3 characters before 'b' or 'b' is 3 characters before 'a'
        if ((aIndex !== -1 && bIndex !== -1) && 
            ((aIndex - bIndex === 4) || (bIndex - aIndex === 4))) {
            return true;
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


