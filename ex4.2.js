function tribonacci(arraySeed,n) {
    trib = [];
    for (let i = 0; i < arraySeed.length; i++) {
        trib[i] = arraySeed[i];
    }
    for (let i = 3; i <= n; i++) {
        trib[i] = trib[i - 1] + trib[i - 2] + trib[i - 3];
    }
    return trib;
}

//tests:

console.log(tribonacci([0,0,1],8));
console.log(tribonacci([1,1,1],8));