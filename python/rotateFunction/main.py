class Solution:
    def maxRotateFunction(self, nums: list[int]) -> int:
        length = len(nums)
        maxSum = None
        for i in range(0, length):
            sumRes = sum(map(self.mulByIdx, enumerate(nums[i:] + nums[:i])))
            if maxSum is None or maxSum < sumRes:
                maxSum = sumRes
        return maxSum
    
    def mulByIdx(self, idxAndItem):
        idx, item = idxAndItem
        return idx * item