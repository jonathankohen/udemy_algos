"""
line of cars

head: first in, first out (left)
tail: last in, last out (last)

enquene(): puts at back of the line
self.tail.next = newNode
newNode = self.tail

dequene(): removes from front of line
self.head.next = newNode
newNode = self.head
"""


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Quene:
    def __init__(self):
        self.head = None
        self.tail = None

    def enquene(self, value):
        newNode = Node(value)
        if self.head == None:
            # if q is empty
            self.head = newNode
            self.tail = newNode
        else:
            # if q isn't empty, self.tail.next (pointing to None) now points to the next position instead, and fills it with newNode
            self.tail.next = newNode
            # increments self.tail to represent the back of the line
            self.tail = self.tail.next
        return self

    def dequene(self):
        if self.head == None:
            print("Nothing to remove")
        else:
            # moves head once to the right, removing the first node
            self.head = self.head.next
        return self

    def display(self):
        runner = self.head
        while runner != None:
            print(runner.value)
            runner = runner.next
        return self

    def size(self):
        counter = 0
        runner = self.head
        while runner != None:
            runner = runner.next
            counter += 1
        print(f"Quene has {counter} nodes")
        return self


# newQ = Quene()
# newQ.enquene(5).enquene(15).enquene(25).display()
# print('******')
# newQ.dequene().display()
# newQ.size()


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Stack:
    def __init__(self):
        self.top = None

    def push(self, value):
        # create a new node
        newNode = Node(value)
        if self.top == None:
            self.top = newNode
        else:
            newNode.next = self.top
            self.top = newNode
        return self

    def pop(self):
        if self.top == None:
            print('nothing to pop doc')
            return self
        else:
            valToReturn = self.top.value
            self.top = self.top.next
        return valToReturn

    def size(self):
        runner = self.top
        count = 0
        while runner != None:
            count += 1
            runner = runner.next
        print(count)
        return count

    def display(self):
        runner = self.top
        # print(runner.next.next.next)
        while runner != None:
            print(runner.value)
            runner = runner.next
        print(runner)


stk1 = Stack()
stk1.push(5).push(8).push(4).push(1)
print(stk1.pop())
# stk1.display()
# stk1.push(5).push(8).push(3)

# q1 = Queue()

# q1.enqueue('h').enqueue('a').enqueue(
#     'n').enqueue('n').enqueue('a').enqueue('h')


def palindrome(queueInput):
    stk = Stack()
    length = queueInput.size()
    for i in range(length):
        t = queueInput.dequeue()
        queueInput.enqueue(t)
        stk.push(t)
    # print('-' * 40)
    # stk.display()
    # queueInput.display()
    # print('-' * 40)
    rnr = queueInput.head
    rnr2 = stk.top
    while rnr is not None:
        if rnr.value is not rnr2.value:
            print(False)
            return False
        rnr = rnr.next
        rnr2 = rnr2.next
    print(True)


# palindrome(q1)


def copy(stackInput):
    newStack = stackInput
    return newStack


stk1 = Stack()
stk1.push(1).push(2).push(3)
