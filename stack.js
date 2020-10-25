class Stack {
    constructor () {
      this.store = [];
    }

    push(data){
        this.store.push(data);
    }

    pop(){
        return this.store.pop();
    }

    peek(){
        return this.store[this.store.length-1];
    }
}

const stack = new Stack();

stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);
stack.pop();
const stackPeek = stack.peek();
console.log(stack, stackPeek);
