#!/usr/bin/python3

# Complete the printLinkedList function below.

#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
# URL HackerRank => https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/
#
def printLinkedList(head):
    current_node = head
    while current_node is not None:
        print(current_node.data)
        current_node = current_node.next
