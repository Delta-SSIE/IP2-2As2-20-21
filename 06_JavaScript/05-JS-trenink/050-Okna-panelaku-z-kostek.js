// Šlo by to třeba takhle
function pocetOkenKlasicky(vyskySloupcu) {
    // sectu vsechna okna koukajici "dopredu" - tedy vsechny vysky
    let oknaDopredu = 0;
    for (let vyska of vyskySloupcu) {
        oknaDopredu += vyska;
    }

    let rozsireno = [0, ...vyskySloupcu, 0]; // kopie původního pole před i za přidána nula
    
    // sectu vsechny vysky koukajici do boku - jako rozdil dvou sousednich vysek (v abs. hodnote)
    let oknaDoBoku = 0; 
    for (let i = 0; i < rozsireno.length - 1; i++) {
        oknaDoBoku += Math.abs(rozsireno[i] - rozsireno[i+1]);
    }
    
    return 2 * oknaDopredu + oknaDoBoku;
}

// A nebo zestručníme
function pocetOken(vyskySloupcu) {
    let rozsireno = [0, ...vyskySloupcu, 0]; // kopie původního pole před i za přidána nula
    let pocet = 0;
    for (let i = 0, l = rozsireno.length - 1; i < l; i++) {
        pocet += 2 * rozsireno[i] + Math.abs(rozsireno[i] - rozsireno[i+1]);
    }
    return pocet;
}

console.log(pocetOken([])); // 0
console.log(pocetOken([1])); // 4
console.log(pocetOken([1,1])); // 6
console.log(pocetOken([1,2])); // 10
console.log(pocetOken([4,1,1,3])); // 30