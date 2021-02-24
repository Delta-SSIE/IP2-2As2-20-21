let r = 10;
let obvod = 2 * Math.PI * r;

//let obsah = Math.PI * r * r; //kterákoliv z těchto variant dělá totéž
//let obsah = Math.PI * Math.pow(r, 2);
let obsah = Math.PI * r ** 2;

console.log(`Obvod kruhu je ${obvod}`);
console.log(`Obsah kruhu je ${obsah}`);