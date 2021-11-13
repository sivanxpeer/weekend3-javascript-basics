// Ex5.6 - Mask 
 
// Your task is to write a function maskify, which changes all but the last four characters into '#'. 
 
function maskify(wordToHide){
    let retString="";
    for(let i=0;i<wordToHide.length-4;i++){
        retString+="#";
    }
    for(let i=wordToHide.length-4;i<wordToHide.length;i++){
        retString+=wordToHide[i];
    }
    return retString;
}

//tests:
console.log(maskify("4556364607935616"));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));