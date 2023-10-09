/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    let num = 0;

    let prev = 0;

    const conversions = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < s.length; i++) {
        if (!prev) {
            prev = conversions[s[i]];
            continue;
        }

        const c = conversions[s[i]];

        if (prev < c) {
            num += c - prev;
            prev = 0;
        } else {
            num += prev;
            prev = c;
        }
    }

    num += prev;

    return num;
};
