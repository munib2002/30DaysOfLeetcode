/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

const guessNumber = function (n) {
    let lb = 1;
    let ub = n;

    while (true) {
        const m = Math.floor((lb + ub) / 2);

        switch (guess(m)) {
            case 0:
                return m;
            case 1:
                lb = m + 1;
                break;
            case -1:
                ub = m - 1;
                break;
        }
    }
};
