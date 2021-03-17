function hamoun(kolik) {

        
    let result = `Beru ${kolik} dolarů`;
    if (kolik === 1000000)
        result += ", chachá"

    return result;
}

// a vyzkoušíme
console.log(hamoun(100)); //mělo by vypsat "Beru 100 dolarů"
console.log(hamoun(1000000)); //mělo by vypsat "Beru 1000000 dolarů, chachá"
