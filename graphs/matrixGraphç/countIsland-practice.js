function getNeighbors(row, col, matrix) {
    const neighbors = [];
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const isValid = (r, c) => r >= 0 && r < numRows && c >= 0 && c < numCols && matrix[r][c] === 1;

    // Check top
    if (isValid(row - 1, col)) {
      neighbors.push([row - 1, col]);
    }
    // Check top right
    if (isValid(row - 1, col + 1)) {
      neighbors.push([row - 1, col + 1]);
    }
    // Check right
    if (isValid(row, col + 1)) {
      neighbors.push([row, col + 1]);
    }
    // Check bottom right
    if (isValid(row + 1, col + 1)) {
      neighbors.push([row + 1, col + 1]);
    }
    // Check bottom
    if (isValid(row + 1, col)) {
      neighbors.push([row + 1, col]);
    }
    // Check bottom left
    if (isValid(row + 1, col - 1)) {
      neighbors.push([row + 1, col - 1]);
    }
    // Check left
    if (isValid(row, col - 1)) {
      neighbors.push([row, col - 1]);
    }
    // Check top left
    if (isValid(row - 1, col - 1)) {
      neighbors.push([row - 1, col - 1]);
    }

    return neighbors;
    // const neighbors = [];
    // // Check top
    // if(row > 0) {
    //   if(matrix[row-1][col] === 1) {
    //     neighbors.push([row-1,col])
    //   }
    // }
    // // Check top right
    // if(row > 0 && col < matrix[0].length-1) {
    //   if(matrix[row-1][col+1] === 1) {
    //     neighbors.push([row-1,col+1])
    //   }
    // }
    // // Check right
    // if(col < matrix[0].length-1) {
    //   if(matrix[row][col+1] === 1) {
    //     neighbors.push([row,col+1])
    //   }
    // }
    // // Check bottom right
    // if(row < matrix.length-1 && col < matrix[0].length-1){
    //   if(matrix[row+1][col+1] === 1) {
    //     neighbors.push([row+1,col+1])
    //   }
    // }
    // // Check bottom
    // if(row < matrix.length - 1) {
    //   if(matrix[row+1][col] === 1) {
    //     neighbors.push([row+1,col])
    //   }
    // }
    // // Check bottom left
    // if(row < matrix.length - 1 && col > 0) {
    //   if(matrix[row+1][col-1] === 1) {
    //     neighbors.push([row+1,col-1])
    //   }
    // }
    // // Check left
    // if(col > 0) {
    //   if(matrix[row][col-1] === 1) {
    //     neighbors.push([row,col-1])
    //   }
    // }
    // // Check top left
    // if(row > 0 && col > 0) {
    //   if(matrix[row-1][col-1] === 1) {
    //     neighbors.push([row-1,col-1])
    //   }
    // }
    // // Return neighbors
    // return neighbors;

  }

  function countIslands(matrix) {
    // Create a visited set to store visited nodes
    // Initialize count to 0
    let visited = new Set();
    let count = 0;

    // Iterate through all indices in matrix
    for(let r = 0; r < matrix.length; r++) {
      for(let c = 0; c < matrix[0].length; c++) {
        let currentNode = matrix[r][c]
        let nodeString = r + ',' + c;
        if(!visited.has(nodeString)) {
          visited.add(nodeString)
          if(currentNode === 1) {
            // visited.add(nodeString)
            count++
            console.log(visited)
            let stack = [[r,c]]
            while(stack.length > 0) {
              let [row, col] = stack.shift();
              let neighbors = getNeighbors(row, col, matrix);
              for(let neighbor of neighbors) {
                let [row, col] = neighbor
                let neighborString = row+','+col
                if(!visited.has(neighborString)) {
                  stack.push(neighbor)
                  visited.add(neighborString);
                }
              }
            }
          }
        }
      }
    }
    return count;

  }

  // Uncomment the lines below for local testing
  const matrix = [
                  [1,1,1,0,0],
                  [0,1,1,0,1],
                  [0,1,1,0,1]
                ]

  console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
  console.log(getNeighbors(2,4, matrix)) // [[1,4]]

  const matrix2 = [
                      [1,1,1,0,1],
                      [0,0,0,0,1],
                      [1,0,0,1,0],
                  ]

  console.log(countIslands(matrix)) // 2
  console.log(countIslands(matrix2)); // 3
  let matrix1 = [
    [1,1,1,1,0],
    [0,1,1,0,1],
    [0,1,1,0,1],
  ]
  console.log(`test: ${countIslands(matrix1)}`)
