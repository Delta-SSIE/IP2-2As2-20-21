const tabulka = [
    {
        "poradi": 6,
        "image": "brno.png",
        "tym": "HC Kometa Brno",
        "zapasy": 52,
        "vyhry": 21,
        "vyhryProdl": 5,
        "prohryProdl": 6,
        "prohry": 20,
        "golyVen": 143,
        "golyDomu": 156,
        "body": 79

    },
    {
        "poradi": 8,
        "image": "hkralove.png",
        "tym": "Mountfield HK",
        "zapasy": 52,
        "vyhry": 19,
        "vyhryProdl": 5,
        "prohryProdl": 7,
        "prohry": 21,
        "golyVen": 130,
        "golyDomu": 136,
        "body": 74

    },
    {
        "poradi": 14,
        "image": "kladno.png",
        "tym": "Rytíři Kladno",
        "zapasy": 52,
        "vyhry": 16,
        "vyhryProdl": 3,
        "prohryProdl": 6,
        "prohry": 27,
        "golyVen": 130,
        "golyDomu": 177,
        "body": 60

    },
    {
        "poradi": 9,
        "image": "kvary.png",
        "tym": "HC Energie Karlovy Vary",
        "zapasy": 52,
        "vyhry": 16,
        "vyhryProdl": 9,
        "prohryProdl": 5,
        "prohry": 22,
        "golyVen": 174,
        "golyDomu": 168,
        "body": 71

    },
    {
        "poradi": 1,
        "image": "liberec.png",
        "tym": "Bílí Tygři Liberec",
        "zapasy": 52,
        "vyhry": 30,
        "vyhryProdl": 5,
        "prohryProdl": 2,
        "prohry": 15,
        "golyVen": 179,
        "golyDomu": 131,
        "body": 102

    },
    {
        "poradi": 13,
        "image": "litvinov.png",
        "tym": "HC VERVA Litvínov",
        "zapasy": 52,
        "vyhry": 16,
        "vyhryProdl": 3,
        "prohryProdl": 9,
        "prohry": 24,
        "golyVen": 153,
        "golyDomu": 173,
        "body": 63

    },
    {
        "poradi": 4,
        "image": "mboleslav.png",
        "tym": "BK Mladá Boleslav",
        "zapasy": 52,
        "vyhry": 22,
        "vyhryProdl": 10,
        "prohryProdl": 6,
        "prohry": 14,
        "golyVen": 155,
        "golyDomu": 124,
        "body": 92

    },
    {
        "poradi": 7,
        "image": "Olomouc.png",
        "tym": "HC Olomouc",
        "zapasy": 52,
        "vyhry": 20,
        "vyhryProdl": 5,
        "prohryProdl": 7,
        "prohry": 20,
        "golyVen": 123,
        "golyDomu": 129,
        "body": 77

    },
    {
        "poradi": 11,
        "image": "pardubice.png",
        "tym": "HC Dynamo Pardubice",
        "zapasy": 52,
        "vyhry": 16,
        "vyhryProdl": 3,
        "prohryProdl": 10,
        "prohry": 23,
        "golyVen": 121,
        "golyDomu": 160,
        "body": 64

    },
    {
        "poradi": 5,
        "image": "plzen.png",
        "tym": "HC Škoda Plzeň",
        "zapasy": 52,
        "vyhry": 27,
        "vyhryProdl": 2,
        "prohryProdl": 7,
        "prohry": 16,
        "golyVen": 162,
        "golyDomu": 142,
        "body": 92

    },
    {
        "poradi": 3,
        "image": "praha.png",
        "tym": "HC Sparta Praha",
        "zapasy": 52,
        "vyhry": 21,
        "vyhryProdl": 14,
        "prohryProdl": 1,
        "prohry": 16,
        "golyVen": 174,
        "golyDomu": 145,
        "body": 92

    },
    {
        "poradi": 2,
        "image": "trinec.png",
        "tym": "HC Oceláři Třinec",
        "zapasy": 52,
        "vyhry": 27,
        "vyhryProdl": 4,
        "prohryProdl": 4,
        "prohry": 17,
        "golyVen": 163,
        "golyDomu": 125,
        "body": 93

    },
    {
        "poradi": 12,
        "image": "vitkovice.png",
        "tym": "HC Vítkovice Ridera",
        "zapasy": 52,
        "vyhry": 14,
        "vyhryProdl": 8,
        "prohryProdl": 5,
        "prohry": 25,
        "golyVen": 134,
        "golyDomu": 175,
        "body": 63

    },
    {
        "poradi": 10,
        "image": "zlin.png",
        "tym": "PSG Berani Zlín",
        "zapasy": 52,
        "vyhry": 19,
        "vyhryProdl": 4,
        "prohryProdl": 5,
        "prohry": 24,
        "golyVen": 151,
        "golyDomu": 151,
        "body": 70

    }
];

const popisy = {
    "poradi": {
        "zkratka": "#",
        "popis": "Pořadí"
    },
    "tym": {
        "zkratka": "Tým",
        "popis": "Tým",
        "colSpan" : 2
    },
    "zapasy": {
        "zkratka": "Z",
        "popis": "Zápasy"
    },
    "vyhry": {
        "zkratka": "V",
        "popis": "Výhry"
    },
    "vyhryProdl": {
        "zkratka": "VP",
        "popis": "Výhry v prodloužení"
    },
    "prohryProdl": {
        "zkratka": "PP",
        "popis": "Prohry v prodloužení"
    },
    "prohry": {
        "zkratka": "P",
        "popis": "Prohry"
    },
    "goly": {
        "zkratka": "G",
        "popis": "Góly"
    },
    "body": {
        "zkratka": "B",
        "popis": "Body"
    }
};

const imgPath = "img/";
const table = document.getElementById("extraliga");

const thead = document.createElement("thead");
table.appendChild(thead);

const headRow = document.createElement("tr");
thead.appendChild(headRow);

for (let klic in popisy) {
    const polozka = popisy[klic];
    const th = document.createElement("th");
    th.className = klic;
    if (polozka.colSpan)
        th.colSpan = polozka.colSpan; 
    th.innerHTML = `<abbr title="${polozka.popis}">${polozka.zkratka}</abbr>`;  
    headRow.appendChild(th);  
}


const tbody = document.createElement("tbody");
table.appendChild(tbody);

//magie
tabulka.sort( (a, b) => a.poradi - b.poradi );

for (let tym of tabulka) {
    const row = document.createElement("tr");

    row.className =  tym.poradi <= 4 ? "ctvrtfinale" 
                    : tym.poradi <= 8 ? "osmifinale"
                    : tym.poradi === 14 ? "sestup" 
                    : "";


    row.innerHTML  = `<td class="poradi">${tym.poradi}.</td>`;
    row.innerHTML += `<td class="logo"><img src="${imgPath}${tym.image}" alt="${tym.tym}"></td>`;
    row.innerHTML += `<td class="tym">${tym.tym}</td>`;
    row.innerHTML += `<td class="zapasy">${tym.zapasy}</td>`;
    row.innerHTML += `<td class="vyhry"${tym.vyhry}</td>`;
    row.innerHTML += `<td class="vyhryProdl">${tym.vyhryProdl}</td>`;
    row.innerHTML += `<td class="prohryProdl">${tym.prohryProdl}</td>`;
    row.innerHTML += `<td class="prohry">${tym.prohry}</td>`;
    row.innerHTML += `<td class="goly">${tym.golyVen}:${tym.golyDomu}</td>`;
    row.innerHTML += `<td class="body">${tym.body}</td>`;
 
    tbody.appendChild(row);
}