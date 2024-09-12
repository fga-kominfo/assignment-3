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
    // Convert text to lower case to handle case sensitivity
    text = text.toLowerCase();

    // Loop through the string to find 'a' and 'b' positions
    for (let i = 0; i < text.length - 3; i++) {
        // Check if 'a' is three positions before 'b'
        if (text[i] === 'a' && text[i + 4] === 'b') {
            return true;
        }
        // Check if 'b' is three positions before 'a'
        if (text[i] === 'b' && text[i + 4] === 'a') {
            return true;
        }
    }

    // Return false if no matching pattern is found
    return false;
}

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false


