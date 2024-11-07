// Exercice 3

// function Count (phrase,lettre) {
//     if (lettre.length !== 1 || !/^[a-zA-Z]$/.test(lettre)) {
//         throw new Error("Le paramètre 'lettre' doit être un seul caractère.");
//     }
//     let Count = 0;
//     for (let i = 0; i<phrase.length; i++) {
//         let index = phrase.substring(i, i+1);
//         if (lettre.indexOf(index) !== -1) {
//             Count ++;
//         }
//     }
//     return Count;
// }

// ltre = prompt("Veuillez saisir votre lettre.");
// phrse = prompt("Veuillez saisir votre phrase.");
// console.log(Count(phrse,ltre));

// function compterLettre(phrase, lettre) {
//     let count = 0; // Initialise le compteur à 0

//     for (let i = 0; i < phrase.length; i++) {
//         if (phrase[i] === lettre) { // Vérifie si le caractère courant est égal à "lettre"
//             count++; // Incrémente le compteur si on trouve une correspondance
//         }
//     }

//     return count; // Retourne le nombre total de fois où "lettre" apparaît dans "phrase"
// }