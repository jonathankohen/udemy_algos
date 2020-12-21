class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// make first.next point to new node, have temp be new node
// let oldHead = this.head;
//     this.head = oldHead.next;

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            let temp = this.first;
            this.first.next = newNode;
            this.first = temp;
        }

        return ++this.size;
    }

    display() {
        if (!this.first) return undefined;
        let current = this.first;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    pop() {
        if (!this.first) return undefined;
        let temp = this.first;
        if (this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}

let stack = new Stack();
stack.push('Bulbasaur');
stack.push('Charmander');
stack.push('Squirtle');
stack.display();
console.log('Taking out Squirtle');
stack.pop();
stack.display();
console.log('Adding Pikachu');
stack.push('Pikachu');
stack.display();

console.log(stack);
