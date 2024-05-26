function insertionSort(list) {
  if (!Array.isArray(list)) {
    return null;
  }

  let count = 0;
  for (let i = 1; i < list.length; i++) {
    let current = list[i];
    let j = i - 1;

    while (j >= 0 && list[j] > current) {
      list[j + 1] = list[j];
      j--;
      count++;
    }

    list[j + 1] = current;
  }

  console.log("count " + count);
  return list;
}

const list = [23, 4, 49, 0, -2, 34, 1, 24, -6, 19, 9];
console.log(insertionSort(list));
