/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums, s = 0) => nums.map(c => (s = c + s));
