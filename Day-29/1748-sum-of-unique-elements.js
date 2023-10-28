/**
 * @param {number[]} nums
 * @return {number}
 */

const sumOfUnique = function (nums) {
    let sum = 0;
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];

        if (map[n] !== undefined) {
            sum -= map[n] * n;
            map[n] = 0;
            continue;
        }

        sum += n;
        map[n] = 1;
    }

    return sum;
};
