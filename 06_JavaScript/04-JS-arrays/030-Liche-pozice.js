// nejspíš jste napsali takto (a je to správně):
function lichePozicePruchodem(pole) {
    let result = [];
    for (let i = 0; i < pole.length; i++){
        if (i % 2 === 0) {
            result.push(pole[i]);       
        }
    }
    return result;
}


// V javascriptu ale existují i jiné konstrukce, např.
function lichePozice(pole) {
    return pole.filter((x,i) => i % 2 === 0);
}


// jednoduché testy 
console.log (lichePozice([23, -8, 6, 3, 12, 2, 0, 0, 5, 18, 6, 14, 15])) // [23,6,12,0,5,6,15];
console.log (lichePozice([7, -6])) // [7];