/**
 * @param {number[][]} image
 * @return {number[][]}
 */

const flipAndInvertImage = function (image) {
    return image.map(c => {
        for (let i = 0, j = c.length - 1; j >= i; i++, j--) {
            [c[i], c[j]] = [+!c[j], +!c[i]];
        }

        return c;
    });
};
