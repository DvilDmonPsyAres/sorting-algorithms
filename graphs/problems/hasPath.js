const hasPath = (graph, src, dst) => {

    let visited = new Set();
    let stack = [src];
    while(stack.length > 0) {

        let curr = stack.pop()
        if(curr === dst) {
            return true;
        }

        visited.add(curr)

        for(let neighbor of graph[curr]) {
            if(!visited.has(neighbor)) {
                stack.push(neighbor);
            }
        }
    }

    return false;
}

const graph = {
    f: ["g","i"],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j: ['i'],
    k: []
};

console.log(hasPath(graph, 'f', 'k')); // true
console.log(hasPath(graph, 'j', 'f')); // false

let hasPath2 = (graph,src,dst) => {
    if(src === dst) return true;

    for(let neighbor of graph[src]) {
        if(hasPath(graph, neighbor, dst) === true) {
            return true;
        }
    }

    return false;
}

console.log(hasPath2(graph, 'f', 'k')); // true
console.log(hasPath2(graph, 'j', 'f')); // false


let hasPathBreadth = (graph, src, dst) => {
    let queue = [src];

    while(queue.length > 0) {
        let curr = queue.shift();
        if(curr === dst) {
            return true;
        }
        for(let neighbors of graph[curr]) {
            queue.push(neighbors);
        }
    }

    return false;
}
console.log(hasPathBreadth(graph, 'f', 'k')); // true
console.log(hasPathBreadth(graph, 'j', 'f')); // false
