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
    // Ubah teks menjadi huruf kecil untuk memastikan perbandingan tidak sensitif huruf besar-kecil
    text = text.toLowerCase();

    // Loop melalui setiap karakter dalam string
    for (let i = 0; i < text.length; i++) {
        // Jika karakter saat ini adalah 'a', periksa apakah ada 'b' dalam jarak 3 karakter setelahnya
        if (text[i] === 'a' && i + 4 < text.length && text[i + 4] === 'b') {
            return true;
        }
        // Jika karakter saat ini adalah 'b', periksa apakah ada 'a' dalam jarak 3 karakter setelahnya
        if (text[i] === 'b' && i + 4 < text.length && text[i + 4] === 'a') {
            return true;
        }
    }

    // Jika tidak ditemukan pasangan 'a' dan 'b' yang berjarak 3 karakter, kembalikan false
    return false;
}

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false


