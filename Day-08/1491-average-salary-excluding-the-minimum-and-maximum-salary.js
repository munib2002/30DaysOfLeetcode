/**
 * @param {number[]} salary
 * @return {number}
 */

const average = function (salary) {
    let total = 0;

    let min = (max = salary[0]);

    for (const s of salary) {
        total += s;

        if (s < min) min = s;
        else if (s > max) max = s;
    }

    total -= min + max;

    return total / (salary.length - 2);
};
