import unittest
from isomorphicString.main import Solution


class SolutionTest(unittest.TestCase):
    def test_isIsomorphic(self):
        s = Solution()
        self.assertTrue(s.isIsomorphic("egg", "add"))


if __name__ == "__main__":
    unittest.main()
