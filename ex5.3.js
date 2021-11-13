// Ex5.3 - To Camel Case 
// Complete the method/function so that it converts dash/underscore delimited words into camel 
// casing. The first word within the output should be capitalized only if the original word was 
// capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
 
// Examples 
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior" 
 
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" 

function toCamelCase(stringToCamel){

    let array = stringToCamel.split("\-\_");
    console.log(array);
    for(let i=0;i<stringToCamel.length;i++){
        if(stringToCamel[i]=="_"||stringToCamel[i]=="-"){
            retString[i]= stringToCamel[i+1].toUpperCase();
            continue;
        }
        retString=stringToCamel[i];
    }
    return retString.toString();
}

console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("the-stealth-warrior"));