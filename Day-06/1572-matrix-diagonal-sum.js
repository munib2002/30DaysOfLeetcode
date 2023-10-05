/**
 * @param {number[][]} mat
 * @return {number}
 */
let diagonalSum = function (mat) {
    let sum = 0;
    let l = mat.length;

    for (let i = 0; i < l; i++) {
        sum += mat[i][i] + mat[i][l - i - 1];
    }

    if (l % 2) sum -= mat[Math.floor(l / 2)][Math.floor(l / 2)];

    return sum;
};
