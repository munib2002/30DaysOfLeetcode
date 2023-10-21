/**
 * @param {number} n
 * @return {number[]}
 */

const countBits = function (n) {
    if (!n) return [0];

    let nums = [0, 1];
    let resetPoint = 1;

    for (let i = 2; i <= n; i++) {
        nums.push(1 + nums[i % resetPoint]);

        if (!(i % resetPoint)) resetPoint *= 2;
    }

    return nums;
};
