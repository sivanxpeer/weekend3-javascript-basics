// Simple Math 

// Ex2.1 - Sum of lowest numbers 
// Create a function that returns the sum of the two lowest positive numbers given an array of 
// minimum 4 positive i ntegers. No floats or non-positive integers will be passed. 
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. 
// [10, 343445353, 3453445, 3453545353453] should return 3453455.


function twoLowestSum(array) {
    function compare(a, b) { return a - b; }
    array.sort(compare);
    num1 = array.shift();
    num2 = array.shift();
    return num1 + num2;
}


//tests
console.log(twoLowestSum([19, 5, 42, 2, 77]));
console.log(twoLowestSum([10, 343445353, 3453445, 3453545353453]));