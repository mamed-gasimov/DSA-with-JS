function binarySearch(list, item) {
  if (!Array.isArray(list)) {
    return null;
  }

  let start = 0;
  let end = list.length - 1;
  let middle = Math.floor((start + end) / 2);
  let guess = list[middle];

  while (start <= end) {
    if (guess === item) {
      return middle;
    } else if (guess > item) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
    guess = list[middle];
  }

  return null;
}

function binarySearchRecursive(list, item, start, end) {
  if (!Array.isArray(list)) {
    return null;
  }

  if (!list.length) {
    return -1;
  }

  let middle = Math.floor((start + end) / 2);
  if (item === list[middle]) {
    return middle;
  } else if (item > list[middle]) {
    return binarySearchRecursive(list, item, middle + 1, end);
  } else {
    return binarySearchRecursive(list, item, 0, middle - 1);
  }
}

const list = [1, 2, 6, 9, 12, 14, 15, 17, 23, 49];
const item = 15;
console.log(binarySearch(list, item));
console.log(binarySearchRecursive(list, item, 0, list.length - 1));
