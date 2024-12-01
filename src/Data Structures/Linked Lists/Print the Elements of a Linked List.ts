
// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 * URL HackerRank => https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/
 */
function printLinkedList(head) {
    let currentHead = head;
    while (currentHead !== null) {
        console.log(currentHead.data);
        currentHead = currentHead.next;
    }
}