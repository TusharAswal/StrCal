const StringCalculator = require('./StringCalculator');
const calculator=new StringCalculator()

// console.log("Response1==>", calculator.add("")); // 0
// console.log("Response2==>", calculator.add("5")); // 5
// console.log("Response3==>", calculator.add("20,20")); // 40
// console.log("Response4==>", calculator.add("1,2,3,4,5")); // 15
// console.log("Response5==>", calculator.add("1\n2,3")); // 6
console.log("Response6==>", calculator.add("//;\n1;2;3")); // 6
// console.log("Response7==>", calculator.add("1001,2")); // 2 (ignores numbers > 1000)
// // console.log("Response8==>", calculator.add("-1,2,3")); // Throws error for negative numbers: "Negatives not allowed: -1"
// console.log("Response9==>", calculator.add("")); // 0
// console.log("Response10==>", calculator.add("//[***]\n1***2***3")); // 6
