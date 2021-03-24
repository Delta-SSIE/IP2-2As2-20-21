function prvniAutobus(hodina) {
    
    if (hodina < 4 || hodina > 22)
        return "autobus nejede";
    
    let aktHodina = 4;
    let aktMinuta = 30;
    
    do {
        if (aktHodina == hodina) {
            return `${aktHodina}:${aktMinuta.toString().padStart(2,"0")}`;
        }
        aktMinuta +=11;
        if (aktMinuta > 59) {
            aktMinuta -= 60;
            aktHodina += 1;
        }
    } while (aktHodina < 23);
    
}

function posledniAutobus(hodina) {
    
    if (hodina < 4 || hodina > 22)
        return "autobus nejede";
    
    let aktHodina = 4;
    let aktMinuta = 30;

    do {
        const posledni = `${aktHodina}:${aktMinuta.toString().padStart(2,"0")}`
        aktMinuta +=11;
        if (aktMinuta > 59) {
            aktMinuta -= 60;
            aktHodina += 1;
        }
        if (aktHodina > hodina) {
            return posledni;
        }
    } while (aktHodina < 23);
    
}


console.log(prvniAutobus(4));// : "4:30"
console.log(prvniAutobus(5));// : "5:03"
console.log(prvniAutobus(23));// : "autobus nejede"


console.log(posledniAutobus(3));// : "autobus nejede"
console.log(posledniAutobus(4));// : "4:52"
console.log(posledniAutobus(5));// : "5:58"