/* // Definition for a Node.
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
} */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;

  let queue = [root];

  //iterate the tree
  while (queue.length) {
    const size = queue.length;

    //traverse level by level
    for (let i = 0; i < size; i++) {
      //quit the first element in the queue
      const node = queue.shift();

      //point to the next node in queue
      // as long it's not the last node in the current level
      // now first node in queue is the next of the previous one (in the same level)
      if (i < size - 1) node.next = queue[0];

      //add nodes into the que
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
};
