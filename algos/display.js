// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SLL {
    constructor(val) {
        this.head = null;
    }

    addFront(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head
        this.head = newNode;
        return this
    }

    dropFront() {
        //accounts for empty node list
        if (this.head == null) {
            return this.head;
        }
        //move the first node to temp
        var temp = this.head;
        //assign the next node to the front
        this.head = temp.next;
        // delete the second node, which was the first
        temp.next = null;
        return this.head;

    }

    frontValue() {
        //checks for no value in head
        if (this.head == null) {
            return null;
        } else {
            return this.head.data;
        }
    }

    //with help from dev.to
    display() {
        let current = this.head
        let displayArr = []
        while (current) {
            displayArr.push(current.data)
            current = current.next
        }
        return displayArr
    }

}

thisList = new SLL();

thisList.addFront(20).addFront(5).addFront(10).addFront(100).addFront(2)
//adds 20 to front, then 5, then 10
console.log(thisList)

// display method to console log all values.

thisList.dropFront()
//drops first node, which has a value of 10
console.log("drop")

console.log(thisList)

var first = thisList.frontValue()

console.log(first)

var wholeList = thisList.display()

console.log(wholeList)


