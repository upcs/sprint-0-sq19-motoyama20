const sum = require('./functions');

testOne('adds 2 + 5 to equal 7', () => {
  expect(sum(2, 5)).toBe(7);
});

testTwo('subtracts 2 - 5 to equal -3', () => {
  expect(difference(2, 5)).toBe(-3);
});
