import checkNumber from '../src/app';

test('string to number', () => {
  expect(checkNumber('42')).toBe(42);
});

test('string to number error - letters', () => {
  expect(checkNumber('qwerty')).toBe(0);
});

test('string to number error - fractional', () => {
  expect(checkNumber('123.456')).toBe(0);
});

test('string to number error - binary', () => {
  expect(checkNumber('0b0111')).toBe(0);
});

test('string to number error - hex', () => {
  expect(checkNumber('0x12')).toBe(0);
});

test('string to number error - oct', () => {
  expect(checkNumber('0755')).toBe(0);
});

test('string to number error - letters and numbers', () => {
  expect(checkNumber('qwerty123')).toBe(0);
});
