/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

const findDifference = function (nums1, nums2) {
    const m1 = {};
    const a2 = [];
    const processed = {};

    nums1.forEach(c => (m1[c] = true));
    nums2.forEach(c => !processed[c] && (((processed[c] = true) && m1[c] && delete m1[c]) || a2.push(c)));

    return [Object.keys(m1), a2];
};
