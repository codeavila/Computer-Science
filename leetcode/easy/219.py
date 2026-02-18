from typing import List

# 219. Contains Duplicate II
# Easy
# Topics
# premium lock icon
# Companies
# Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.


# Example 1:

# Input: nums = [1,2,3,1], k = 3
# Output: true
# Example 2:

# Input: nums = [1,0,1,1], k = 1
# Output: true
# Example 3:

# Input: nums = [1,2,3,1,2,3], k = 2
# Output: false


# Constraints:

# 1 <= nums.length <= 105
# -109 <= nums[i] <= 109
# 0 <= k <= 105


class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        visto = {}
        for i, val in enumerate(nums):
            if val in visto:
                indice_anterior = visto[val]
                if abs(i - indice_anterior) <= k:
                    return True

            visto[val] = i

        print(visto)
        return False


solution = Solution()
print(solution.containsNearbyDuplicate([1, 2, 3, 1], 3))
