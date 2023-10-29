/**
 * @param {number[][]} rectangles
 * @return {number}
 */

const countGoodRectangles = function (rectangles) {
    let maxLen = 0;
    let count = 0;

    for (const [l, w] of rectangles) {
        const curMaxLen = l < w ? l : w;

        if (curMaxLen > maxLen) {
            maxLen = curMaxLen;
            count = 1;
            continue;
        }

        if (curMaxLen === maxLen) count++;
    }

    return count;
};
