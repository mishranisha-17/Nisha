class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  class Linkedlist {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
      };
      this.tail = this.head;
      // this.length = 1;
    }
    append(value) {
      const newNode = new Node(value);
      if (this.head == null) {
        this.head = Node;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
      }
    }
    printlist() {
      let currentHead = this.head;
      let output = [];
      while (currentHead !== null) {
        output.push(currentHead.value);
        currentHead = currentHead.next;
      }
      console.log(output);
    }
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  
    insertNode(value, index) {
      const newNode = new Node(value);
      let i = 1;
      let previousNode = this.head;
      while (i < index) {
        previousNode = previousNode.next;
        i++;
      }
      newNode.next = previousNode.next;
      previousNode.next = newNode;
      return this;
    }
    search(value){
        let currentHead= this.head
        while (currentHead !== null){
            if (currentHead.value == value)return true;
            currentHead=currentHead.next
        }
        return false
      }
    }
    console.log(n1.search(26))
    
  const n1 = new Linkedlist(1);
  n1.append(52);
  n1.append(25);
  n1.prepend(85);
  n1.insertNode(10, 2);
  
  n1.printlist();
  
  // var obj1 = new Linkedlist(100);
  // Linkedlist.append(32);

  
  // console.log(obj1);
  obj1.print_list();
  
  