
function nb_year(p0, percent, aug, p) {
    let population = p0;
    let i=0;
    for( i=0; population<p;i++)
        population+= population*(percent/100)+aug;
    return i;
}


//test
console.log(nb_year(1500, 5,100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));