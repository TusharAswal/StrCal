// StringCalculator.js
class StringCalculator {
    add(value) {
        if (value.length === 0) return 0
        if (value.length === 1) return parseInt(value)
        if (value.length > 1) {
            let splitted = value.split(",").filter(o=>parseInt(o))
            let total = splitted.reduce((a, b) => {
                const sumParsedValues = (str) =>
                    str.split('\n').reduce((first, second) => parseInt(first) + parseInt(second), 0);
                if (typeof a === 'string' && a.includes('\n')) {
                    a = sumParsedValues(a);
                }
                if (typeof b === 'string' && b.includes('\n')) {
                    b = sumParsedValues(b);
                } else {
                    b = parseInt(b);
                }
                return a + b;
            }, 0); 
            
            console.log(total);
            
            console.log("Response1",total)

            return total
        }
        return 1
    }
}

module.exports = StringCalculator;
