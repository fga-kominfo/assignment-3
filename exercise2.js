function threeStepsAB(text) {
    for (let i =0; i<text.length-1;i++){
        if (text[i] === 'a') {
            if (i + 4 < text.length && text[i + 4] === 'b') {
                return true;
            }
        }
        if (text[i] === 'b') {
            if (i + 4 < text.length && text[i + 4] === 'a') {
                return true;
            }
        }
    }
    return false
}

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon sand meat")); // false


