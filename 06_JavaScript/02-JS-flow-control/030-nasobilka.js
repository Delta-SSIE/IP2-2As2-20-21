//základní řešení
function nasobilka(cislo) {
    let odpoved = "";
    
    for (let i = 0; i < 11; i++) {
        odpoved += `${i} x ${cislo} = ${i * cislo}\n`;
    }
    
    return odpoved;
}

//také můžeme zapsat úplně jinak
function nasobilka2(cislo) {
    const numbers = [...Array(11).keys()]
    const lines = numbers.map( n => `${n} x ${cislo} = ${n * cislo}\n` )
    return lines.join("");    
}

//což lze zkrátit takto, ale jetli je to ku prospěchu věci, nebo na škodu čitelnosti, 
//to je těžko říct. Ale je to děsně moderní a cool :D
const nasobilka3 = cislo => [...Array(11).keys()].map( n => `${n} x ${cislo} = ${n * cislo}\n` ).join("")