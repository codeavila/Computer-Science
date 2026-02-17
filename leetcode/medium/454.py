from typing import List

# 454. 4Sum II
# Medium
# Topics
# premium lock icon
# Companies
# Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

# 0 <= i, j, k, l < n
# nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0


# Example 1:

# Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
# Output: 2
# Explanation:
# The two tuples are:
# 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
# 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
# Example 2:

# Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
# Output: 1


# Constraints:

# n == nums1.length
# n == nums2.length
# n == nums3.length
# n == nums4.length
# 1 <= n <= 200
# -228 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 228


class Solution:
    def fourSumCount(
        self, nums1: List[int], nums2: List[int], nums3: List[int], nums4: List[int]
    ) -> int:
        dictab = {}
        dictcd = {}

        self.numsab(nums1, nums2, dictab)
        self.numscd(nums3, nums4, dictcd)

        return self.freq_sum(dictab, dictcd)

    def numsab(self, nums1, nums2, dictab):
        sum_t = 0
        for a in nums1:
            # print(a)
            for b in nums2:
                # print(b)
                sum_t = a + b
                dictab[sum_t] = dictab.get(sum_t, 0) + 1

    def numscd(self, nums3, nums4, dictcd):
        sum_t = 0
        for c in nums3:
            # print(a)
            for d in nums4:
                # print(b)
                sum_t = c + d
                dictcd[sum_t] = dictcd.get(sum_t, 0) + 1

    def freq_sum(self, dictab, dictcd):
        tupla = 0
        for t, freq_t in dictcd.items():
            # print("Key: ", t, "freq_t: ", freq_t)
            freq_ab = dictab.get(-t, 0)
            # print("freq_ab: ", dictab.get(-t, 0))

            tupla += freq_t * freq_ab

        return tupla


solution = Solution()
result = solution.fourSumCount([1, 2], [-1, -2], [-1, 2], [0, 2])
print(result)
