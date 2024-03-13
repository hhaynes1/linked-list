import Node from "./node.js";

export default class LinkedList {
    constructor() {
        this.head;
        this.length = 0;
    }

    // add to start of linked list
    prepend(value) {
        if (!this.head) {
            this.head = new Node(value);
        } else {
            this.head = new Node(value, this.head);
        }
        this.length += 1;
    }

    // add to end of linked list
    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            this.length += 1;
            return;
        }

        let head = this.head;
        while (head.nextNode) {
            head = head.nextNode;
        }
        head.nextNode = new Node(value);
        this.length += 1;
    }

    // return list length
    size() {
        return this.length;
    }

    // return first node
    getHead() {
        return this.length ? this.head : null
    }

    // return last node
    getTail() {
        let length = this.length;
        let tail = this.head;
        while (--length) {
            tail = tail.nextNode;
        }
        return tail;
    }

    // return node at index
    at(index) {
        if (index > this.length) {
            return null;
        }
        let target = this.head;
        while (index--) {
            target = target.nextNode;
        }
        return target;
    }

    // remove last element from list
    pop() {
        if (!this.head) {
            return;
        }
        let length = this.length - 1;
        let newTail = this.head;
        while (--length) {
            newTail = newTail.nextNode;
        }
        this.length -= 1;
        newTail.nextNode = null;
    }

    // return true if value in list
    contains(value) {
        let length = this.length;
        let target = this.head;
        while (length--) {
            if (target.value === value) {
                return true;
            }
            target = target.nextNode;
        }
        return false;
    }

    // return index of value, or null
    find(value) {
        let length = this.length;
        let target = this.head;
        let index = 0;
        while (length--) {
            if (target.value === value) {
                return index;
            }
            target = target.nextNode;
            index += 1;
        }
        return null;
    }

    // print list as strings to console
    toString() {
        let returnStr = '';
        let length = this.length;
        let target = this.head;
        while (length--) {
            returnStr += ` ( ${target.value} ) -> `;
            target = target.nextNode;
        }
        returnStr += 'null';
        return returnStr;
    }

    // insert new node with value at index
    insertAt() {

    }

    // remove node at index
    removeAt() {

    }
}