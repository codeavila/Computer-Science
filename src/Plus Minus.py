#!/bin/python3
from decimal import Decimal

arr = [1, 10, 0, -1, -1]

arr_v2 = [-6, 1, 79, 17, 64, 94, 87, -77, 0, -26, 2, -94, 87, -81, -73, -28,
          43, 0, -35, 39, -37, -49, -29, 93, 64, 54, 0, -73, -58, -100, 33,
          -75, -47, 35, -7, 0, 52, -37, -99, 58, -23, 70, -52, 18, 0, -79,
          -38, 45, -61, 45, 51, -48, 32, 0, -44, -56, 29, -74, -1, 92, -93, 23,
          0, 55, -31, 75, -43, 20, 19, 58, -4, 0, 59, -80, 18, -74, 81, 63, 62,
          -92, 0, -23, 7, -91, 22, -1, 38, -73, 79, 0, -2, 90, 80, 74, -74, -85,
          -48, 31, 0, -80]


def plus_minus_v2(__getitem__):
    """
    Worked
    Passed 12 Test
    Fixed the round number
    :param __getitem__:
    :return:
    """
    try:
        count_items = len(__getitem__)
        items_positive = 0
        items_negative = 0
        items_zero = 0

        sum_positive = 0
        sum_negative = 0
        sum_zero = 0

        # print("count_items => ", count_items)
        for item in __getitem__:
            if item > 0:
                items_positive = items_positive + 1
            elif item == 0:
                items_zero = items_zero + 1
            else:
                items_negative = items_negative + 1

        print("items_positive => ", items_positive)
        print("items_negative => ", items_negative)
        print("items_zero => ", items_zero)

        sum_positive = Decimal(items_positive/count_items).__round__(6)
        sum_negative = Decimal(items_negative / count_items).__round__(6)
        sum_zero = Decimal(items_zero / count_items).__round__(6)

        # sum_positive = Decimal(items_positive/6)
        # sum_negative = Decimal(items_negative / 6)
        # sum_zero = Decimal(items_zero / 6)

        print("sum_positive => ", sum_positive)
        print("sum_negative => ", sum_negative)
        print("sum_zero => ", sum_zero)
    except NameError:
        print(NameError)



plus_minus_v2(arr_v2)

# def plus_minus(__getitem__):
#     """
#     Not working
#     Failed 6 test
#     Passed 6 test
#     :param __getitem__:
#     :return:
#     """
#     count_items = len(__getitem__)
#
#     items_positive = 0
#     items_negative = 0
#     items_zero = 0
#
#     sum_positive = 0
#     sum_negative = 0
#     sum_zero = 0
#
#     # print("count_items => ", count_items)
#     for item in __getitem__:
#         if item > 0:
#             items_positive = items_positive + 1
#         elif item == 0:
#             items_zero = items_zero + 1
#         else:
#             items_negative = items_negative + 1
#
#     # print("items_positive => ", items_positive)
#     # print("items_negative => ", items_negative)
#     # print("items_zero => ", items_zero)
#
#     sum_positive = Decimal(items_positive/count_items).__round__(count_items)
#     sum_negative = Decimal(items_negative / count_items).__round__(count_items)
#     sum_zero = Decimal(items_zero / count_items).__round__(count_items)
#
#     print("sum_positive => ", sum_positive)
#     print("sum_negative => ", sum_negative)
#     print("sum_zero => ", sum_zero)
#
#
# plus_minus(arr)
