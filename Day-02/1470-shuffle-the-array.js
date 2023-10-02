/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
    let a = [];

    for (let i = 0; i < n; i++) {
        a.push(nums[i], nums[n + i]);
    }

    return a;
};
