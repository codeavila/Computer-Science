from typing import List

# 128. Longest Consecutive Sequence
# Medium
# Topics
# premium lock icon
# Companies
# Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

# You must write an algorithm that runs in O(n) time.


# Example 1:

# Input: nums = [100,4,200,1,3,2]
# Output: 4
# Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
# Example 2:

# Input: nums = [0,3,7,2,5,8,4,6,0,1]
# Output: 9
# Example 3:

# Input: nums = [1,0,1,2]
# Output: 3


# Constraints:

# 0 <= nums.length <= 105
# -109 <= nums[i] <= 109


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        exist = 0
        count = 0
        best = 0
        S = self.arraySet(nums)
        print(S)
        for number in S:
            exist = (number - 1) not in S
            if exist:
                count = 0
                actual = number

                while actual in S:
                    count += 1
                    actual += 1

                best = max(best, count)

        return best

    def arraySet(self, nums: List[int]) -> set[int]:
        return set(nums)


solution = Solution()
print(solution.longestConsecutive([10, 5, 12, 3, 55, 30, 4, 11, 2]))
