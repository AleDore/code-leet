import { ListNode, addTwoNumbers } from "..";

const createListNode = (input: number[]) =>
  input.reverse().reduce((acc: ListNode | null, curr) => {
    return new ListNode(curr, acc);
  }, null);

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
describe("Add Two Numbers", () => {
  it.each([
    {
      l1: createListNode([2, 4, 3]),
      l2: createListNode([5, 6, 4]),
      expectedOutput: [7, 0, 8],
    },
    {
      l1: createListNode([0]),
      l2: createListNode([0]),
      expectedOutput: [0],
    },
    {
      l1: createListNode([9, 9, 9, 9, 9, 9, 9]),
      l2: createListNode([9, 9, 9, 9]),
      expectedOutput: [8, 9, 9, 9, 0, 0, 0, 1],
    },
  ])(
    "should return correctly the two sum Numbers",
    ({ l1, l2, expectedOutput }) => {
      const res = addTwoNumbers(l1, l2);
      expect(listNodeToArray(res)).toEqual(expectedOutput);
    }
  );
});
