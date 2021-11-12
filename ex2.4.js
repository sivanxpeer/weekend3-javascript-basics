// Ex2.4 - Unique 

// There is an array with some numbers. All numbers are equal except for one. Try to find it! 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 
// It’s guaranteed that array contains at least 3 numbers.

function findUnique(array) {
    let obj = {};
    for (let num of array) {
        if (obj[num] > 0) {
            obj[num]++;
        }
        else {
            obj[num] = 1;
        }
    }
    for (key in obj) {
        if (obj[key] == 1)
            return key;
    }
}

//test:

console.log(findUnique([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUnique([0, 0, 0.55, 0, 0]));