// Exercice 4 

function Multiple() {
    let N = parseInt(prompt("Saisir le multiplicande"));
    let X = parseInt(prompt("Saisir le multiplicateur"));
    for (let i = 1; i<= N; i++) {
        let NX = i * X;
        console.log(i + " x " + X + " = " + NX);
    }
}

function SommeMoyenne() {
    let nbsomme = 0;
    let nbcount = 0;
    let nb;
    nb = parseFloat(prompt("Veuillez saisir un nombre (0 pour arreter)"));
    while (nb !== 0) {
        nbsomme += nb;
        nbcount ++;
        nb = parseFloat(prompt("Veuillez saisir un nombre (0 pour arreter)"));
    }
    let nbmoyenne = nbsomme / nbcount;
    console.log("La somme est de : " + nbsomme);
    console.log("La moyenne est de : " + nbmoyenne);
}

function nbvoyelle() {
    let mot = prompt("Saisir un mot.");
    let voyelles = "aeiouyAEIOUY";
    let voyellesCount = 0;
    for (let i =0; i < mot.length; i++) {
        let index = mot.substring(i, i + 1);
        if (voyelles.indexOf(index) !== -1) {
            voyellesCount++;
        }  
    }
    console.log(mot);
    console.log(voyellesCount);
}

function Countlettre() {
    let lettre = prompt("Veuillez saisir votre lettre.");
    let phrase = prompt("Veuillez saisir votre phrase.");
    if (lettre.length !== 1 || !/^[a-zA-Z]$/.test(lettre)) {
                throw new Error("Le paramètre 'lettre' doit être un seul caractère.");
            }
    let count = 0;

    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === lettre) { // Vérifie si le caractère courant est égal à "lettre"
            count++;
        }
    }
    console.log(count);
}

function menu() {
    let choix;
    while(choix !== 0) {
        choix = parseInt(prompt("Choisissez une option: 1. Multiple / 2.Somme et moyenne / 3. Recherche du nombre de voyelles / 4. Recherche du nombre des caractères suivantes."));
        switch (choix) {
            case 1:
                Multiple();
                break;
                
            case 2:
                SommeMoyenne();
                break;
                
            case 3:
                nbvoyelle();
                break;
                
            case 4:
                Countlettre();
                break;
                
            default:
                console.log("Option invalide");
        }
    }
}

menu();