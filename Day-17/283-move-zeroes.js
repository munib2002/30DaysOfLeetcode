/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const moveZeroes = function (nums) {
    for (let i = 1, zero = 0; i < nums.length; i++) {
        if (nums[zero]) {
            zero++;
            continue;
        }

        if (nums[i]) {
            nums[zero++] = nums[i];
            nums[i] = 0;
        }
    }
};
