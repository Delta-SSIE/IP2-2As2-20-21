function soucetZapornychKlasicky(poleCisel) {
    
    let suma = 0;
    
    for (let cislo of poleCisel) {
        if (!isNaN(cislo) && cislo < 0) {
            suma += cislo;
        }    
    }
    
    return suma;
    
}

// a co takhle...
function soucetZapornych(poleCisel) {
    return poleCisel
            .filter( x => !isNaN(x) && x < 0)
            .reduce( (sum, num) => sum + num , 0 );
}

// vyzkoušejte
console.log(soucetZapornych([0,-1,-2,3,-4])); //-7

console.log(soucetZapornych([])); //0

console.log(soucetZapornych([-1, null])); //-1
console.log(soucetZapornych([-2, undefined])); //-2
console.log(soucetZapornych([-3, NaN])); //-3