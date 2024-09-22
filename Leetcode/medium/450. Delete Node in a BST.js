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

function minValNode(root) {
  let current = root;
  while (current !== null && current.left !== null) {
    current = current.left;
  }
  return current;
}

function deleteNode(root, val) {
  if (root === null) {
    return null;
  }

  if (val > root.val) {
    root.right = deleteNode(root.right, val);
  } else if (val < root.val) {
    root.left = deleteNode(root.left, val);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      const minNode = minValNode(root.right);
      root.val = minNode.val;
      root.right = deleteNode(root.right, minNode.val);
    }
  }

  return root;
}
