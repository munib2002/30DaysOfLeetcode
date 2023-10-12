/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const gcdOfStrings = function (str1, str2) {
    let pattern = str1[0];

    for (let i = 1; i < str1.length; i++) {
        if (pattern.repeat(str1.length / i) === str1) break;

        pattern += str1[i];
    }

    const patternCount1 = str1.length / pattern.length;
    const patternCount2 = str2.length / pattern.length;

    if (pattern.repeat(patternCount2) !== str2) return '';

    for (let i = patternCount1 < patternCount2 ? patternCount1 : patternCount2; ; i--) {
        if (patternCount1 % i || patternCount2 % i) continue;

        return pattern.repeat(i);
    }
};
