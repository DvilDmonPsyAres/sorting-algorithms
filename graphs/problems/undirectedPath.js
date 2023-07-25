const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
];

// undirectedPath(edges, 'j', 'm'); //true
let hasPath = (graph, src, dst, visited) => {

    if(src === dst) return true;
    if(visited.has(src)) return false;

    visited.add(src)
    for(let neighbor of graph[src]) {
        if(hasPath(graph, neighbor, dst, visited) === true) {
            return true;
        }
    }
    return false;
}

const buildGraph = (edges) => {
    const graph = {};

    for(let edge of edges) {
        const [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}

// const undirectedPath = (edges, nodeA, nodeB) {
const undirectedPath = (edges, nodeA, nodeB) => {
    let graph =  buildGraph(edges);

    return hasPath(graph, nodeA, nodeB, new Set());
}
// }


console.log(undirectedPath(edges, "i", "k"));
console.log(undirectedPath(edges, "i", "o"));
