
function fibonacci(n) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i <= n; i++) {
        fib[i]= fib[i-1]+fib[i-2];
    }
    return fib[n];
}

//test:
console.log(fibonacci(4));


//todo - refactor