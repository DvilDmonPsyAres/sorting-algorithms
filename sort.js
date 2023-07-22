let nums = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
nums.sort();
console.log(nums);

function compareNumbers(a, b) {
    return a - b;
  }

console.log(nums.sort(compareNumbers))


nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function oddEvenCompare(a, b) {
  if (a % 2 === 1 && b % 2 === 0) return 1;
  if (a % 2 === 0 && b % 2 === 1) return -1;
  return a - b;
}
console.log(nums.sort(oddEvenCompare));


nums = [0, 1, 0, 4, 15];

function moveZeroesCompare(a, b) {
  if (a === 0) return 1;
  if (b === 0) return -1;
  return a - b;
}
console.log(nums.sort(moveZeroesCompare));
