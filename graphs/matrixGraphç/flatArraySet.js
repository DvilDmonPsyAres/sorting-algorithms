// Sample matrix (2D array)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 3] // Duplicate row
  ];

  // Step 1: Flatten the matrix into a 1D array
  const flatArray = matrix.flat();

  // Step 2: Create a new set from the flatArray
  const set = new Set(flatArray);

  console.log(set);
  console.log(flatArray);
