// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     data int32
 *     next *SinglyLinkedListNode
 * }
 * URL HackerRank => https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/
 */
 func printLinkedList(head *SinglyLinkedListNode) {
    currentNode := head

    // Iterar sobre la lista hasta que currentNode sea nil
    for currentNode != nil {
        fmt.Println(currentNode.data) // Imprimir el valor actual del nodo
        currentNode = currentNode.next // Avanzar al siguiente nodo
    }

}