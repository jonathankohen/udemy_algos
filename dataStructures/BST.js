// very quick for searching
// higher nums to the right, lesser to the left

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (val < current.val) {
                    // if less than and nothing there, that's where it lives
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        // if not, iterate
                        current = current.left;
                    }
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
}

let tree = new BST();
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(13));
console.log(tree.insert(11));
console.log(tree.insert(2));
console.log(tree.insert(16));
console.log(tree.insert(7));

// console.log(tree);
