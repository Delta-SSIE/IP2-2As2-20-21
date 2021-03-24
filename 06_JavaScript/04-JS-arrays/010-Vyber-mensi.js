// nejspíš jste napsali takto (a je to správně):
function omezenePolePruchodem(pole, limit) {
    let result = [];
    for (let prvek of pole){
        if (prvek < limit) {
            result.push(prvek);       
        }
    }
    return result;
}


// V javascriptu ale existují i jiné konstrukce, např.
function omezenePole(pole, limit) {
    return pole.filter(x => x < limit);
}


// jednoduché testy 
console.log (omezenePole([23, -7, 6, 3, 12, 2, 0, 0, 5, 17], 4)) // [-7,3,2,0,0];
console.log (omezenePole([23, -7, 6, 3, 12, 2, 0, 0, 5, 17], -8)) // [];