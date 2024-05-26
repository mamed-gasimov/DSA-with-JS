function bubbleSort(list) {
  if (!Array.isArray(list)) {
    return null;
  }

  let temp;
  let count = 0;
  for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (list[j] > list[j + 1]) {
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
      count++;
    }
  }

  console.log("count " + count);
  return list;
}

const list = [23, 4, 49, 0, -2, 34, 1, 24, -6, 19, 9];
console.log(bubbleSort(list));
