// StringCalculator.js
class StringCalculator {
    add(value) {
        if (value.length === 0) return 0
        if (value.length === 1) return parseInt(value)
        if (value.includes('//')) {
            const splitter=value[2]
            let splitted = value.split(splitter).map(o => {
                let parsedVal=parseInt(o.trim())
                return parsedVal?parsedVal:0
            })
            console.log("Response1", splitted)

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
    
    
    
            return total
        }
        let splitted = value.split(",").filter(o => parseInt(o.trim()))
        console.log("Response1", splitted)
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



        return total
    }
}

module.exports = StringCalculator;
