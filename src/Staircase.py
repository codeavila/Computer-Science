#!/bin/python3

"""
https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
"""

def staircase(__getitem__):
    n = __getitem__
    counter = 0
    for a in reversed(range(n)):
        counter = counter + 1
        print((a * " ") + ("#" * counter))


staircase(6)
