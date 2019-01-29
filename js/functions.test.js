const sum = require('./functions');

test('adds 2 + 5 to equal 7', () => {
  expect(sum(2, 5)).toBe(7);
});

test('adds 2 + 5 to equal 7', () => {
  expect(difference(2, 5)).toBe(-3);
});
