// Exercice 10
// let nombre = parseInt(prompt("Veuillez saisir un nombre pour tester s'il est premier :"));

// // Variable pour déterminer si le nombre est premier
// let estPremier = true;

// // Vérifie si le nombre est inférieur ou égal à 1 car les nombres <= 1 ne sont pas premiers
// if (nombre <= 1) {
//     estPremier = false; 
// } else {
//     // Vérifie les diviseurs de 2 à la racine carrée du nombre
//     for (let i = 2; i <= Math.sqrt(nombre); i++) {
//         // vérifie si nombre est divisible par i. Si c'est le cas, cela signifie qu'il a un diviseur autre que 1 et lui-même.
//         if (nombre % i === 0) {
//             estPremier = false; // Le nombre n'est pas premier s'il a un diviseur autre que 1 et lui-même
//             break; // On sort de la boucle dès qu'on trouve un diviseur
//         }
//     }
// }

// // Affiche le résultat
// if (estPremier) {
//     console.log(nombre + " est un nombre premier.");
// } else {
//     console.log(nombre + " n'est pas un nombre premier.");
// }