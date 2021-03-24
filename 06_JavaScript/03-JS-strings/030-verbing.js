// sem napište funkci
function verbing(retezec) {
	if (retezec.length < 3) {
	// Kratší řetězce než 3 nechá beze změny.
		return retezec;
	} else if (retezec.slice(-3) !== 'ing' ) {
	//Má-li délku alespoň 3, přidá za něj "ing".
	//Pokud ale už končí na "ing", přidá místo toho "ly".
	 	return retezec + 'ing';
	} else {
		return retezec + 'ly';
	}
}

console.log(verbing('bath'));
console.log(verbing('swimming'));
console.log(verbing('go'));

//alternativní zápis
function verbing2(retezec) {
	if (retezec.length < 3) 
        return retezec;
	
    const pripona = (retezec.endsWith('ing') ) ? 'ly' : 'ing';
	return retezec + pripona;
}


// a zde si ji vyzkoušíte
console.log(verbing2('bath'));// 'bathing'
console.log(verbing2('swimming')); // 'swimmingly'
console.log(verbing2('go')); //'go'