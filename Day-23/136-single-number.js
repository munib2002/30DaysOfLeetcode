/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = nums => nums.reduce((a, c) => a ^ c, 0);
