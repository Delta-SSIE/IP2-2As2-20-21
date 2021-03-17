// sem přijde deklarace funkce
function michacka(slovo1, slovo2) {
    if (slovo1.length < 2 || slovo2.length < 2)
        return "Nelze míchat, není co.";
        
    return slovo2.slice(0,2) + slovo1.slice(2) + " " + slovo1.slice(0,2) + slovo2.slice(2)
}

// a teď ji vyzkoušíme)

console.log(michacka("chlap", "brouk")); //  vrátí "brlap chouk".
console.log(michacka("lampa", "lůj")); //vrátí "lůmpa laj".
console.log(michacka("x", "popokatepetl")); //vrátí "Nelze míchat, není co.".
console.log(michacka("marinada", "0")); //vrátí "Nelze míchat, není co.".

