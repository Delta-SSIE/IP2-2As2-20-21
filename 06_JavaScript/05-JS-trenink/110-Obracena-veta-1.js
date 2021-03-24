function obratVetu(veta) {
    const slova = veta.split(" ");
    const obracene = slova.reverse();
    return obracene.join(" ");
    
    // a nebo by stačilo na jednom řádku
    // return veta.split(" ").reverse().join(" ");
}


// a nějaké testy
console.log(obratVetu ("není oko jako oko třeba oko kuří")); // "kuří oko třeba oko jako oko není"
console.log(obratVetu ("kam jsem to oči dala")); // "dala oči to jsem kam"
console.log(obratVetu ("nic")); // "nic"
console.log(obratVetu ("")); // ""