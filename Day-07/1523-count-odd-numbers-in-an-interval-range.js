/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = function (low, high) {
    return Math.ceil((high - low) / 2) + (low % 2 && high % 2);
};
