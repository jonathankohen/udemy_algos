class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


class SLL:
    def __init__(self):
        self.head = None

    def display(self):
        runner = self.head
        while runner != None:
            print(runner.val)
            runner = runner.next
        return self

    def prepend(self, val):
        newNode = Node(val)
        newNode.next = self.head
        self.head = newNode
        return self

    def append(self, val):
        newNode = Node(val)
        if self.head == None:
            self.head = newNode
        else:
            runner = self.head
            while runner.next != None:
                runner = runner.next
            runner.next = newNode
        return self

    def removeFront(self):
        self.head = self.head.next

    def removeBack(self):
        if self.head == None:
            return self
        elif self.head.next == None:
            self.head = None
            return self
        else:
            runner = self.head
            while runner.next.next != None:
                runner = runner.next
            runner.next = None
            return self

    def is_empty(self):
        if my_list.head == None:
            return True

    def min_to_front(self):
        if self.head == None:
            print("self.head = None")
            return self
        else:
            min_val = self.head.val
            runner = self.head
            while runner.next != None:
                if runner.next.val < min_val:
                    min_val = runner.next.val
                    node_before_min = runner
                    min_node = runner.next
                runner = runner.next
            node_before_min.next = min_node.next
            min_node.next = self.head
            self.head = min_node
        return self

    # def max_to_back(self):
    #     if self.head == None:
    #         print("self.head = None")
    #         return self
    #     else:
    #         max_val = self.head.val
    #         runner = self.head
    #         while runner.next != None:
    #             if runner.next.val > max_val:
    #                 max_val = runner.next.val
    #                 node_before_max = runner
    #                 max_node = runner.next.next
    #             runner = self.head
    #         node_before_max.next = max_node.next
    #         max_node.next = self.head
    #         self.head = max_node
    #     return self

    def maxToBack(self):
        if self.head == None:
            print("nothing to move fam")
            return self
        else:
            maxval = self.head.val
            runner = self.head
            while runner.next != None:
                if runner.next.val > maxval:
                    maxval = runner.next.val
                    nodeBeforemax = runner
                    maxNode = runner.next
                runner = runner.next
            nodeBeforemax.next = maxNode.next
            runner.next = maxNode
            maxNode.next = None
        return self


newSLL = SLL()
newSLL.append(5).append(6).append(3).append(
    1).append(12).min_to_front().display()


"""
- head is equal to None by default
- newNode accepts val, next is equal to None
- if self.head = == None, self.head becomes newNode. newNode sent to front
- newSLL.append(5) returns the new Node object
~ when a newNode is created, it doesn't have any position by default. it's not a part of the list. it's not pointing to anything, nor is anything pointing to it
- self.head is pointing to Node object
~ runner can point to the same thing. the while loop increments runner to point to every node until it reaches the end
- runner's value is also 5
- runner.next is None
! runner.next points to NODE not VALUE. need runner.next.value
- 
"""
"""
def min_to_front(self):
        min = self.head
        runner = self.head

        if self.is_empty() == True:
            return None
        if self.find_length() == 1:
            return self.head


        while runner != None:
            runner = runner.next
            if runner.next < min:
                newNode = Node(min)
                newNode.next = self.head
                self.head = newNode
        return self
"""
"""
class Node(object):
    def __init__(self, value):
        self.val = value
        self.next = None

class SLL(object):
    def __init__(self):
        self.head = None

    def display_values(self):
        runner = my_list.head
        while(runner != None):
            print(runner.val)
            runner = runner.next

    def find_max(self):
        max = my_list.head
        runner = my_list.head
        while (runner != None):
            if (max.val < runner.val):
                max = runner
            runner = runner.next
        print(max.val)

    def find_length(self):
        runner = my_list.head
        counter = 0
        while (runner != None):
            counter += 1
            runner = runner.next
        return ('Length is:', counter)

    def is_empty(self):
        if my_list.head == None:
            return True
        else:
            return False

    def front(self):
        if self.is_empty() != True:
            return my_list.head.val

    def add_front(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node
        return self

    def remove_front(self):
        if self.is_empty() == True:
            return None
        elif self.head.next == None:
            node_to_remove = self.head
            self.head = self.head.next

    def add_back(self, value):
        new_node = Node(value)
        runner = self.head
        if self.is_empty() == True:
            return None
        while (runner.next != None):
            runner = runner.next
        runner.next = new_node
        return self

    def remove_back(self):
        if self.find_length() == 1:
            return self.remove_front()
        elif self.is_empty() == True:
            return None
        runner = self.head
        if self.is_empty() == True:
            return None
        while (runner.next.next != None):
            runner = runner.next
        node_to_remove = runner.next
        runner.next = None
        return node_to_remove

    #creating SLL

    def min_to_front(self):
        runner = self.head
        min = self.head
        prev = None
        if self.is_empty() == True:
            return None
        if self.find_length() == 1:
            return self.head
        while (runner.next != None):
            if min.val > runner.next.val:
                min = runner.next
                prev = runner
            runner = runner.next
        prev.net = min.next
        min.next = self.head
        self.head = min
        return self.head

my_list = SLL()
"""
