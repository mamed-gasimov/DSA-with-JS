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

function recursiveSearchBST(root, target) {
  if (root == null) {
    return null;
  }

  if (root.val > target) {
    return recursiveSearchBST(root.left, target);
  } else if (root.val < target) {
    return recursiveSearchBST(root.right, target);
  }

  return root;
}

function searchBST(root, target) {
  let current = root;

  while (current != null) {
    if (current.val > target) {
      current = current.left;
    } else if (current.val < target) {
      current = current.right;
    } else {
      return current;
    }
  }

  return null;
}
