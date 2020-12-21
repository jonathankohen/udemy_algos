class DLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    print() {
        let runner = this.head;
        let output = 'vals: ';
        while (runner) {
            runner.next === null
                ? (output += `${runner.val}.`)
                : (output += `${runner.val}, `);
            runner = runner.next;
        }
        console.log(output);
    }

    push(val) {
        const newNode = new DLNode(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    pop() {
        if (this.head === null) {
            console.log('Nothing to remove');
        } else if (this.head.next === null) {
            this.head = null;
        } else {
            let runner = this.head;
            while (runner.next.next) {
                runner = runner.next;
            }
            runner.next = null;
            this.tail = runner;
        }
    }

    front() {
        console.log(`Starting val: ${this.head.val}`);
        return this.head.val;
    }

    back() {
        console.log(`Ending val: ${this.tail.val}`);
        return this.tail.val;
    }

    contains(val) {
        let runner = this.head;
        while (runner) {
            if (runner.val === val) {
                console.log(`Yes, list contains this val: ${val}`);
                return true;
            }
            runner = runner.next;
        }
        console.log(`No, list does not contain this val: ${val}`);
        return false;
    }

    size() {
        let counter = 0;
        let runner = this.head;
        while (runner) {
            counter++;
            runner = runner.next;
        }
        console.log(`List contains ${counter} vals`);
        return counter;
    }

    prepend(val, existingVal) {
        var newNode = new DLNode(val);
        var runner = this.head;
        while (runner.next.val != existingVal) {
            runner = runner.next;
        }
        var exVal = runner.next;
        exVal.prev = newNode;
        runner.next = newNode;
        newNode.next = exVal;
        newNode.prev = runner;
    }

    isPalindrome() {
        var runner1 = this.head;
        var runner2 = this.tail;
        while (runner1 != runner2) {
            if (runner1.val == runner2.val) {
                console.log('here');
                console.log('runner1', runner1.val);
                console.log('runner2', runner2.val);
                runner1 = runner1.next;
                runner2 = runner2.prev;
            } else {
                return false;
            }
        }
        return true;
    }

    reverse() {
        var runner = this.tail;
        var last = this.tail;
        var first = this.head;
        while (runner != this.head) {
            var nextNode = runner.prev;
            runner.prev = runner.next;
            runner.next = nextNode;
            runner = runner.next;
        }
        runner.prev = runner.next;
        runner.next = null;
        this.head = last;
        this.tail = first;
    }
}

const list = new DLL();
list.push(8);
list.push(10);
list.push(88);
list.push(22);
list.pop();
list.prepend(33, 88);
list.print();
list.front();
list.back();
list.size();
list.contains(88);
list.contains(9);
