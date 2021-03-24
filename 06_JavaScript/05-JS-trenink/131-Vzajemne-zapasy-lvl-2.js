function vzajemneVysledky(goly1, goly2) {
    
    let odpoved = [];
    
    for (let i = 0; i < goly1.length; i++) {
        if (goly1[i] > goly2[i])
            odpoved.push(1);
        else if (goly1[i] < goly2[i])
            odpoved.push(2);
        else
            odpoved.push(0);
    }
    
    return odpoved;
} 
 
 
// pár testů
console.log(vzajemneVysledky([1, 0, 4, 2],[0, 1, 2, 2 ])); // [ 1, 2, 1, 0 ]
console.log( vzajemneVysledky([2, 0, 15, 2],[3, 1, 2, 2 ])); // [ 2, 2, 1, 0 ]
console.log(vzajemneVysledky([3, 2], [1, 7])); // [ 1, 2 ]
console.log(vzajemneVysledky([], [])); // []
