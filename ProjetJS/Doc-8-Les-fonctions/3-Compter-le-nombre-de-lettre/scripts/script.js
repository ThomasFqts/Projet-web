// Exercice 3

// function Countlettre (phrase,lettre) {
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
// console.log(Countlettre(phrse,ltre));

// function Countlettre() {
//     let lettre = prompt("Veuillez saisir votre lettre.");
//     let phrase = prompt("Veuillez saisir votre phrase.");
//     if (lettre.length !== 1 || !/^[a-zA-Z]$/.test(lettre)) {
//                 throw new Error("Le paramètre 'lettre' doit être un seul caractère.");
//             }
//     lettre = lettre.toLowerCase();
//     phrase = phrase.toLowerCase();
//     let count = 0;

//     for (let i = 0; i < phrase.length; i++) {
//         if (phrase[i] === lettre) { // Vérifie si le caractère courant est égal à "lettre"
//             count++;
//         }
//     }
//     console.log(count);
// }

// Countlettre();