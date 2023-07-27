const matrix = [
    [ 0, 1, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];

function getNeighbors(node, matrix) {
    // Create an array to hold the valid neighbors
    let neighbors = [];

    // UP:
    if(node[0] > 0) {
        // Identify the node above the current node, if it exists
        // Push that node into the new array
        neighbors.push([node[0]-1, node[1]]);
    }
    // DOWN:
    if(node[0] < matrix.length-1) {
        // Identify the node below the current node, if it exists
        // Push that node into the new array
        neighbors.push([node[0]+1, node[1]]);
    }
    // LEFT:
    if(node[1] > 0) {
        // Identify the node to the left of the current node, if it exists
        // Push that node into the new array
        neighbors.push([node[0], node[1]-1]);
    }
    // RIGHT:
    if(node[1] < matrix[0].length-1) {
        // Identify the node to the right of the current node, if it exists
        // Push that node into the new array
        neighbors.push([node[0], node[1]+1])
    }
    // Return the neighbors array
    return neighbors;
}

// returns the correct neighbors from an internal node
console.log(getNeighbors([2,2], matrix)) // returns [ [1,2], [3,2], [1,2], [3,2] ]

// returns the correct neighbors from a corner node
console.log(getNeighbors([0,0], matrix)) // returns [ [1,0], [0,1] ]

// returns the correct neighbors from an edge node
console.log(getNeighbors([2,0], matrix)) // returns [ [1,0], [3,0], [2,1] ]

// Example traversal function stub
function traverseMatrix(matrix, startNode) {
    // traversal logic here
//     Create a queue and enqueue the starting node
    let queue = [startNode]
// Create a set to store visited nodes
    let visited = new Set()
// While the queue is not empty, repeat steps 4-6
    while(queue.length > 0) {
        // Dequeue the first node and check if it's been visited
        let currentNode = queue.shift();
        console.log(currentNode)
        // If not, mark it as visited and DO THE THING
        // Put all its neighbors in the back of the queue
        if(!visited.has(String(currentNode))) {
            visited.add(String(currentNode))
            let neighbors = getNeighbors(currentNode, matrix);
            for(let neighbor of neighbors) {
                if(!visited.has(String(neighbor))) {
                    queue.push(neighbor)
                }
            }
        }
    }

    return visited;
}

//Example search function stub
function searchMatrix(matrix, startNode, thingYouSearchFor) {
    // search logic here
    let visited = new Set();
    let queue = [{node: startNode, path: [startNode]}];
    while(queue.length > 0) {
        let { node, path } = queue.shift();
        // console.log(node)

        if(String(thingYouSearchFor) === String(node)) {
            console.log(true)
            return path
        }
        // console.log(node)
        if(!visited.has(String(node))) {
            visited.add(String(node))
            let neighbors = getNeighbors(node, matrix);
            // console.log(neighbors)
            for(const neighbor of neighbors) {
                if(!visited.has(neighbor)) {
                    // console.log(neighbor)
                    let newPath = path.concat([neighbor]);
                    queue.push({node: neighbor, path : newPath})
                    }
                }
            }
        }
        // console.log(visited)
        console.log(false)
        return -1;
    }

    // The thingYouSearchFor might represent an end node, a value in the matrix,
    // or some sort of condition that would need to be met to end the search


console.log(traverseMatrix(matrix, [1,1]))
console.log(searchMatrix(matrix, [0,0], [4,4]))
console.log(searchMatrix(matrix, [0,0], [5,5]))
