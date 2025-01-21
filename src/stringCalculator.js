// StringCalculator.js
class StringCalculator {
    add(value) {

        if (value.length === 0) return 0
        if (value.length === 1) return parseInt(value)
        if (value.includes('//')) {
            let splitterStart=value.indexOf("[")
            let splitterEnd=value.indexOf("]")
            const splitter = value.slice(splitterStart+1,splitterEnd)
            let trimmedValue=value.slice(splitterEnd+1,value.length)
            let defaultSplitter=(splitterStart>0&&splitterEnd>0)?splitter:value[2]
            return this.calculateSum(defaultSplitter, trimmedValue)
        }
        return this.calculateSum(",", value)
    }

    calculateSum(splitter, value) {
        let splitted = value.split(splitter).map(o => {
            let parsedVal = parseInt(o.trim())
            return o.includes('\n') ? o : parsedVal ? parsedVal : 0
        })

        let total = splitted.reduce((a, b) => {
            const sumParsedValues = (str) =>
                str.split('\n').reduce((first, second) => parseInt(first || 0) + parseInt(second || 0), 0);
            if (typeof a === 'string' && a.includes('\n')) {
                a = sumParsedValues(a);
            }
            if (typeof b === 'string' && b.includes('\n')) {
                b = sumParsedValues(b);
            } else {
                
                b = parseInt(b);
            }
            if (a < 0 || b < 0) {
                throw new Error('Negative numbers not allowed');
            }
            return (a>=1000?0:a) + (b>1000?0:b);
        }, 0);
        return total
    }
}

module.exports = StringCalculator;
