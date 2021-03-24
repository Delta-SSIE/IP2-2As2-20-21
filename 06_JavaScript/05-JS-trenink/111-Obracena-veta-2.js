function obratVetu(veta) {
    const slova = veta.split(" ");
    if (slova.length > 0) {
        const lastIndex = slova.length - 1;
        let posledni = slova[lastIndex].toLocaleLowerCase();

        let prvniPismeno = posledni.slice(0,1);
        let prostredek = posledni.slice(1,-1);
        let posledniZnak = posledni.slice(-1);

        if (lastIndex > 0) {
            slova[0] = slova[0].toLocaleLowerCase() + posledniZnak;
            slova[lastIndex] = prvniPismeno.toLocaleUpperCase() + prostredek;
        } else 
            return prvniPismeno.toLocaleUpperCase() + prostredek + posledniZnak;
    }

    const obracene = slova.reverse();
    return obracene.join(" ");
}

// a nějaké testy
console.log(obratVetu ("Není oko jako oko třeba oko kuří.")); // "Kuří oko třeba oko jako oko není."
console.log(obratVetu ("Kam jsem to oči dala?")); // "Dala oči to jsem kam?"
console.log(obratVetu ("nic!")); // "Nic!"
console.log(obratVetu ("")); // ""