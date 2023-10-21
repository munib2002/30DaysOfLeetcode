/**
 * @param {number} t
 * @return {number}
 */

class RecentCounter {
    constructor() {
        this.pings = [];
        this.start = 0;
    }

    ping(t) {
        this.pings.push(t);

        if (this.start > 4000) {
            this.pings.splice(0, this.start);
            this.start = 0;
        }

        for (let i = this.start, k = this.pings.length - 2; ; i++, k--) {
            if (this.pings[i] >= t - 3000) {
                this.start = i;

                return this.pings.length - i;
            }

            if (this.pings[k] < t - 3000) {
                this.start = k + 1;

                return this.pings.length - k - 1;
            }
        }
    }
}
