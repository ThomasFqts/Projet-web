const personnages = [
    { nom: "Luke Skywalker", espece: "Humain", affiliation: "Jedi" },
    { nom: "Darth Vader", espece: "Humain", affiliation: "Sith" },
    { nom: "Yoda", espece: "Yoda's species", affiliation: "Jedi" },
    { nom: "Obi-Wan Kenobi", espece: "Humain", affiliation: "Jedi" }
];

function filtre(_tableau,affiliation) {
    const personnage = [];
    for (let i = 0; i < _tableau.length; i++) {
        if (_tableau[i].affiliation === affiliation) { // Vérifie si l'affiliation correspond
            personnage.push(_tableau[i]);
            return personnage;
        }
    }
    throw new Error("Le personnage ou l'affiliation demandé ne figure pas dans ce tableau");
}
// const jedis = filtre(personnages, "Jedi");
// console.log(jedis);
// const sith = filtre(personnages, "Sith");
// console.log(sith);

function findbyname(_tableau,nom) {
    for (let i = 0; i < _tableau.length;i++) {
        if (nom == _tableau[i].nom) {
            return _tableau[i];
        }
    }
    console.log("Le personnage n'est pas dans le tableau.");
    return null;
}
// const find = findbyname(personnages,"Yoda");
// console.log(find);


function sizetab(_tableau) {
    count = 0;
    for (let i = 0; i < _tableau.length; i++) {
        count++;
    }
    return count;
}
// const taille = sizetab(personnages);
// console.log(taille);

function verification(_tableau,nom) {
    for (let i = 0; i < _tableau.length;i++) {
        if (nom == _tableau[i].nom) {
            console.log("Le personnage est dans le tableau.")
            return true;
        }
    }
    console.log("Le personnage n'est pas dans le tableau.");
    return false;
}
// const verif = verification(personnages,"Obi-Wan Kenobi");
// console.log(verif);