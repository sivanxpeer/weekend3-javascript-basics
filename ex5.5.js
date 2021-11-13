// Ex5.5 - Abbreviate two words 

function toInitials(string) {
    let seperate = string.split(" ");
    return seperate[0].charAt(0).toUpperCase() + "." + seperate[1].charAt(0).toUpperCase();
}

//test: 

console.log(toInitials("sivan peer"));