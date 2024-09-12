/**
 * Function untuk memeriksa apakah dalam string terdapat karakter 'a' dan 'b' yang berjarak minimal 3 karakter lain.
//  * @param {string} text - String yang akan diperiksa.
//  * @returns {boolean} - Mengembalikan true jika ditemukan 'a' dan 'b' dengan jarak minimal 3 karakter, false jika tidak.
//  */
function threeStepsAB(text) {
    // Looping melalui setiap karakter dalam string
    for (let i = 0; i < text.length; i++) {
        // Jika menemukan 'a'
        if (text[i] === 'a' && i + 4 < text.length && text[i + 4] === 'b') {
            return true;
        }
        // Jika menemukan 'b'
        if (text[i] === 'b' && i + 4 < text.length && text[i + 4] === 'a') {
            return true;
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