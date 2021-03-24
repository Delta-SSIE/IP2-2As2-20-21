// řešení průchodem
function kolikStejnychPruchodem(pole, hodnota) {
    let pocet = 0;
    for (let prvek of pole) {
        if (prvek === hodnota) {
            pocet++;
        }
    }
    return pocet;
}

// řešení s pomocí reduce
function kolikStejnych(pole, hodnota) {

    return pole.reduce( 
        (accumulator, value) => (value === hodnota) ? accumulator + 1 : accumulator,
        0
    );
    
}

// A vyzkoušíme například takto:
console.log(kolikStejnych(["máslo", "sádlo", "hořčice", "kečup", "marmeláda", "kečup", "křen", "kečup"], "kečup")); // 3
console.log(kolikStejnych(["máslo", "sádlo", "hořčice", "kečup", "marmeláda", "kečup", "křen", "kečup"], "paštika")); //0