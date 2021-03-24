function spotreba(delka, sirka, vyska, vydatnost) {
    
    if (delka < 0 || sirka < 0 || vyska < 0 || vydatnost < 0) 
        return 0;
        
    // a úplně jiný zápis podmínky by byl
    //  if (!Array.from(arguments).reduce( 
    //          (accumulator, current) => { return accumulator && (current >= 0); } 
    //      ),
    //      true
    //  );
    
    return Math.ceil( ((delka + sirka ) * 2 * vyska + delka * sirka) / vydatnost);
}


console.log(spotreba(4, 3, 3.2, 12)); // vrátí 5
console.log(spotreba(5, 8, 3.2, 8)); // vrátí 16
console.log(spotreba(4, 3, -3.2, 12)); // vrátí 0