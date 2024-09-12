/**
   Diberikan sebuah function yang menerima satu parameter berupa array yang terdiri dari angka. 
   Function tersebutakan mengembalikan true, jika array dari parameter tersebut merupakan deret aritmatika 
      dan false jika sebaliknya.
    
    Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. 
    Contoh: 
    - 2, 4,6, 8 adalah deret aritmatika dengan pertambahan nilai sebesar 2, 
    - 2, 4, 6, 9 bukanlah deret aritmatika karena ada perbedaan selisih antar angka yang tidak konsisten.

 */


function isArithmeticProgression(arr) {
    // jika kurang dari 2 elemen maka false
    if (arr.length < 2) {
        return false;
    }

    // ambil selisih
    const selisih = arr[1] - arr[0];

    // Periksa apakah selisih, jika beda maka false
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== selisih) {
            return false;
        }
    }

    return true;
}

// Test Cases
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
