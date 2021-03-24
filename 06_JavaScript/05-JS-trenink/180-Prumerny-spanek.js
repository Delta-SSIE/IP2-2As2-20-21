// asi trochu jiné řešení
function spanekPresTyden(hodiny) {
    if (hodiny.length === 0) {
        return 0;
    }
    const jenTyden = hodiny.filter( (x, i) => (i+1) % 7 < 5 );
    return jenTyden.reduce((a,b) => a + b, 0) / jenTyden.length ;
}

// řešení průchodem
function spanekPresTydenPruchodem(hodiny) {
    if (hodiny.length === 0) {
        return 0;
    }
    
    let pocet = 0;
    let soucet = 0;
    
    for (let i = 0; i < hodiny.length; i++) {
        switch (i % 7) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 6:
                soucet += hodiny[i];
                pocet++;
        }
    }
    
    return soucet / pocet;
}

// a test
console.log(spanekPresTyden([])) //0
console.log(spanekPresTyden([6])) //6
console.log(spanekPresTyden([6, 7.5, 3.5, 6, 9, 10, 7, 6, 7, 4])) //5.875
