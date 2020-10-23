'use strict'

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;               
    }
}

class List {
    constructor(head = null){
        this.head = head;
    }

    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    getFirst() {
        return this.head;
    }
}

let node1 = new Node(2);
let node2 = new Node(5);
let node3 = new Node(3);
let node4 = new Node(8);

node1.next = node2;
node2.next = node3;
node3.next = node4;


let list = new List(node1);

console.log(list.head.next.data);

console.log(list.size());

console.log(list.getLast());
console.log(list.getFirst());

list.clear();

console.log(list.size());