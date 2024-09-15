/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var _guess = function(num) {}
 */

function guessNumber(n) {
  let low = 1;
  let high = n;
  let middle;
  let guessed;

  while (low <= high) {
    middle = Math.floor((low + high) / 2);
    guessed = _guess(middle);
    if (guessed === -1) {
      high = middle - 1;
    } else if (guessed === 1) {
      low = middle + 1;
    } else {
      return middle;
    }
  }
}
