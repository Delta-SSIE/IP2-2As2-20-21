function kdoPojede(cisloDne) {
    switch (cisloDne % 3) {
        case 1:
            return "Tomáš";
        case 2:
            return "Martin";
        case 0:
            return "Karel";
    }
}

console.log(kdoPojede(1)); // "Tomáš"
console.log(kdoPojede(3)); // "Karel"
console.log(kdoPojede(4)); // "Tomáš"
console.log(kdoPojede(1256)); // "Martin"