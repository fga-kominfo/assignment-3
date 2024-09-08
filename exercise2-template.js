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
    // Loop untuk mencari posisi 'a' dan 'b'
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a') {
            // Jika menemukan 'a', periksa apakah ada 'b' dalam jarak minimal 3 karakter
            if (text[i + 4] === 'b') {
                return true;
            }
        } else if (text[i] === 'b') {
            // Jika menemukan 'b', periksa apakah ada 'a' dalam jarak minimal 3 karakter
            if (text[i + 4] === 'a') {
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


