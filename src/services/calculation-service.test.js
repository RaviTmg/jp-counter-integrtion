const calculationService = require('./calculation-service');

describe('multiplyBy', () => {
  test('multiplies 10 to 5 equal 50', () => {
    expect(calculationService.multiplyBy(10, 5)).toBe(50);
  });

  test('parses string values', () => {
    expect(calculationService.multiplyBy('11', 5)).toBe(55);
  });

  test('gives undefined for unparseable values', () => {
    expect(calculationService.multiplyBy('aa', 5)).toBe(undefined);
  });

  test('gives undefined for undefined values', () => {
    expect(calculationService.multiplyBy(undefined, 5)).toBe(undefined);
    expect(calculationService.multiplyBy(null, 5)).toBe(undefined);
    expect(calculationService.multiplyBy('', 5)).toBe(undefined);
  });
});
