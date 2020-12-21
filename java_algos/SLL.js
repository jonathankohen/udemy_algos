class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    add(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let runner = this.head;
            while (runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }

    print() {
        let runner = this.head;
        let output = '';
        while (runner) {
            output += runner.value + ' -> ';
            runner = runner.next;
        }
        console.log(output);
    }

    remove(val) {
        if (!this.head) {
            return false;
        }
        if (this.head.value === val) {
            this.head = this.head.next;
            return true;
        }
        let runner = this.head;
        while (runner.next) {
            if (runner.next.value === val) {
                runner.next = runner.next.next;
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    removeAt(index) {
        if (!this.head) {
            return null;
        }
        if (index === 0) {
            let output = this.head.value;
            this.head = this.head.next;
            return output;
        }
        let runner = this.head;
        for (let i = 0; i < index - 1; i++) {
            runner = runner.next;
            if (!runner) {
                return null;
            }
        }
        if (!runner && !runner.next) {
            return null;
        }
        let response = runner.next.value;
        runner.next = runner.next.next;
        return response;
    }

    hasLoop() {
        let slower = this.head;
        let faster = this.head;

        while (faster != null && faster.next != null) {
            slower = slower.next;
            faster = faster.next.next;

            if (slower == faster) {
                console.log('Loop detected');
                return true;
            }
        }
        console.log('No loop detected');
        return false;
    }
}

const list1 = new SLL();
list1.add(1);
list1.add(2);
list1.add(3);
list1.print();
let lastNode = list1.head.next.next;
lastNode.next = list1.head;
list1.hasLoop();
