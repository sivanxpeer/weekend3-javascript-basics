// Ex5.4 - To Weird Case 

function toWeirdCase(string){
    let retString="";
    for(let i=0;i<string.length;i++){
        if(i%2==0){
            retString+=string[i].toUpperCase();
        }
        else {
            retString+= string[i];
        }
    }
    return retString;
}

//test:
console.log(toWeirdCase("Weird string case"));

