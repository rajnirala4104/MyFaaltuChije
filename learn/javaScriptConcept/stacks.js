
const buildStackFunc = (stackSize) => {
   let arr=[];
   for(let i=0; i<=stackSize; i++){
      if(arr.length != stackSize){
         arr.push(i);
      }
   }
   return arr;
}

// console.log(buildStackFunc(5))

class Stack{
   constructor(){
      this.items = [];
   }

   push(element){
      return this.items.push(element);
   }

   pop(element){
      if(this.isEmpty()){
         return "Stack is empty"
      }
      return this.items.pop(element);
   }
   
   peek(){
      if(this.isEmpty()){
         return "Stack is empty"
      }
      return this.items[this.items.length-1]
   }

   isEmpty(){
      return this.items.length === 0
   }
   
   size(){
      return this.items.length
   }

   clear(){
     this.items = [];
   }

}

const newStack = new Stack();
// console.log(newStack.push(5))
// console.log(newStack.items)
// console.log(newStack.push("raj nirala"));
// console.log(newStack.isEmpty())
// console.log(newStack.clear())
// console.log(newStack.size())
// console.log(newStack.items)
// console.log(newStack.peek())

const reversString = (str) => {
   let strStack = new Stack();
   for(let i=0; i<str.length; i++){
      strStack.push(str[i]);
   }

   let finalStr = "";
   for(let i = 0; i<str.length; i++){
      finalStr += strStack.peek()
      strStack.pop();
   }

   return finalStr;
}

console.log(reversString("raj"))
