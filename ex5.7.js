// Ex5.7 - shortest words 
// Simple, given a string of words, return the ​length​ of the shortest word(s). 
// String will never be empty and you do not need to account for different data types

//todo - works only with one space - try to refactor it for all white spaces

function shortestWord(string){
    const arr = string.split(" ");
    let short = Infinity;
    for(let word of arr){
        if(word.length<=short)
            short = word.length;
    }
    // console.log(arr);
    return short;
}

//tests
console.log(shortestWord("hello my name is sivan"));
console.log(shortestWord("hello my name ifffffs sivan"));
console.log(shortestWord("hello 44444 meeey name ifffffs sivan"));
console.log(shortestWord("222 hello meeey name ifffffs sivan 1"));