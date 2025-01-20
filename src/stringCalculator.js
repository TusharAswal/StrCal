// StringCalculator.js
class StringCalculator {
    add(value) {
      if(value.length===0) return 0
      if(value.length===1) return parseInt(value)
      return 1
    }
}

module.exports = StringCalculator;
