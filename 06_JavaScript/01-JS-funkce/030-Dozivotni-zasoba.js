function dozivotniZasoba(vek, vekDoziti, denniSpotreba) {
    let zasoba = (vekDoziti - vek) * 365 * denniSpotreba;
    return `Až do konce života budeš potřebovat ${zasoba} balení.`
}
