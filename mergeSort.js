function merge(inputArray, leftHalf, rightHalf) {
  if (
    !Array.isArray(inputArray) ||
    !Array.isArray(leftHalf) ||
    !Array.isArray(rightHalf)
  ) {
    return [];
  }

  let i = 0,
    j = 0,
    k = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] <= rightHalf[j]) {
      inputArray[k] = leftHalf[i];
      i++;
    } else {
      inputArray[k] = rightHalf[j];
      j++;
    }
    k++;
  }

  while (i < leftHalf.length) {
    inputArray[k] = leftHalf[i];
    i++;
    k++;
  }

  while (j < rightHalf.length) {
    inputArray[k] = rightHalf[j];
    j++;
    k++;
  }

  return inputArray;
}

function mergeSort(array) {
  if (!Array.isArray(array)) return;

  if (array.length < 2) return;

  let middleIndex = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIndex);
  const rightHalf = array.slice(middleIndex);

  mergeSort(leftHalf);
  mergeSort(rightHalf);

  return merge(array, leftHalf, rightHalf);
}

const list = [23, 4, 49, 0, -2, 34, 1, 24, -6, 19, 9];
mergeSort(list);
console.log(list);
