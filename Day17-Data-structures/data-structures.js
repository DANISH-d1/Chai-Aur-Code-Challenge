//Stack-

class Stack{

  constructor(){
    this.stack = [];
  }

  push(element){
    this.stack.push(element);
  }

  pop(){
    if(this.isEmpty()){
      return 'Stack is Empty';
    }
    return this.stack.pop();
  }

  peek(){
    if(this.isEmpty()){
      return 'Stack is Empty';
    }
    return this.stack[this.size() - 1];
  }

  isEmpty(){
    return this.size() === 0;
  }

  size(){
    return this.stack.length;
  }
}

const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(1);

console.log(stack.peek());
console.log(stack.size());

stack.pop();


console.log(stack.peek());
console.log(stack.size());

stack.pop();
stack.pop();

console.log(stack.peek());



//Queue

class Queue{
  constructor(){
    this.queue = [];
  }

  enqueue(element){
    this.queue.push(element);    
  }

  dequeue(){
    if(this.isEmpty()){
      return "UnderFlow";
    }
    return this.queue.shift();
  }

  peek(){
    if(this.isEmpty()){
      return "No element in the queue";
    }
   return this.queue[0]
  }
  
  isEmpty(){
    return this.size() === 0;
  }

  size(){
    return this.queue.length;
  }
}


const queue = new Queue();

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(1);


console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());
console.log(queue.size());