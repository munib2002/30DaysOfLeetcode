/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += digits[i] == 9 ? -9 : 1;

        if (digits[i]) return digits;
    }

    digits.unshift(1);

    return digits;
};
