class Graph {
    constructor() {
        this.nodes = {};
    }

    addNode(node){
        this.nodes[node] = this.nodes[node] || {edges: {}};
    }

    contains(node){
        return !!this.nodes[node];
    }

    removeNode(node){
        if(this.contains(node)){
            const keys = Object.keys(this.nodes[node].edges);
            for(i = 0; i < keys.length; i++){
                this.removeEdge(node, keys[i]);
            }
            delete this.nodes[node];
        }
    }
}