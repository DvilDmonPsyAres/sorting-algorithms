// Simple Breadth-First Traversal
//  2 users recently completed this CodingExercise
// Write a function called printBreadthFirst that will traverse the given graph breadth-first, printing each node when visited exactly once, on a newline.

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }



  function printBreadthFirst(start) {
    // your code here
    let queue = [start];
    let visited = new Set();
    visited.add(start);
    while(queue.length > 0) {
        let curr = queue.shift();
        console.log(curr);
        for(let neighbor of adjList[curr]) {
            if(!visited.has(neighbor)) {
               queue.push(neighbor);
               visited.add(neighbor);
            }
        }
    }
  }

  console.log("First Test:")
  printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                        // One possible solution:  3, 2, 4, 1, 5, 6
  console.log("Second Test:")
  printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                        // One possible solution:  6, 4, 3, 5, 2, 1
  console.log("Third Test:")
  printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                        // One possible solution:  4, 3, 5, 6, 2, 1
