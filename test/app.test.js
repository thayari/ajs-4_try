import checkNumber from '../src/app';

test('string to number', () => {
  expect(checkNumber('42')).toBe(42);
});

test('string to number error', () => {
  expect(checkNumber('qwerty')).toBe(0);
});
