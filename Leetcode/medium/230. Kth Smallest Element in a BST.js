// Given the root of a binary search tree, and an integer k,
// return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

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

function kthSmallestRecursive(root, k) {
  const sorted = [];

  const inOrderDFS = (root) => {
    if (root === null) {
      return;
    }

    inOrderDFS(root.left);
    sorted.push(root.val);
    inOrderDFS(root.right);
  };

  inOrderDFS(root);
  return sorted[k - 1];
}

function kthSmallestIterative(root, k) {
  const sorted = [];
  const stack = [];
  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    sorted.push(current.val);
    current = current.right;
  }

  return sorted[k - 1];
}
