// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container,
// such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

function getMaxArea(heights) {
  if (!Array.isArray(heights)) {
    return null;
  }

  let first = 0;
  let last = heights.length - 1;
  let maxArea = 0;

  let minHeight = heights[0];
  let widthDiff = 0;

  while (first < last) {
    minHeight = Math.min(heights[first], heights[last]);
    widthDiff = last - first;

    if (maxArea < minHeight * widthDiff) {
      maxArea = minHeight * widthDiff;
    }

    if (heights[first] <= heights[last]) {
      first++;
    } else {
      last--;
    }
  }

  return maxArea;
}

const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(getMaxArea(heights));
