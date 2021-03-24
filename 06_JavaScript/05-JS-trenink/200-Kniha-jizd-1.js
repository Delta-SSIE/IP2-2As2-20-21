function kolikUjel(jizdy, ridici, ridic) {
    let ujeto = 0;
    
    for (let i = 0; i < jizdy.length; i++) {
        if (ridici[i] === ridic)
            ujeto += jizdy[i];
    }
    
    return ujeto;
}

// na vyzkoušení
console.log(kolikUjel ([50, 30, 120, 15], ["Marie", "Tonda", "Franta", "Marie"], "Marie")); // 65
console.log(kolikUjel ([10, 20, 30], ["Marie", "Tonda", "Franta"], "Alois")); // 0
