/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const isSelfDividing = num => {
    let rem = num;

    while (rem) {
        const d = rem % 10;

        if (!d || num % d) return false;

        rem = Math.floor(rem / 10);
    }

    return true;
};

const selfDividingNumbers = function (left, right) {
    const res = [];

    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) res.push(i);
    }

    return res;
};
