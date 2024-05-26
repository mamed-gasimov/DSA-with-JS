class QuickSort {
  static quickSort(list, left = 0, right = list.length - 1) {
    if (list.length < 2) return list;

    if (left < right) {
      let pivotIndex = this.pivot(list, left, right);
      this.quickSort(list, pivotIndex + 1, right);
      this.quickSort(list, left, pivotIndex - 1);
    }

    return list;
  }

  static pivot(list, pivotIndex, endIndex) {
    let swapIndex = pivotIndex;

    for (let i = pivotIndex + 1; i <= endIndex; i++) {
      if (list[i] < list[pivotIndex]) {
        swapIndex++;
        this.swap(list, swapIndex, i);
      }
    }

    this.swap(list, pivotIndex, swapIndex);
    return swapIndex;
  }

  static swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
  }
}

const list = [23, 4, 49, 0, -2, 34, 1, 24, -6, 19, 9];
console.log(QuickSort.quickSort(list));
