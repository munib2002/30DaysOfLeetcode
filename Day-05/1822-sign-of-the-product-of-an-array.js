/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let sign = 1;

    for (const n of nums) {
        if (!n) return 0;

        if (n < 0) sign *= -1;
    }

    return sign;
};
