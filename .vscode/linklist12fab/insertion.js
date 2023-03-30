// Creating a node
class Node {
      
    constructor(){
        this.value = 0;
        this.next = null;
    }
      
}
  
  
let head = null;
let one = null;
let two = null;
let three = null;
let four = null;
let five = null;
  
// allocate 5 nodes in the heap
one = new Node();
two = new Node();
three = new Node();
four = new Node();
five = new Node();
  
// Assign value values
one.value = 1;
two.value = 2;
three.value = 3;
  four.value = 4;
  five.value =5;

// Connect nodes

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = null;
  
// print the linked list value

head = one;
while (head != null) {
    document.write(head.value);
    head = head.next;
}
  
