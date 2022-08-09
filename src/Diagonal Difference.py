#!/bin/python3

arr = [[3, 2, 1], [4, 5, 6], [6, 7, 8]]


def diagonal_difference(__getitem__):
    sum_a = arr[0][0] + arr[1][1] + arr[2][2]
    print("sum_a => ", sum_a)
    sum_b = arr[0][2] + arr[1][1] + arr[2][0]
    print("sum_b => ", sum_b)
    result_dif = int(sum_b - sum_a)
    print("result_dif => ", result_dif)


diagonal_difference(arr)
