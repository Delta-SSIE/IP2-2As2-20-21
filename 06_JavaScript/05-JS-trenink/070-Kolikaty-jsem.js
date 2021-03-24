// standardně můžeme vyřešit třeba takhle
function kolikatyPruchodem(vsechnyVysledky, index) {
    if (index < 0 || index >= vsechnyVysledky.length)
        return false;
    
    const mujVysledek = vsechnyVysledky[index];
    let poradi = 1;
    
    for (let vysledek of vsechnyVysledky) {
        if (vysledek > mujVysledek) {
            poradi++;
        }
    }
    
    return poradi;
    
}

// ale určitě půjde zkrátit
function kolikaty(vsechnyVysledky, index) {
    if (index < 0 || index >= vsechnyVysledky.length)
        return false;

    return vsechnyVysledky.filter( x => x > vsechnyVysledky[index]).length + 1;
}


console.log(kolikaty([12, 15, 11, 4, 11, 13 ,12], 2)); //5
console.log(kolikaty([1], 0)); //1
console.log(kolikaty([5,4,3,2,1], 4)); //5
console.log(kolikaty([], 4)); //false