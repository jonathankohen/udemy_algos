// We want to create a Queue data structure that keeps its elements in sorted order, so that when we call pop(), we get the first element in sorted order (rather than sequential order, like a regular FIFO queue).

// Create a PriQueue data structure by making changes to SLQueue and SLNode:
// A PriQNode class should be identical to SLNode, plus .pri, which is set by an additional argument passed to the constructor. The PriQueue push() method should accept both value and priority, and priority should be used to add the node at the right spot (instead of at queue’s end).

class SLNodePri {
    constructor(value, priority) {
        this.val = value;
        this.pri = priority;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    print() {
        var runner = this.head;
        var output = '';
        while (runner) {
            output += `|| Val: ${runner.val} Priority: ${runner.pri} ||`;
            if (runner.next) {
                output += ' => ';
            }
            runner = runner.next;
        }
        console.log(output);
    }

    push(value, priority) {
        // Establish node;
        var node = new SLNodePri(value, priority);
        if (!this.head) {
            this.head = node;
            return this;
        }
        var prev = null;
        var runner = this.head;
        // Finding the correct spot in the list to stitch in the node.
        while (runner.pri <= priority) {
            prev = runner;
            runner = runner.next;
            if (!runner) {
                break;
            }
        }

        // Stitching it into the list.
        if (prev) {
            // Handles if not replacing the head.
            prev.next = node;
            node.next = runner;
            return this;
        } else {
            // replaces the head of the list.
            node.next = this.head;
            this.head = node;
            return this;
        }
    }

    pop() {
        if (!this.head) {
            console.log('List is empty');
            return this;
        } else if (!this.head.next) {
            this.head = null;
            return this;
        } else {
            runner = this.head;
            while (runner.next.next != null) {
                runner = runner.next;
            }
            runner.next = null;
            return this;
        }
    }
}

const list = new SLL();
list.push(1, 1).print();
list.pop().print();




pop(){

        var runner = this.head;
        var prev = null;
        while(runner.next){
            prev = runner;
            runner = runner.next;
        }
        // console.log(prev.val)
        prev.next = null;

    }


    
