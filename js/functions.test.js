const sum = require('./sum');

test('adds 2 + 5 to equal 7', () => {
  expect(sum(2, 5)).toBe(7);
});

test('multiply sum of 2 + 5 to equal 14', () => {
  expect((sum(2, 5))*2).toBe(14);
});
