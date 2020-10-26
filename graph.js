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

    hasEdge(fromNode, toNode){
        if(!this.contains(fromNode)){
            return false;
        }
        return !!this.nodes[fromNode].edges[toNode];
    }

    addEdge(fromNode, toNode){
        if(!this.contains(fromNode) || !this.contains(toNode)){
            return false;
        }
        this.nodes[fromNode].edges[toNode] = toNode;
        this.nodes[toNode].edges[fromNode] = fromNode;
    }

    removeEdge(fromNode, toNode) {
        if(!this.contains(fromNode) || !this.contains(toNode)){
            return false;
        }
        delete this.nodes[fromNode].edges[toNode];
        delete this.nodes[toNode].edges[fromNode];
    }

    eachNode(func){
        const keys = Object.keys(this.nodes);
        for(i = 0; i < keys.length; i++){
            func(keys[i]);
        }
    }
}