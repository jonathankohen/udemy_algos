class BTNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new BTNode(val);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let chipmunk = this.root;
        while (chipmunk !== null) {
            if (val < chipmunk.value) {
                if (chipmunk.left === null) {
                    chipmunk.left = newNode;
                    return;
                } else {
                    chipmunk = chipmunk.left;
                }
            } else {
                if (chipmunk.right === null) {
                    chipmunk.right = newNode;
                    return;
                } else {
                    chipmunk = chipmunk.right;
                }
            }
        }
    }

    min() {
        if (this.root === null) {
            return null;
        }
        let squirrel = this.root;
        while (squirrel.left !== null) {
            squirrel = squirrel.left;
        }
        return squirrel.value;
    }

    contains(val) {
        if (this.root === null) {
            return false;
        }
        let squirrel = this.root;
        while (squirrel !== null) {
            if (squirrel.value === val) {
                return true;
            }
            if (val < squirrel.value) {
                squirrel = squirrel.left;
            } else {
                squirrel = squirrel.right;
            }
        }
        return false;
    }

    size(pointer = this.root) {
        if (pointer === null) {
            return 0;
        } else {
            return this.size(pointer.left) + this.size(pointer.right) + 1;
        }
    }

    height(pointer = this.root) {
        if (pointer === null) {
            return 0;
        } else {
            var leftHeight = this.height(pointer.left);
            var rightHeight = this.height(pointer.right);

            return Math.max(leftHeight, rightHeight) + 1;
        }
    }

    print(pointer = this.root) {
        if (pointer !== null) {
            console.log(pointer.value);
            this.print(pointer.left);
            this.print(pointer.right);
        }
    }
}

const oak = new BST();
oak.insert(100);
oak.insert(50);
oak.insert(200);
oak.insert(170);
oak.insert(300);
// console.log(oak);
// oak.print();
console.log('min ' + oak.min());
console.log('contains 170 ' + oak.contains(170));
console.log('contains 2 ' + oak.contains(2));
console.log('size ' + oak.size());
