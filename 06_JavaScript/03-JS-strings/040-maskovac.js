// vložte deklaraci funkce s jedním parametrem
function maskovac(retezec) {
	const prvni = retezec[0];
	const maska = "*";
	let odpoved = retezec[0];
	for (let i = 1; i < retezec.length; i++) {
		if (retezec[i] != prvni) odpoved += retezec[i];
		else odpoved += maska;
	}
	return odpoved;
}


// vykoušejte si ji
console.log(maskovac("papír")); //vypíše pa*ír
console.log(maskovac("kokodák")); //vypíše ko*odá*
console.log(maskovac("krakonoš")); //vypíše kra*onoš
console.log(maskovac("babiččin obarvený ubrus")); //vypíše ba*iččin o*arvený u*rus


//existují i jiná řešení, např:
function maskovac2(retezec) {
	const prvni = retezec[0];
	return prvni + retezec.slice(1).replace(new RegExp(prvni,'g'), "*" );
}
console.log(maskovac2("papír")); //vypíše pa*ír
console.log(maskovac2("kokodák")); //vypíše ko*odá*
console.log(maskovac2("krakonoš")); //vypíše kra*onoš
console.log(maskovac2("babiččin obarvený ubrus")); //vypíše ba*iččin o*arvený u*rus
