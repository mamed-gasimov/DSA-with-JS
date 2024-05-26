function selectionSort(list) {
  if (!Array.isArray(list)) {
    return null;
  }

  let count = 0;
  for (let i = 0; i < list.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
      count++;
    }

    if (i != minIndex) {
      let temp = list[i];
      list[i] = list[minIndex];
      list[minIndex] = temp;
    }
  }

  console.log("count " + count);
  return list;
}

const list = [23, 4, 49, 0, -2, 34, 1, 24, -6, 19, 9];
console.log(selectionSort(list));
