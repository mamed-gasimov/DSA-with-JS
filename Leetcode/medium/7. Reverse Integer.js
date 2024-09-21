// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

function reverse(x) {
  let temp = Math.abs(x);
  let reversed = 0;

  while (temp > 0) {
    const lastDigit = temp % 10;
    reversed = reversed * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }

  if (reversed > 2 ** 31) {
    return 0;
  }

  if (x < 0) {
    reversed *= -1;
  }

  return reversed;
}
