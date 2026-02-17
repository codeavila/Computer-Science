from typing import List

# 1010. Pairs of Songs With Total Durations Divisible by 60
# Medium
# Topics
# premium lock icon
# Companies
# Hint
# You are given a list of songs where the ith song has a duration of time[i] seconds.

# Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally,
# we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

# Example 1:

# Input: time = [30,20,150,100,40]
# Output: 3
# Explanation: Three pairs have a total duration divisible by 60:
# (time[0] = 30, time[2] = 150): total duration 180
# (time[1] = 20, time[3] = 100): total duration 120
# (time[1] = 20, time[4] = 40): total duration 60
# Example 2:

# Input: time = [60,60,60]
# Output: 3
# Explanation: All three pairs have a total duration of 120, which is divisible by 60.


class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        return self.get_residuos(time)

    def get_residuos(self, time):
        freq = [0] * 60
        contador = 0
        for i in time:
            r = i % 60
            # print("r = ", i, " % 60 = ", r)
            c = (60 - r) % 60
            # print("c= (60 - ", r, ") % 60 =  ", c)

            contador += freq[c]
            freq[r] += 1

            # print("residuo : ", r, "complemento/lo que falta : ", c)
            # print(freq)
            # print("Pair songs : ", contador)

        return contador


solution = Solution()
print(solution.numPairsDivisibleBy60([30, 20, 150, 100, 40]))
