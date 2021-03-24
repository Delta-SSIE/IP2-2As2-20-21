// asi jste napsali nějak takto
function dojezdKlasicky(stavNadrze, spotreba) {
    return Math.floor(stavNadrze * 100 / spotreba);
}

// a takhle by to vypadalo jako lambda-výraz
let dojezd = (stavNadrze, spotreba) => Math.floor(stavNadrze * 100 / spotreba);

// a zde ho vyzkoušíme
console.log(dojezd(50, 5)); // vrátí 1000
console.log(dojezd(43, 7.3)); // vrátí 589
console.log(dojezd(0, 6.2)); // vrátí 0

