const math = require('../src/math.js')

test('Should add two numbers', () => {
  const result = math.add(5, 7)

  // if (result !== 12)
  //   throw new Error(`Expected: 12, Got ${result}`);

  expect(result).toBe(12);
})
