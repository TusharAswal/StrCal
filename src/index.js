const StringCalculator = require('./StringCalculator');
const calculator=new StringCalculator()
console.log("Response==>",calculator.add('20,10'))
console.log("Response7==>", calculator.add("1001,2")); // 2 (ignores numbers > 1000)
