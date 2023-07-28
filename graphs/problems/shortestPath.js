function findShortestPath(graph, start, end) {
    const queue = [{ node: start, path: [start] }];
    const visited = new Set([start]);

    while (queue.length > 0) {
      const { node, path } = queue.shift();

      if (node === end) {
        return path;
      }

      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          const newPath = path.concat(neighbor); // Create a new array with the current path and neighbor
          queue.push({ node: neighbor, path: newPath });
          console.log(queue)
        }
      }
    }

    return false; // No path found
  }

  // Example usage:
  const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F', 'G'],
    D: ['B'],
    E: ['B'],
    F: ['C'],
    G: ['C'],
  };

  const startNode = 'A';
  const endNode = 'G';

  const shortestPath = findShortestPath(graph, startNode, endNode);
  console.log(shortestPath); // Output: [ 'A', 'C', 'G' ]


 let adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function aShortestPath(start, end) {
  // your code here
  const queue = [{node: start, path: [start]}]
  let visited = new Set()

  while(queue.length > 0) {
      const {node, path} = queue.shift();

      if(node === end) {
          return path;
      }
      for(neighbor of adjList[node]) {
          if(!visited.has(neighbor)) {
              visited.add(neighbor)
              let newPath = path.concat(neighbor);
              queue.push({node: neighbor, path: newPath});
          }
      }
  }
  return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false



adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}



function degreesOfSeparation(start, end) {
  // your code here
  let visited = new Set();
  let queue = [{node: start, path: [start]}];

  while(queue.length > 0){
      const {node, path} = queue.shift();

      if(node === end) {
          return path.length - 1;
      }

      for(neighbor of adjList[node]) {
          if(!visited.has(neighbor)) {
              visited.add(neighbor);
              let newPath = path.concat(neighbor);
              queue.push({node: neighbor, path: newPath});
          }
      }
  }
  return false
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false


const edges = [
  ['w','x'],
  ['x','y'],
  ['z','y'],
  ['z','v'],
  ['w','v'],
]

function createGraph(edges){
  let graph = {};
  for(let edge of edges) {
    const [a, b] = edge;
    if(!(a in graph)) graph[a] = []
    if(!(b in graph)) graph[b] = []
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

function theShortestPath(edges, nodeA, nodeB){
  const graph = createGraph(edges);
  let visited = new Set([nodeA]);
  const queue = [ [nodeA, 0] ];

  while(queue.length > 0) {
    const[node, distance] = queue.shift();

    if(node === nodeB){
      return distance;
    }
    for(let neighbor of graph[node]) {
      if(!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1
}

console.log(theShortestPath(edges, 'y', 'w'))
