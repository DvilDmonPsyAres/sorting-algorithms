const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}
/*Simple Breadth-First Search
 2 users recently completed this CodingExercise
Write a function called breadthFirstSearch that takes two nodes as arguments and will traverse the given graph breadth-first, returning true if there is a path from the first node to the second, and false if there is not.

For this exercise, try to write your code from scratch. It's good practice!
*/

function breadthFirstSearch(start, end) {
  // your code here
  let queue = [start];
  let visited = new Set();
  while(queue.length > 0) {
      let current = queue.shift();
      if(current === end) {
          return true;
      }
      for(const neighbor of adjList[current]) {
          if(!visited.has(neighbor)){
              visited.add(neighbor)
              queue.push(neighbor)
          }
      }
  }
  return false
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
