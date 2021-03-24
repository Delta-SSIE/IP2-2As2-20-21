function kdoVyhral(goly1, goly2) {
    let rozdil = 0;
    for (let i = 0; i < goly1.length; i++) {
        if (goly1[i] > goly2[i])
            rozdil++;
        else if (goly1[i] < goly2[i])
            rozdil--;
    }
    // ano a teď je jako poslední argument ternáru další ternár - vybírá se tedy dál...
    return rozdil > 0 ? 1 : rozdil < 0 ? 2 : 0; 
    
} 
 
 
// pár testů
console.log(kdoVyhral([1, 0, 4, 2],[0, 1, 2, 2 ])); // 1
console.log( kdoVyhral([2, 0, 15, 2],[3, 1, 2, 2 ])); // 2
console.log(kdoVyhral([3, 2], [1, 7])); // 0
console.log(kdoVyhral([], [])); // 0
