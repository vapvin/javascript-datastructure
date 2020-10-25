class Queue {
    constructor(){
        this.store =[];
    }

    enqueue(data){
        this.store.push(data)
    }

    dequeue(){
        return this.store.shift();
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
queue.dequeue();

console.log(queue)
