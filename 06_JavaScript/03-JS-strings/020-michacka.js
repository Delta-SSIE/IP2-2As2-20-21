// sem přijde deklarace funkce
function michacka(slovo1, slovo2) {
	return slovo2.slice(0,2) + slovo1.slice(2) + " " + slovo1.slice(0,2) + slovo2.slice(2)
}

// a teď ji vyzkoušíme)

console.log(michacka("chlap", "brouk")); //  vrátí "brlap chouk".
console.log(michacka("lampa", "lůj")); //vrátí "lůmpa laj".
