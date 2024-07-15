function isPalindrome(x) {
  let temp = x;
  let reversed = 0;

  while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = parseInt(temp / 10);
  }

  return reversed === x;
}

console.log(isPalindrome(12321)); // true
console.log(isPalindrome(90)); // false
