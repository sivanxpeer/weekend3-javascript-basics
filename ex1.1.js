// Basic  
// Ex1.1 - Yes or No 
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. 

function isBool(boolParam) {
    if (Boolean(boolParam) === true){ 
        return "Yes"; 
    }
    else return "No";
}

//test
console.log(isBool("dflkdf"));
