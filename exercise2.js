function threeStepsAB(text) {
  // Loop untuk memeriksa setiap karakter di string
  for (let i = 0; i < text.length - 4; i++) {
    // Jika menemukan 'a' dan di 3 karakter setelahnya ada 'b', atau sebaliknya
    if (
      (text[i] === "a" && text[i + 4] === "b") ||
      (text[i] === "b" && text[i + 4] === "a")
    ) {
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
