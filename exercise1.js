function isArithmeticProgression(numbers) {
   let isArithmetic = true
   let diff = numbers[1]-numbers[0]
   for (let i=0; i<numbers.length-1; i++){
      if (numbers[i+1]-numbers[i] !== diff){
         isArithmetic=false
      }
   }
   
   return isArithmetic
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
