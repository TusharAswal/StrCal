
const StringCalculator = require('../src/stringCalculator');
describe('StringCalculator', () => {
    let calculator;
    beforeEach(() => {
      calculator = new StringCalculator();
    });
  
    it('should return 0 for an empty string', () => {
      expect(calculator.add('')).toBe(0);
    });

    it('should return the number itself for a single number', () => {
        expect(calculator.add("5")).toBe(5);
    });

    it('should return the sum for two numbers separated by a comma', () => {
        expect(calculator.add("15,15")).toBe(30);
    });

    test('should return the sum when numbers are separated by newlines', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });

    test('should handle custom delimiters', () => {
        expect(calculator.add("//;\n1;2")).toBe(3);
    });

  });
  