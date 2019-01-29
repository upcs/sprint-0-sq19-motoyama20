const sum = require('./functions');

test('adds 2 + 5 to equal 8', () => {
  expect(sum(2, 5)).toBe(8);
});

test('multiply sum of 2 + 5 to equal 14', () => {
  expect((sum(2, 5))*2).toBe(14);
});
