import { factorial } from './factorial';

test('multiplies factorial 5 to equal 120', () => {
  expect(factorial(5)).toBe(120);
});
//  --------------------------
export const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
