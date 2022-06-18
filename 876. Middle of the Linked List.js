/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let temp = [];
  let length = 0;

  while (head) {
    temp.push(head.val);
    length++;
    head = head.next;
  }

  let falseHead = new ListNode();
  let output = falseHead;
  for (i = Math.floor(length / 2); i < length; i++) {
    output.next = new ListNode(temp[i]);
    output = output.next;
  }

  return falseHead.next;
};
