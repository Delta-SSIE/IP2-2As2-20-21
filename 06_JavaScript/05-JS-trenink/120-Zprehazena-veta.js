function prehodVetu(veta, pocet) {
    
    let slova = veta.split(" ");
    
    if (pocet > slova.length)
        return veta;
        
    while (pocet-- > 0) {
        slova.unshift(slova.pop());
    }
    
    return slova.join(" ");
}

//Nějaké zkoušky
console.log(prehodVetu ("kam jsem to oči dala", 1)); // "dala kam jsem to oči"
console.log(prehodVetu ("kam jsem to oči dala", 2)); // "oči dala kam jsem to"
console.log(prehodVetu ("tady ne", 1)); // "ne tady"
console.log(prehodVetu ("nech to být", 0)); // "nech to být"
console.log(prehodVetu ("tohle prostě nejde", 12)); // "tohle prostě nejde"

