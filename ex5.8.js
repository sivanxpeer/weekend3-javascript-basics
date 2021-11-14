// Ex5.8 - shortest words version 2 
// Given a string of words, return the longest word[s]. 
// String will never be empty and you do not need to account for different data types.   

function getLongestLength(string){
    return Math.max(...string.split(' ').map(word => word.length));
}
function longestWords(string) {
    const arr = string.split(" ");
    let longest = -100;
    let longestWordsList = [];
    for (let word of arr) {
        if (word.length == getLongestLength(string)) {
            longestWordsList.push(word);
        }
    }
    return longestWordsList;
}




console.log(longestWords("is is name is hihihihih sivan beautiful hello you are beautiful"));
