/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = o => o.reduce((a, c) => a + (c[1] == '+' || -1), 0);
