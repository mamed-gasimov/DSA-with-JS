// Given the root of a binary tree, return the level order traversal of its nodes' values.
// (i.e., from left to right, level by level).

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

function levelOrder(root) {
  const queue = [];
  const result = [];
  if (root !== null) {
    queue.push(root);
  }
  let level = 0;

  while (queue.length) {
    const levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      const current = queue.shift();
      if (result[level]) {
        result[level] = [...result[level], current.val];
      } else {
        result[level] = [current.val];
      }

      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }

    level++;
  }

  return result;
}
