// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 * URL HackerRank => https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/
 */
function insertNodeAtTail(head, data) {
    let new_node = new SinglyLinkedListNode(data);
    
    if( head == null){
        return new_node;
    }
    
    let currentHead = head;
    while (currentHead.next !== null){
        currentHead = currentHead.next;
    }
    currentHead.next = new_node;
    
    return head;

}
