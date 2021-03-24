function kdoPojede(ridici, cisloDne) {
    return ridici[(cisloDne - 1) % ridici.length]
}

console.log(kdoPojede(["Tomáš", "Martin", "Karel"], 1)); // "Tomáš"
console.log(kdoPojede(["Tomáš", "Martin", "Karel"], 3)); // "Karel"
console.log(kdoPojede(["Tomáš", "Martin", "Karel", "Jiří"], 4)); // "Jiří"
console.log(kdoPojede(["První", "Druhý"], 15)); // "První"