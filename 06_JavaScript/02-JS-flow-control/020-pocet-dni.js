function pocetDni(mesic) {
    switch (mesic) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        
        case 2:
            return 28;
            
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        
        default:
            return 0;
            
    }
}


//kdybychom chtěli skutečný počet dní v tom kterém roce, vypadalo by to takhle (nebudou tam ty kontroly na 0 a false apod.)
function pocetDni2(mesic, rok) {
   return new Date(rok, mesic, 0).getDate();
};


//což je pro milovníky arrow-functions
const pocetDni2 = (mesic, rok) => new Date(rok, mesic, 0).getDate();