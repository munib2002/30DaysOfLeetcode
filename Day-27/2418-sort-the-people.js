/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

const sortPeople = (names, heights) =>
    names
        .map((c, i) => [c, heights[i]])
        .sort((a, b) => b[1] - a[1])
        .map(c => c[0]);
