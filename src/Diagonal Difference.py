#!/bin/python3

arr = [[3, 2, 1], [4, 5, 6], [6, 7, 8]]

arr_multiple = [[-1, 1, -7, -8],
                [-10, -8, -5, -2],
                [0, 9, 7, -1],
                [4, 4, -2, 1]]

arr_multiple_v2 = [[6, 6, 7, -10, 9, -3, 8, 9, -1],
                   [9, 7, -10, 6, 4, 1, 6, 1, 1],
                   [-1, -2, 4, -6, 1, -4, -6, 3, 9],
                   [-8, 7, 6, -1, -6, -6, 6, -7, 2],
                   [-10, -4, 9, 1, -7, 8, -5, 3, -5],
                   [-8, -3, -4, 2, -3, 7, -5, 1, -5],
                   [-2, -7, -4, 8, 3, -1, 8, 2, 3],
                   [-3, 4, 6, -7, -7, -8, -3, 9, -6],
                   [-2, 0, 5, 4, 4, 4, -3, 3, 0]]

def diagonal_difference_multiple_v2(__getitem__):
    """
    Passed 11 test
    :param __getitem__:
    :return:
    """
    sum_a = 0
    sum_b = 0
    for index, array in enumerate(__getitem__):
        # print("index, array", index, array)
        # print(array[index])
        sum_a = sum_a + array[index]

    for index, array in enumerate(__getitem__):
        list_reversed = list(reversed(array))
        # print(list(reversed(array)))
        # print(list_reversed[index])
        sum_b = sum_b + list_reversed[index]

    print("sum_a => ", sum_a)
    print("sum_b => ", sum_b)
    if sum_a > sum_b:
        print(sum_a - sum_b)
    else:
        print(sum_b - sum_a)
    print(sum_a - sum_b)


diagonal_difference_multiple_v2(arr_multiple_v2)

# def diagonal_difference_multiple(__getitem__):
#     """
#     Still not working yet
#     Failed 6 test
#     Passed 5 test
#     :param __getitem__:
#     :return:
#     """
#     sum_a = 0
#     sum_b = 0
#     for index, array in enumerate(__getitem__):
#         # print("index, array", index, array)
#         # print(array[index])
#         sum_a = sum_a + array[index]
#
#     for index, array in enumerate(__getitem__):
#         list_reversed = list(reversed(array))
#         # print(list(reversed(array)))
#         # print(list_reversed[index])
#         sum_b = sum_b + list_reversed[index]
#
#     print("sum_a => ", sum_a)
#     print("sum_b => ", sum_b)

# diagonal_difference_multiple(arr_multiple)



# def diagonal_difference(__getitem__):
#     """
#     Not working
#     Failed 9 test
#     Passed 2 test
#     :param __getitem__:
#     :return: integer diagonal sum
#     """
#     sum_a = __getitem__[0][0] + __getitem__[1][1] + __getitem__[2][2]
#     print("sum_a => ", sum_a)
#     sum_b = __getitem__[0][2] + __getitem__[1][1] + __getitem__[2][0]
#     print("sum_b => ", sum_b)
#     result_dif = int(sum_b - sum_a)
#     print("result_dif => ", result_dif)


# diagonal_difference(arr)
