class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        dict = {}
        for num in nums:
            if num not in dict.keys():
                dict[num] = nums.count(num)
        solutionsTuples = sorted(dict.items(), key=lambda t: t[1], reverse=True)
        return list(map(lambda t: t[0], solutionsTuples[0:k]))