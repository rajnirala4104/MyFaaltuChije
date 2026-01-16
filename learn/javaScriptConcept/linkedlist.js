class Node{
   constructor(data){
      this.data = data;
      this.next = null;
   }
}


class LinkedList {
   constructor(){
      this.head = null;
      this.size = 0;
   }

   // method to add an element at top of the linked list
   addAtFirst(data){
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;

      this.size++;
   }

   // method to add an element at last of the linked list
   addAtLast(data){
      const newNode = new Node(data);

      if(!this.head){
         this.head = newNode;
         return;
      }
      
      let current = this.head;
      while(current.next === null){
        current = current.next; 
      }

      current.next = newNode;
   }
}
