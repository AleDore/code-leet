import unittest
from rotateFunction.main import Solution


class SolutionTest(unittest.TestCase):
    def test_rotateFunction(self):
        s = Solution()
        self.assertEqual(s.maxRotateFunction([4,3,2,6]), 26)


if __name__ == "__main__":
    unittest.main()
