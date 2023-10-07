/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

const findSlope = (p1, p2) => (p2[0] - p1[0] ? (p2[1] - p1[1]) / (p2[0] - p1[0]) : -1);

const checkStraightLine = function (coordinates) {
    const slope = findSlope(coordinates[0], coordinates[1]);

    for (let i = 2; i < coordinates.length; i++) {
        if (findSlope(coordinates[i - 1], coordinates[i]) != slope) return false;
    }

    return true;
};
