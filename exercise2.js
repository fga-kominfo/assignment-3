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
    // Looping melalui setiap karakter dalam string
    for (let i = 0; i < text.length; i++) {
        // Jika menemukan 'a'
        if (text[i] === 'a') {
            // Cek apakah ada 'b' yang berjarak 4 karakter dari 'a' (minimal 3 karakter di antaranya)
            if (text[i + 4] === 'b') {
                return true;
            }
        }
        // Jika menemukan 'b'
        if (text[i] === 'b') {
            // Cek apakah ada 'a' yang berjarak 4 karakter dari 'b'
            if (text[i + 4] === 'a') {
                return true;
            }
        }
    }
    return false; // Jika tidak ditemukan pasangan 'a' dan 'b' yang berjarak 3 karakter, kembalikan false
}

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false


