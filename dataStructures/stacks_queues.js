// ~ stacks
// last in last out
// like dirty dishes. when you remove a plate, you remove from the top
// first thing you added in is the last thing to be removed, the last thing you added in is the first to be removed
// from right to left. first thing added is on the right. things are added to the left
// it's a concept, there are many ways to make them

// essentially a stack. easiest way to implement

// let stack = [];

// stack.push('google'); //3
// stack.push('instagram'); // 2nd...
// stack.push('youtube'); // 1st to be removed
// stack.pop();
// console.log(stack);

// not good to go from front

// stack.unshift('added first');
// stack.unshift('added second');
// stack.unshift('added third');
// stack.shift();
// console.log(stack);

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }

// print() {
//     current = this.first
//     while (current) {
//         console.log(first.val)
//         current = current.
//     }
// }

// actually shift
// push(val) {
//     let newNode = new Node(val);
//     if (!this.first) {
//         this.first = newNode;
//         this.last = newNode;
//     } else {
//         let temp = this.first;
//         this.first = newNode;
//         this.first.next = temp;
//     }
//     return ++this.size;
// }

// actually unshift
//     pop() {
//         if (!this.first) return null;
//         let temp = this.first;
//         if (this.first === this.last) this.last = null;
//         this.first = this.first.next;

//         this.size--;
//         return temp.val;
//     }
// }

// let stack = new Stack();
// stack.push(9);
// stack.pop();
// console.log(stack);

// ~ queues
// removes things in order, like a civilized program. first gets removed first, etc...
// can make with arrs
// need to use shift
// let q = [];
// q.push('first');
// q.push('second');
// q.push('third');
// q.shift();
// console.log(q);

// better because it avoids re-indexing which is inefficient
// q.unshift('first');
// q.unshift('second');
// q.unshift('third');
// q.pop();
// console.log(q);

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    print() {
        if (!this.first) return undefined;
        else {
            let current = this.first;
            let counter = 0;
            console.log(`Queue size: ${this.size}`);
            while (current) {
                console.log(`Index: ${counter}, Value: ${current.val}`);
                counter++;
                current = current.next;
            }
        }
    }

    // added to the end, push
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    // removed from beginning. shift()
    dequeue() {
        if (!this.first) return null;

        let current = this.first;
        if (this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return current.val;
    }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
q.print();
