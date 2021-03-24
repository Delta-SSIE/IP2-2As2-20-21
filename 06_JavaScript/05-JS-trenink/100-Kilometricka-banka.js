function kamDojedu(stav, delky) {
    
    let i = 0;
    
    while (delky[i] !== undefined) {
        let odecet = Math.max(100, delky[i]); // bude se odecitat alespon 100
        stav -= odecet;
        if (stav < 0) break;
        i++;
    }
    
    return i - 1;

}

console.log(kamDojedu(500, [120, 80, 190, 110, 200])); // 2
console.log(kamDojedu(500, [450, 10])); // 0
console.log(kamDojedu(500, [1000])); // -1
