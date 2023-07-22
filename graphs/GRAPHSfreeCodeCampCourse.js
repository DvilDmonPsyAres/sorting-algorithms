let graph = {
    a: ['b', 'c'],  // a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

const depthFirstPrint = (graph, source) => {
    let stack = [source];

    while(stack.length > 0) {
        let current = stack.pop();
        console.log(current);

        for(let neighbor of graph[current]) {
            stack.push(neighbor);
        }


    }
}


/*RECURSIVE IMPLEMENTATION*/
const depthFirstPrintRecursive = (graph, source) => {
    console.log(source);
    for(let neighbor of graph[source]) {
        depthFirstPrint(graph, neighbor);
    }
}


/*whitout speacial data structure cannot use recursion for it*/
const breadthFirstPrint = (graph, source) => {
    let queue = [source];
    while(queue.length > 0) {
        let current = queue.shift();
        console.log(current)
        for(let neighbor of graph[current]) {
            queue.push(neighbor);
        }

    }
}

console.log("depthFirst")
depthFirstPrint(graph, 'a'); //abcdfce   // acebdf

console.log("--------------");
console.log("breathFirst")

breadthFirstPrint(graph, 'a') // acbedf

graph = {
    a: ['c', 'b'],  // a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};
console.log("--------------");
console.log("breathFirst2")

breadthFirstPrint(graph, 'a') // acbedf
