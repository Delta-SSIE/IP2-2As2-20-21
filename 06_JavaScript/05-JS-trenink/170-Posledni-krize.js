function posledniPokles(poleCisel) {
    for (let i = poleCisel.length - 1; i > 0; i--) {
        if (poleCisel[i] < poleCisel[i-1])
            return i;
    }
    return false;
}


console.log(posledniPokles([12, 14, 15, 14, 18, 17, 16, 18, 19, 19, 21]));
// vrátí 6, protože hodnota 16 na indexu 6 je poslední, která je nižší než předchozí

console.log(posledniPokles([1, 2, 3, 4])); 
// vrátí false