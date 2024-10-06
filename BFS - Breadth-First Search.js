class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const bfs = (root) => {
  const queue = [];
  if (root !== null) {
    queue.push(root);
  }
  let level = 0;

  while (queue.length) {
    const levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      const current = queue.shift();

      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }

    level++;
  }
};
