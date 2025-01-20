// StringCalculator.js
class StringCalculator {
    add(value) {
        if (value.length === 0) return 0
        if (value.length === 1) return parseInt(value)
        if (value.length > 1) {
            let splitted = value.split("").filter(o=>!isNaN(o))
            let total = splitted.reduce((a, b) => parseInt(a)+parseInt(b))
            return total
        }
        return 1
    }
}

module.exports = StringCalculator;
