// Výkonově efektivní řešení s jedním průchodem
function druheNejvetsiPruchodem(poleCisel) {
    
    let max = -Infinity;
    let submax = -Infinity;
    
    for (let cislo of poleCisel) {
        if (cislo > max) {
            submax = max;
            max = cislo;
        } else if (cislo !== max && cislo > submax) {
            submax = cislo;
        }
    }
    
    return submax !== -Infinity ? submax : false ;
    
}

// Zápisem elegantní řešení, ne ovšem tak efektivní
function druheNejvetsi(poleCisel) {
    let max = Math.max(...poleCisel);
    let submax = Math.max(...poleCisel.filter( x => x < max));
    return submax !== -Infinity ? submax : false ;
}


// pár zkoušek
console.log(druheNejvetsi([1, 2, 4, 7, 4, -3, 9])); // 7
console.log(druheNejvetsi([5, 9, 4, 6, 4, -3, 9])); // 6
console.log(druheNejvetsi([])); // false
console.log(druheNejvetsi([1,1,1,1,1,1,1])); // false
