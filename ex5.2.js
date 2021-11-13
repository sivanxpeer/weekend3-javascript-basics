// Ex5.2 - String Repeat 
// Write a function called repeat_str which repeats the given string src exactly count times. 
// repeatStr(6, "I") // "IIIIII" 
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" 

function repeat_str(times, string) {
    //    return string.repeat(times,string);
    let retString="";
    for(let i=0;i<times;i++){
        retString+=string;
    }
    return retString;
}

//tests:
console.log(repeat_str(5,"hello"));
console.log(repeat_str(6,"I"));