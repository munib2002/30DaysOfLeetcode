/**
 * @param {string} s
 * @return {string}
 */

const isVowel = c => 'aeiou'.includes(c.toLowerCase());

const reverseVowels = function (s) {
    let output = s.split('');

    for (let i = 0, j = s.length; i < j; i++) {
        if (!isVowel(s[i])) continue;

        while (1) if (isVowel(s[--j])) break;

        output[j] = s[i];
        output[i] = s[j];
    }

    return output.join('');
};
