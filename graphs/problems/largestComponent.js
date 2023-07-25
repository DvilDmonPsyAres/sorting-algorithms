const largestComponent = (graph) => {
    let visited = new Set();
    let longest = 0;
    //because we are iterating over a js object
    for(let node in graph){
        const size = exploreSize(graph, node, visited);
        if(size > longest) longest = size
    }
    return longest;
}

const exploreSize = (graph, node, visited) => {
    if(visited.has(node)) return 0;
    visited.add(node);

    let size = 1;

    for(let neighbor of graph[node]) {
        size += exploreSize(graph, neighbor, visited)
    }

    return size;
}

console.log(largestComponent({ 0: ['8','1','5'],
    1: ['0'],
    5: ['0','8'],
    8: ['0','5'],
    2: ['3','4'],
    3: ['2','4'],
    4: ['3','2'],})); // 4





































// let connectedComponentsCount = graph => {
//     let visited = new Set();
//     let count = 0;
//     let components = new Array()

//     function explore(graph, current, visited, component) {
//         if(visited.has(String(current))) {
//             return false;
//         }
//         visited.add(String(current))

//         for(let neighbor of graph[current]) {
//             component.push(neighbor)
//             explore(graph, neighbor, visited, component)
//         }
//         return component;
//     }

//     for(let node in graph) {
//             components.push(explore(graph, node, visited, new Array));
//     }

//     let largestComponent = components[0];
//     for(let i = 0; i < components.length; i++) {
//         if(largestComponent.length < components[i]) {
//             largestComponent = components[i]
//         }
//     }
//     console.log(components);
//     return `largest Component have a length of ${largestComponent.length} and this is the component: ${largestComponent}`
// }


// console.log(connectedComponentsCount({ 0: [8,1,5],
//     1: [0],
//     5: [0,8],
//     8: [0,5],
//     2: [3,4],
//     3: [2,4],
//     4: [3,2],})); // 2
