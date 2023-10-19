/**
 * @param {number[]} arr
 * @return {boolean}
 */

const uniqueOccurrences = function (arr) {
    let occurrences = {};
    let parsed = {};

    for (const v of arr) occurrences[v] = 1 + (occurrences[v] || 0);

    for (const key in occurrences) {
        if (parsed[occurrences[key]]) return false;

        parsed[occurrences[key]] = true;
    }

    return true;
};
