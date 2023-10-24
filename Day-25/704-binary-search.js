/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function (nums, target) {
    let lb = 0;
    let ub = nums.length - 1;

    while (lb <= ub) {
        const m = Math.floor((lb + ub) / 2);

        if (nums[m] === target) return m;

        if (nums[m] > target) ub = m - 1;
        else lb = m + 1;
    }

    return -1;
};
