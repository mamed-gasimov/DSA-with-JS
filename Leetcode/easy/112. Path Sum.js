// Given the root of a binary tree and an integer targetSum, return true
// if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

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

function hasPathSum(root, targetSum) {
  const dfs = (node, currentSum) => {
    if (node == null) {
      return false;
    }

    currentSum += node.val;
    if (node.left === null && node.right === null) {
      return currentSum === targetSum;
    }

    return dfs(node.left, currentSum) || dfs(node.right, currentSum);
  };

  return dfs(root, 0);
}
