// You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input:
// const nums = [2, 7, 11, 15];
// const target = 9;

// Output: [0,1]

const arrayIndices = (nums, target) => {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(arrayIndices([2, 7, 1, 5, 6, 7, 9, , 99, 7, 6, 7, 1, 15], 13));
