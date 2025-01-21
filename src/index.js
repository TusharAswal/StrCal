const StringCalculator = require('./StringCalculator');
const calculator=new StringCalculator()
console.log("Response8==>", calculator.add("-1,2,3")); // Throws error for negative numbers: "Negatives not allowed: -1"
