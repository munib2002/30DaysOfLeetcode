/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

const mergeAlternately = function (word1, word2) {
    let merged = '';

    for (let i = 0; ; i++) {
        if (!word1[i]) {
            merged += word2.slice(i);
            break;
        }

        if (!word2[i]) {
            merged += word1.slice(i);
            break;
        }

        merged += word1[i] + word2[i];
    }

    return merged;
};
