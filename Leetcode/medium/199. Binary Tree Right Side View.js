// Given the root of a binary tree, imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root) {
  const queue = [];
  const result = [];
  if (root !== null) {
    queue.push(root);
  }

  while (queue.length) {
    const levelLength = queue.length;

    // Traverse the current level
    for (let i = 0; i < levelLength; i++) {
      const current = queue.shift();

      if (i === levelLength - 1) {
        result.push(current.val);
      }

      // Add left first, then right
      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }

  return result;
}
