class Node {
    /* A node in a linked list contains two properties:
       - `data`: Stores the value of the node.
       - `next`: A pointer to the next node in the list.
       
       Different types of linked lists may include additional properties.
       For example, a doubly linked list also has a `prev` pointer to the previous node.
    */
    constructor(data = null){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    /*
    The LinkedList class keeps track of the first node (head). 
    From the head, we can access the rest of the list by following the `next` pointers.
    The head is set to `null` by default because the list starts empty.
    */
    constructor(){
        this.head = null
    }
    appendToTail(data){
        // I created a variable `curr` to keep track of the current node, starting at the head. 
        let curr = this.head;
        // If the list is empty (`curr` is null), that means there's no head yet, 
        // so I set `head` to a new node and return. 
        if(curr === null) {
            this.head = new Node(data);
            return;
        }
        // Otherwise, I move `curr` through the list until it reaches the last node. 
        while(curr.next !== null){
            curr = curr.next;
        }
        // Once there, I attach a new node to the end.
        curr.next = new Node(data);
    }
    prependToHead(data){
        // To add a new head, I first store the current head in a variable called `next`. 
        const next = this.head;
        // Then, I set the head to the new node. 
        this.head = new Node(data);
        /*
        Finally, I make the new head point to the old head, 
        which is stored in the `next` variable
        */
        this.head.next = next;
    }
    removeHead(){
        //I first check if there's no head, in which case I return null.
        if(this.head === null) return null;
        // If there is a head, I store its data in a variable called `data` so I can return it later.
        const data = this.head.data;
        // Then, I update the head to point to the next node in the list, effectively removing the old head.
        // Finally, I return the data of the node that was removed.
        this.head = this.head.next;
        return data;
    }
    contains(data){
        // I create a `curr` variable to keep track of the current node we're on, starting from the head.
        let curr = this.head;
        // I use a while loop to iterate through the linked list. The loop ends when `curr` is null, meaning we've reached the end of the list.
        while(curr){
            // For each node, I check if its data matches the given data.
            // If a match is found, I return true.
            if(curr.data === data) return true;
            // If no match, I move to the next node.
            curr = curr.next;
        }
        // If the loop finishes without finding a match, it means the data isn't in the list, so I return false.
        return false;
    }
    length(){
        // I create a `curr` variable to keep track of the current node we're on, starting from the head.
        let curr = this.head
        // I initialize a `length` variable to count the nodes, starting at 0.
        let length = 0;
        // I use a while loop to iterate through the list. For each node, I increment `length` by 1.
        while(curr){
            length++;
            curr = curr.next;
        }
        // Once the loop finishes, `length` will hold the total number of nodes in the list.
        return length;
    }
}

const isCyclic = (headNode) => {
    // I set up two variables, `slow` and `fast`, both starting at the head node.
    // The `slow` pointer moves one step at a time, while the `fast` pointer moves two steps at a time.
    let slow = headNode;
    let fast = headNode.next;
    // The while loop runs as long as `fast` and `fast.next` are not null, meaning we're still within the list.
    while(fast && fast.next){
        // If the `slow` and `fast` pointers meet at the same node, it means the fast pointer has looped back around,
        // meaning theres a cycle in the list, so we return true.
        if(slow === fast) return true;
        // If no match, we move `slow` one step and `fast` two steps.
        slow = slow.next;
        fast = fast.next.next;
    }
    // If the loop ends without finding a match, it means `fast` reached the end of the list, so there's no cycle.
    return false;
};

const reverse = (headNode) => {
    // I initialize three variables:
    // `current` to keep track of the current node we're working on,
    // `next` to temporarily store the next node to prevent losing access to it,
    // `previous` to store the node that will be the next node after reversal.
    let current = headNode
    let next = current;
    let previous = null;
    // I loop through the list until all nodes are reversed.
    while(current){
        // For each iteration, I set the `next` variable to be the upcoming node, so we don't lose access to it.
        next = current.next;
        // I reverse the direction by making the current node point to the previous node.
        current.next = previous;
        // I then move `previous` and `current` forward in the list.
        previous = current;
        current = next;
    }
    // Once the loop finishes, `previous` will be the new head of the reversed list, so I return it.
    return previous;
};

const mergeLists = (a, b) => {
    // I create a new empty node to act as the head of the merged list.
    let newList = new Node();
    // I initialize a `curr` variable that will always point to the last node in the new list, 
    // so I can easily add new nodes to the end.
    let curr = newList;
    // I loop through both lists while there are still nodes in both.
    while(a && b){
        // I compare the data of both nodes, and I add the smaller one to the new list.
        // Then, I move the pointer of the list that had the smaller node to the next node.
        if( a.data <= b.data){
            curr.next = a;
            a = a.next;
        } else {
            curr.next = b;
            b = b.next;
        }
        // I move `curr` to the next node, so we can keep adding nodes to the merged list.
        curr = curr.next;
    }
    // Once the loop ends, if any of the lists still have remaining nodes,
    // I append them to the end of the new list.
    curr.next = a || b;
    // I return `newList.next` to not include the empty starting node and get the merged list.
    return newList.next;
};

const removeDuplicates = (headNode) => {
    // I create a `Set` to store unique values from the nodes.
    // Using a `Set` allows for constant time lookups (O(1)), whereas using an array would take linear time (O(n)).
    let nodeTracker = new Set();
    // `curr` keeps track of the current node we are iterating through.
    let curr = headNode;
    let previous = null;
    while(curr){
        // If the current node's data is already in the `Set`, 
        // we remove it by making `previous.next` skip over `curr` and point to the next node.
        if(nodeTracker.has(curr.data)){
            previous.next = curr.next;
        } else {
            // If the data isn't in the `Set`, we add it and move `previous` up to `curr`.
            nodeTracker.add(curr.data);
            previous = curr;
        }
        // Move `curr` to the next node in the list.
        curr = curr.next;
    }
    // Return the modified linked list without duplicates.
    return headNode;
};

module.exports = {
    Node, LinkedList, isCyclic, reverse, mergeLists, removeDuplicates
}
