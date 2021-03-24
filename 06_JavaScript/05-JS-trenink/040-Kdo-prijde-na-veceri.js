function kdoPrijde(hoste){
    switch (hoste.length) {
        case 0:
            return "Nepřijde nikdo";
        
        case 1:
            return `Přijde jen ${hoste[0]}`;
            
        default:
            let hosteCopy = hoste.slice(); // abych nezměnil původní pole
            let posledni = hosteCopy.pop(); // vezmu posledni, uložím, pole o něj zkrátím
            return "Přijde " + hosteCopy.join(", ") + " a " + posledni;
    }
}

// "Nepřijde nikdo"
console.log(kdoPrijde([])); 

// "Přijde jen Milan".
console.log(kdoPrijde(["Milan"])); 

//"Přijde Milan a Bára".
console.log(kdoPrijde(["Milan", "Bára"])); 

// "Přijde  Tonda, Sára, Matěj, Milan a Bára"
console.log(kdoPrijde(["Tonda", "Sára", "Matěj", "Milan", "Bára"])); 
