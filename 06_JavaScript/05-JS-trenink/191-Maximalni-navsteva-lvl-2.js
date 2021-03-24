function maxNavsteva(skupiny, interval, prohlidka) {
    
    const pocetSoucasne = Math.ceil(prohlidka / interval);
    
    let maxNavsteva = 0;
    let navstevaTed = 0;
    for (let i = 0; i < skupiny.length; i++) {
        navstevaTed += skupiny[i];
        if (i >= pocetSoucasne) {
            navstevaTed -= skupiny[i-pocetSoucasne];
        }
        maxNavsteva = Math.max(maxNavsteva, navstevaTed);
    }
    return maxNavsteva;
}


// něco na vyzkoušení
console.log(maxNavsteva([5,7,12,23,12,22,11,5,12,20,14,6],15,90)); // 87
console.log(maxNavsteva([5,7,12,23,12,22,11,5,12,20,14,6],15,120)); // 119
console.log(maxNavsteva([5,7,12,23,12,22,11,5,12,20,14,6],20,121)); // 105
console.log(maxNavsteva([5], 10, 60)); // 5
console.log(maxNavsteva([], 10, 60)); // 0