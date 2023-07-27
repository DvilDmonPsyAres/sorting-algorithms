function getNeighbors(row, col, graph) {
    const neighbors = [];
    let element = String(1)
    // console.log(element)
    // Check top
    if(row > 0) {
        if(String(graph[row-1][col]) === element) {
        neighbors.push([row-1,col]);
        }
    }
    // Check bottom
    if(row < graph.length-1) {
        if(String(graph[row+1][col]) === element) {
        neighbors.push([row+1,col])
        }
    }
    // Check left
    if(col > 0) {
        if(String(graph[row][col-1]) === element) {
        neighbors.push([row,col-1]);
        }
    }
    // Check right
    if(col < graph[0].length-1) {
        if(String(graph[row][col+1]) === element) {
        neighbors.push([row,col+1]);
        }
    }
    // Return neighbors
    return neighbors;
}


function islandSize(row, col, graph) {

    // Create a visited set to store visited nodes
    let visited = new Set();

    // Create a stack, put the starting node in the stack
    let stack = [[row,col]];
    // Put the stringified starting node in visited
    visited.add(String([row,col]))

    // Initialize size to 0
    let size = 0;
    // While the stack is not empty,
    while(stack.length > 0) {
        // Pop the first node
        let node = stack.pop();

        // DO THE THING (increment size by 1)
        size++;

        let neighbors = getNeighbors(node[0], node[1], graph)

    for(let neighbor of neighbors) {

        if(!visited.has(String(neighbor))) {
            // Then push all the UNVISITED neighbors on top of the stack
            stack.push(neighbor);
            // and mark them as visited
            visited.add(String(neighbor))
        }
    }
        // HINT: This is what your helper function `getNeighbors` is for
        // HINT: Remember, you're storing your visited nodes as strings!
        // console.log(visited)
    }

    return size;
}

matrix = [
    [1,1,1,0,0],
    [0,1,1,0,1],
    [0,1,1,0,1],
]

    //   console.log(getNeighbors(1,0, matrix))
    //   console.log(islandSize(0,0, matrix))
    //   console.log(islandSize(2,4, matrix))


const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    for(let r = 0; r < grid.length; r += 1) {
        for(let c = 0; c < grid[0].length; c += 1) {
            if(explore(grid, r, c, visited) === true){
                // console.log(visited)
                count++;
                // console.log(count)
            }
        }
    }

    return count;
}

const explore = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid.length;
    if(!rowInbounds || !colInbounds) return false;

    if(grid[r][c] === 'W') return false;

    const pos = r + ',' + c;
    if(visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);

    return true;
}

const grid= [
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','W'],
]




const minimunIsland = (grid) => {
    let visited = new Set();

    let minSize = Infinity;
    for(let r = 0; r < grid.length; r += 1) {
        for(let c = 0; c < grid[0].length; c += 1) {
            const size = exploreSize(grid, r, c, visited)
            if(size < minSize && size > 0) {
            minSize = size;
            }
        }
    }

    return minSize;
};

const exploreSize = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if(!rowInbounds || !colInbounds) return 0;

    if(grid[r][c] === 'W') return 0;

    const pos = r + ',' + c;

    if(visited.has(pos)) return 0;
    visited.add(pos);

    let size = 1;
    size += exploreSize(grid, r - 1, c, visited);
    size += exploreSize(grid, r + 1, c, visited);
    size += exploreSize(grid, r, c - 1, visited);
    size += exploreSize(grid, r, c + 1, visited);

    return size;
}

console.log(`count islands: ${islandCount(grid)}`)
console.log(`minimum Island: ${minimunIsland(grid)}`)
