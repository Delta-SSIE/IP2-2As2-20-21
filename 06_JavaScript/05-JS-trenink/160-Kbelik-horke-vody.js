function kolikHorke(objem, teplota) {
    const t_low = 20;
    const t_high = 80;
    const horka = objem * (teplota - t_low) / (t_high - t_low);
    return (horka > 0 && horka <= objem) ? horka : false;
}

// na vyzkoušení
console.log(kolikHorke(5, 50));// vrátí 2,5 (ke 2,5 litru horké přijde 2,5 litru studené a akorát to vyjde).
console.log(kolikHorke(6, 40));// vrátí 2 (ke 2 litrům horké přijdou 4 litry studené).
console.log(kolikHorke(5, 10));// vrátí false, protože úloha nemá řešení
console.log(kolikHorke(4, 85));// vrátí false, protože úloha nemá řešení
