/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isSubsequence = function (s, t) {
    if (!s) return true;

    for (let i = 0, j = 0; i < t.length; i++) {
        if (t[i] === s[j] && !s[++j]) return true;
    }

    return false;
};
