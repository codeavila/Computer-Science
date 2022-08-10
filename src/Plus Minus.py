#!/bin/python3
from decimal import Decimal

arr_v2 = [-6, 1, 79, 17, 64, 94, 87, -77, 0, -26, 2, -94, 87, -81, -73, -28, 43, 0, -35, 39, -37, -49, -29, 93, 64, 54, 0, -73, -58, -100, 33, -75, -47, 35, -7, 0, 52, -37, -99, 58, -23, 70, -52, 18, 0, -79, -38, 45, -61, 45, 51, -48, 32, 0, -44, -56, 29, -74, -1, 92, -93, 23, 0, 55, -31, 75, -43, 20, 19, 58, -4, 0, 59, -80, 18, -74, 81, 63, 62, -92, 0, -23, 7, -91, 22, -1, 38, -73, 79, 0, -2, 90, 80, 74, -74, -85, -48, 31, 0, -80]

"""
Sum the total of the number zero,positive,negative and divide each one with the len of the elements of the array
https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
"""


def plus_minus_v2(__getitem__):
    """
    Worked
    Passed 12 Test
    Fixed the round number
    :param __getitem__:
    :return:
    """

    count_items = len(__getitem__)
    items_positive = 0
    items_negative = 0
    items_zero = 0

    sum_positive = 0
    sum_negative = 0
    sum_zero = 0

    for item in __getitem__:
        if item > 0:
            items_positive = items_positive + 1
        elif item == 0:
            items_zero = items_zero + 1
        else:
            items_negative = items_negative + 1

    sum_positive = Decimal(items_positive / count_items).__round__(6)
    sum_negative = Decimal(items_negative / count_items).__round__(6)
    sum_zero = Decimal(items_zero / count_items).__round__(6)

    print("sum_positive => ", sum_positive)
    print("sum_negative => ", sum_negative)
    print("sum_zero => ", sum_zero)

