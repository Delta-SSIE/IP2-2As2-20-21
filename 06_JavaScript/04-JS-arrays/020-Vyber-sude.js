// nejspíš jste napsali takto (a je to správně):
function sudePrvkyPruchodem(pole) {
    let result = [];
    for (let prvek of pole){
        if (prvek >= 0 && prvek % 2 === 0) {
            result.push(prvek);       
        }
    }
    return result;
}


// V javascriptu ale existují i jiné konstrukce, např.
function sudePrvky(pole) {
    return pole.filter(x => x >= 0 && x % 2 === 0);
}


// jednoduché testy 
console.log (sudePrvky([23, -8, 6, 3, 12, 2, 0, 0, 5, 18, 6, 14, 15])) // [6,12,2,0,0,18,6,14];
console.log (sudePrvky([7, -6])) // [];