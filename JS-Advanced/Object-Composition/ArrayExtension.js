    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {
        if(!n || n < 0) {
            throw new RangeError("Number given is either absent or negative!");
        }

        return this.slice(n);
    }

    Array.prototype.take = function(n) {
        if(!n || n < 0) {
            throw new RangeError("Number given is either absent or negative!");
        }

        return this.splice(0, n);
    }

    Array.prototype.sum = function() {
        return this.reduce((a, b) => a + b, 0);
    }

    Array.prototype.average = function() {  
        return this.reduce((a, b) => a + b / this.length, 0);
    }

console.log([1, 2, 3, 4, 5].take());