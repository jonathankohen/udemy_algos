// collections of vals, the relationships among them, and functions or operations that can be applied to the data
// ~ ES6 classes
class Student {
    constructor(firstName, lastName, year, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
        this.address = address;
    }

    static enrollStudents(...students) {
        console.log('Enrolling');
    }

    fullName() {
        console.log(`My name is: ${this.firstName} ${this.lastName}`);
    }

    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            console.log('Ruh uh. You are expelled!');
        }
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    calcAvg() {
        let sum = this.scores.reduce((a, b) => a + b);
        return sum / this.scores.length;
    }
}

let newAddress = {
    line1: '423 Hell St',
    city: 'Brooklyn',
    zipCode: 11221,
};

let newStudent = new Student('Jon', 'Kohen', 12, newAddress);
// newStudent.grade = 4;
// newStudent.fullName();
// newStudent.markLate();
// newStudent.markLate();
// newStudent.markLate();
// console.log(newStudent);
// console.log(newStudent.addScore(88));
// console.log(newStudent.addScore(95));
// console.log(newStudent.calcAvg());
// Student.enrollStudents();

// ~ class methods (static)
// often used for util methods
// applies to all instances of class
// Student.enrollStudents();

// ~ singly-linked lists
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print() {
        if (!this.head) return undefined;
        else {
            let current = this.head;
            let counter = 0;
            while (current) {
                console.log(`Index: ${counter}, Value: ${current.val}`);
                counter++;
                current = current.next;
            }
        }
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        else {
            let current = this.head;
            let newTail = current;
            while (current.next) {
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return current;
        }
    }

    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }

    unShift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        let targetNode = this.get(index);
        if (targetNode) {
            targetNode.val = val;
            console.log(
                `Sucessfully changed the value of Node at index ${index} to ${val}`,
            );
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(val);
        if (index === 0) return this.unShift(val);

        let newNode = new Node(val),
            prev = this.get(index - 1),
            temp = prev.next;

        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        else if (index === this.length - 1) this.pop();
        else if (index === 0) this.shift();
        else {
            // find node on to the left, set target in var by pointing .next to it
            // set prev node to .next of target node
            let prev = this.get(index - 1);
            let removed = prev.next;
            prev.next = removed.next;

            this.length--;
            return removed;
        }
    }

    // reverse list in place
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next,
            prev = null;
        while (node) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    // swap head and tail
    // send tail left
    // create var called next and prev and current = head
    // loop
    // set next variable to be the next property of whatever our current node is. store current next so isn't lost
    // set next property on cur node to whatever the previous is
    // set prev node to be the calue of the node var
    // set node var to be the val of next var

    // have next node point .next to head. basically spinning the arrow around
    // do this by adding temp var for old next first, then pointing it where you want
    // last one only have to point next
}

let newList = new SLL();
newList.push('Hello!');
newList.push('okay');
newList.push('next');
// newList.remove(0);
// newList.insert(0, 'surprise mothafucka');
// console.log(newList.set(2, 'howdy'));
newList.reverse();
console.log(newList);
console.log('----------');
newList.print();
console.log('----------');
// console.log(newList.get(2));

// flows left to right
// push/connecting in general: on first add, set head and tail to be the same node you just added
// next add: make head.next point to new node, have tail be new node
// next next add: just make tail point to new node

// let first = new Node('Hey');
// first.next = new Node('there,');
// first.next.next = new Node('partner');
// console.log(first);
