const adjList = {
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
