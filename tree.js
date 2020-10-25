class Node {
    constructor(data, child = []){
        this.data = data;
        this.child = child;
    }
}

const tree = new Node('first', [
    new Node('sec'),
    new Node('third'),
    new Node('Last', [
        new Node('last-child')
    ])
]);

const search = node => {
    console.log(node.data);
    for (let children of node.child){
        search(children);
    }
}

search(tree);