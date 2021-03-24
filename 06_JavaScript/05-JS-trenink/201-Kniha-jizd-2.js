function kdoRidil(kilometry, ridici, prestupekNa) {

    if (kilometry.length !== ridici.length)
        return false;
    
    if (prestupekNa <= 0)
        return false;

    let kamAzDojel = 0;
    for (let i = 0; i < kilometry.length; i++) {
        let usek = kilometry[i];
        
        if (isNaN(usek) || usek <= 0)
            return false;
            
        kamAzDojel += kilometry[i];
        if (kamAzDojel >= prestupekNa)
            return ridici[i];
    }
    
    return false;
}

console.log(kdoRidil ([50, 30, 120, 15], ["Marie", "Tonda", "Franta", "Marie"], 85)); // "Franta"
console.log(kdoRidil ([50, 30, 120, 15], ["Marie", "Tonda", "Franta", "Marie"], 80)); // "Tonda"
console.log(kdoRidil ([1,1,1,1,1,1,1,1], ["Marie", "Tonda","Marie", "Tonda","Marie", "Tonda","Marie", "Tonda"], 7)); // "Marie"
console.log();
console.log(kdoRidil ([1,1,1,1,1,1,1,1], ["Marie", "Tonda","Marie", "Tonda","Marie", "Tonda","Marie", "Tonda"], 9)); // false - příliš daleko
console.log(kdoRidil ([50, 30, 120, 15], ["Marie", "Tonda", "Franta"], 85)); // false - málo řidičů
console.log(kdoRidil ([50, 30], ["Marie", "Tonda", "Franta"], 85)); // false - málo jízd
console.log(kdoRidil ([-50, 30], ["Marie", "Tonda"], 8)); // false - narazil na záporné číslo
console.log(kdoRidil (["x", 30], ["Marie", "Tonda"], 8)); // false - neplatný prvek v poli

