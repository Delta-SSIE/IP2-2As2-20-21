function maxNavsteva(skupiny) {
    
    const pocetSoucasne = 6;
    
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
console.log(maxNavsteva([5,7,12,23,12,22,11,5,12,20,14,6])); // 87
console.log(maxNavsteva([5,7,12,23,12,22,11,15,22,20,14,6])); // 105
console.log(maxNavsteva([5])); // 5
console.log(maxNavsteva([])); // 0