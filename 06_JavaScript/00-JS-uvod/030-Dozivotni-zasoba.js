let aktualniRok = 2021;
let vek = 17;
let vekDoziti = 80;
let spotreba = 0.7;

let zbyvaLet = vekDoziti - vek;
let spotrebujuCelkem = zbyvaLet * 365.25 * spotreba;

console.log(`Až do konce života v roce ${aktualniRok - zbyvaLet} budeš potřebovat ${spotrebujuCelkem} balení`);