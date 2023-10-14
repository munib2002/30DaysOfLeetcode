/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

const canPlaceFlowers = function (flowerbed, n) {
    if (n == 0) return true;

    for (let i = 0, c = 0; i < flowerbed.length; i += 2) {
        if (flowerbed[i]) continue;

        if (flowerbed[i + 1]) {
            i++;
            continue;
        }

        if (++c >= n) return true;
    }

    return false;
};
