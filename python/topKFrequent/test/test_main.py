import unittest
from topKFrequent.main import Solution


class SolutionTest(unittest.TestCase):
    def test_kFrequent(self):
        s = Solution()
        self.assertEqual(s.topKFrequent([2,2,3,1,1,1], 2), [1, 2])


if __name__ == "__main__":
    unittest.main()
