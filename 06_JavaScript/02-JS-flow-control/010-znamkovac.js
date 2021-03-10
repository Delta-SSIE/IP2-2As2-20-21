function znamkovac (cislo) {
    if (cislo < 0)
        return false;
    else if (cislo < 33)
        return 5;
    else if (cislo < 50)
        return 4;
    else if (cislo < 67)
        return 3;
    else if (cislo < 83)
        return 2;
    else if (cislo <= 100)
        return 1;
    
    return false;
}

//jiný přepis s použitím ternárního operátoru
function znamkovac2 (cislo) {
    return  (cislo < 0)     ? false :
            (cislo < 33)    ? 5 :
            (cislo < 50)    ? 4 :
            (cislo < 67)    ? 3 :
            (cislo < 83)    ? 2 :
            (cislo <= 100)  ? 1 :
            false;
}
