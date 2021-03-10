//základní řešení
function sudaLicha (maximum) {
    let odpoved = '';
    
	for ( let i = 1; i <= maximum; i++) {
		odpoved += 'Číslo ' + i + ' je ' + ( (i % 2 === 0) ? 'sudé' : 'liché' ) + "\n";
	}
	
	return odpoved;
}

//stejně jako minule to můžeme rešit s pomocí spread operatoru
function sudaLicha2 (maximum) {
    const cisla = [...Array(maximum).keys()].map(n => n + 1)
    const radky = cisla.map( n => `Číslo ${n} je ${(n % 2 === 0) ? 'sudé' : 'liché'}\n`)
	return radky.join("")
}

//a pro zatemnění smyslu pak zkrátit
const sudaLicha3 = 	(maximum) => [...Array(maximum).keys()]
						.map(n => n + 1)
						.map(n => `Číslo ${n} je ${(n % 2 === 0) ? 'sudé' : 'liché'}\n`)
						.join("")
