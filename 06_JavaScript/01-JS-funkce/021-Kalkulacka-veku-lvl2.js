function spoctiVek(rokNarozeni) {
    let letosniRok = new Date().getFullYear();
    let vek = letosniRok - rokNarozeni;
    if (vek > 0)
        return `Tomu člověku je ${vek - 1} nebo ${vek} let.`;
    else
        return `Tomu člověku je 0 let.`;
}