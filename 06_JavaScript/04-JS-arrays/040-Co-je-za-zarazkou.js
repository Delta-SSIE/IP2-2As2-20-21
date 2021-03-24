// lze napsat třeba takto
function odZarazkyPruchodem(pole, zarazka) {
    if (!Array.isArray(pole))
        return false;
        
    let zaZarazkou = false;
    let result = [];
    for (let prvek of pole){
        if (prvek === zarazka) {
            zaZarazkou = true;
            continue;
        }
        if (zaZarazkou)
            result.push(prvek);
    }
    return result;
}


// nebo použijeme již existující funkce

function odZarazky(pole, zarazka) {

    if (!Array.isArray(pole))
        return false;
    
    const index = pole.indexOf(zarazka);
    if (index === -1)
        return [];
    
    return pole.slice(index + 1);
}

// jednoduché testy 
console.log (odZarazky("nic", "rajčata")) // false
console.log (odZarazky(["jablka","hrušky","mrkev","petržel","rajčata","okurky","rajčata","cukety","lilek"], "rajčata")) // ["okurky","rajčata","cukety","lilek"]
console.log (odZarazky(["jablka","hrušky","mrkev","petržel","rajčata","okurky","cukety","lilek"], "buřty")) // []