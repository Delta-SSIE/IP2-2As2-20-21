function hodnoceni(tvrzeni) {
	const polohaNeni = tvrzeni.indexOf("není");
	const polohaSpatne = tvrzeni.indexOf("špatné");

	//pokud není jeden z podřetězců přítomen (-1), nebo nejsou ve správném pořadí, vracím původní řetězec.
	if (polohaNeni === -1 || polohaSpatne === -1 || polohaSpatne <= polohaNeni)
		return tvrzeni;
	
		//jinak nahradím od "...není" novým koncem
	return tvrzeni.slice(0,polohaNeni) + "je dobré.";
}

console.log (hodnoceni("Počasí není tak špatné."));  // změní na "Počasí je dobré."
console.log (hodnoceni("Jídlo není vůbec špatné.")); //změní na "Jído je dobré."
console.log (hodnoceni("Jídlo není dobré."));        // nechá bez změny
console.log (hodnoceni("Tady žádné špatné jídlo není.")); // nechá bez změny