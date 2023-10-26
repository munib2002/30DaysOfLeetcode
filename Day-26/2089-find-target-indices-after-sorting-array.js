/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const targetIndices = function (nums, target) {
    nums.sort((a, b) => a - b);

    let lb = 0;
    let ub = nums.length - 1;

    while (ub >= lb) {
        const m = Math.floor((lb + ub) / 2);

        if (nums[m] === target) {
            const indices = [m];

            for (let i = m - 1; nums[i] === target; i--) indices.unshift(i);
            for (let i = m + 1; nums[i] === target; i++) indices.push(i);

            return indices;
        }

        if (nums[m] > target) ub = m - 1;
        else lb = m + 1;
    }

    return [];
};
