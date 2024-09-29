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

function inorderTraversalRecursive(root) {
  const res = [];

  const inorder = (root) => {
    if (root === null) {
      return;
    }

    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };

  inorder(root);
  return res;
}

function inorderTraversalIterative(root) {
  const res = [];
  const stack = [];
  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    res.push(current.val);
    current = current.right;
  }

  return res;
}
