friendships = {
    'Alice': ['Bob', 'Frank'],
    'Bob': ['Alice', 'Charlie', 'Geraldine'],
    'Charlie': ['David', 'Bob'],
    'David': ['Charlie', 'Frank'],
    'Eve': [],
    'Frank': ['Alice', 'Charlie'],
    'Geraldine': ['Bob']
}

function getNeighbors(node, graph){
    return graph[node];
}

function socialConnections(name, degrees, graph) {
    //Create a queue and enqueue a path to the starting node.
    const queue = [[name]];

    //create a set to store visited nodes
    const visited = new Set();

    const friends = [];

    //While the queue is not empty...
    while(queue.length > 0) {
        //dequeue the firsth path
        let path = queue.shift();

        //grab the las node from the path
        let currentNode = path[path.length - 1];

        // and check if it has been visited
        if(!visited.has(currentNode)) {
            //if not, mark it as visited
            visited.add(currentNode);

            //Add to the friends array if the path is within the number of degrees
            if(path.length > 1 && path.length <= degrees + 1) {
                friends.push(currentNode)
            }

            //Put paths to all its neighbors in the back of the queue
            let neighbors = getNeighbors(currentNode, graph);
            for(let i = 0; i < neighbors.length; i++) {
                let pathCopy = [...path];
                pathCopy.push(neighbors[i]);
                queue.push(pathCopy)
            }
        }
    }

    return friends;
}


console.log(getNeighbors('Alice', friendships))
console.log('friends level 1:')
console.log(socialConnections('Alice', 1, friendships));
console.log('friends level 2:')
console.log(socialConnections('Alice', 2, friendships));
console.log('friends level 3:')
console.log(socialConnections('Alice', 3, friendships));
console.log('friends level 4:')
console.log(socialConnections('Alice', 4, friendships));


// socialConnections('Alice', 1, friendships);
// // ['Bob', 'Frank']

// socialConnections('Alice', 2, friendships);
// // ['Bob', 'Frank', 'Charlie', 'Geraldine']
