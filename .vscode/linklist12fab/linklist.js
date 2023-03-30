//a Linked List is a linear data structure. 
//Unlike arrays, linked list elements are not stored at a contiguous location; the elements are linked using pointers.
// They include a series of connected nodes. Here, each node stores the data and the address of the next node.

// class Node {
//   constructor(value) {
//       this.value = value;
//       this.next = null;
//   }
// }

// class linkedlist{
//   constructor() {
//       this.head = null
//       this.size = 0;
//   }

//   isEmpty() { return this.size === 0 }
//   getHead() { return this.head; }
//   getSize() { return this.size; }

//   appendNode(value){
//       var newNode = new Node(value)


//       if (this.isEmpty()) {
//           this.head = newNode;
//       } else {
//           let currentNode = this.head;
//           while (currentNode.next != null) {
//               currentNode = currentNode.next;
//           }
//           currentNode.next = newNode;
//       }
//       this.size++;
//   }

//   printData() {
//       if (this.isEmpty()) {
//           console.log("list is empty");
//       } else {
//           let currentNode = this.head;
//           while (currentNode != null) {
//               console.log(currentNode.value);
//               currentNode = currentNode.next;
//           }
//       }
//   }

// }

// const studentID = new linkedlist();
// // console.log(studentID.getSize());

// studentID.appendNode(1);

// studentID.appendNode(2);

// studentID.appendNode(3);

// studentID.appendNode(4);

// studentID.appendNode(5);

// studentID.printData();


// Linked list implementation in javascript 
  
  
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
  