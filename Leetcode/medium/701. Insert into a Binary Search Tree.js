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

class TreeNode {
  constructor(val) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Recursive solution
function insertIntoBSTRecursive(root, val) {
  if (root === null) {
    return new TreeNode(val);
  }

  if (root.val > val) {
    root.left = insertIntoBSTRecursive(root.left, val);
  } else if (root.val < val) {
    root.right = insertIntoBSTRecursive(root.right, val);
  }

  return root;
}

// Iterative solution
function insertIntoBST(root, val) {
  const newNode = new TreeNode(val);
  if (root === null) {
    return newNode;
  }

  let current = root;

  while (current !== null) {
    if (current.val > val) {
      if (current.left === null) {
        current.left = newNode;
        break;
      }
      current = current.left;
    } else if (current.val < val) {
      if (current.right === null) {
        current.right = newNode;
        break;
      }
      current = current.right;
    }
  }

  return root;
}
