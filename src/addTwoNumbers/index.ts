/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const listNodeToArray = (list: ListNode | null) => {
    if (!list) return [0];
    const toRet = [list.val];
    var tmp = list.next;
    while (tmp) {
      toRet.push(tmp.val);
      tmp = tmp.next;
    }
    return toRet;
  };

  const createListNode = (input: number[]) =>
    input.reverse().reduce((acc: ListNode | null, curr) => {
      return new ListNode(curr, acc);
    }, null);

  const i1Arr = listNodeToArray(l1);
  const i2Arr = listNodeToArray(l2);

  const sum =
    BigInt(i1Arr.reverse().join("")) + BigInt(i2Arr.reverse().join(""));

  return createListNode(sum.toString().split("").map(Number).reverse());
}
