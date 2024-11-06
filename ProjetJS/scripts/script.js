// Exercice doc 4

// let nom = prompt("Entrez votre nom");
// let prenom = prompt("Entrez votre prénom");
// let sexe = confirm("Êtes-vous un homme?");
// console.log(nom);
// console.log(prenom);
// console.log(sexe);
// if (sexe==true) {
//     alert("Bonjour Monsieur " + nom + " " + prenom + "!\n Bienvenue sur notre site web !");
// }
// else{
//     alert("Bonjour Madame " + nom + " " + prenom + "!\n Bienvenue sur notre site web !");
// }

// Exercice 1 doc 6

// Déclaration de variable
// let nombre = prompt("Entrer un nombre"); 

// Si le reste de la division euclidienne est égale à 0 alors c'est paire sinon c'est impaire
// if (nombre%2==0) { 
//     console.log(nombre + " est paire");
// }
// else {
//     console.log(nombre + " est impaire");
// }

// Exercice 2 doc 6

// Déclaration de variable
// let annee = prompt("Quel est votre année de naissance ?");

// let age = 2024 - annee;
// Si l'age est inferieur a 18 alors le user est mineur sinon, il est majeur.
// if (age<18) {
//     console.log(age + " Vous êtes mineur");
// }
// else {
//     console.log(age + " Vous êtes majeur");
// }

// Exercice 3 doc 6

// Déclaration des variables
// let num1 = parseInt(prompt("Entrez votre premier chiffre"));
// let operateur = prompt("Entrez votre opération");
// let num2 = parseInt(prompt("Entrez votre deuxième chiffre"));
// let resultat;

// // Condition pour les différent opérateur
// switch (operateur) {
//   case "+":
//     resultat = num1 + num2;
//     break;

//   case "-":
//     resultat = num1 - num2;
//     break;

//   case "*":
//     resultat = num1 * num2;
//     break;

//   case "/":
//     // Si le 2ème numéro est 0, alors la division n'est pas possible
//     if (num2 == 0) {
//       resultat = "on ne peut pas diviser par zéro";
//     } else {
//       resultat = num1 / num2;
//     }
//     break;

//     default :
//         alert("Opérateur " + operateur + " inconnu");
// }
// alert(resultat);

// Exercice 4 doc 6

// Déclaration des variables
// let pu = parseFloat(prompt("Quel est le prix unitaire")) ;
// let qtecom = parseFloat(prompt("Quel est la quantité voulu ?"));
// let port;
// let remise;
// let tot = parseFloat(pu * qtecom);

// Le port est gratuit si le tot est strictement supérieur à 500 sinon les frais de port sont de 2%
// if (tot > 500) {
//     port = 0;
// }
// else {
//     port = parseFloat(0.02 * tot);
// }

// Valeur minimal du port
// if ((pu*qtecom) * 0.02 < 6) {
//     port = parseInt(6);
// }

// Mise au point de la remise
// remise=0;
// if (tot > 100 && tot <= 200) {
//     remise = tot * 0.05;
// }
// else if (tot > 200) {
//     remise= tot * 0.10;
// }
// let pap = tot + port - remise;

// console.log(pu + " est le prix unitaire");
// console.log(qtecom + " est la quantite commandé");
// console.log(port + " est le frais de port");
// console.log(remise + " est la remise");

// console.log(tot + " est le prix total");
// console.log(pap + " est le prix à payer");

// Exercice 5 doc 6

// Déclaration de variable
// let maried = confirm("Êtes vous marié ?");
// let enfant = prompt("Combien avez-vous d'enfant ?");
// let salaire = prompt("Quel est votre salaire ?");
// let participation = 0;

// Si à la question précedente il répond ok et ça renvoie true et il est marié sinon, il est celibataire.
// if (maried == true) {
//   participation += 25;
// } else {
//   participation += 20;
// }

// Tant que l'itération est inférieur au nombre d'enfant, alors on rajoute 10 à la participation.
// for (let i = 0; i < enfant; i++) {
//   participation += 10;
// }

// Si le salaire est inférieur à 1200 alors, on ajoute 10 à la participation.
// if (salaire < 1200) {
//   participation += 10;
// }

// Si la participation est supérieur à 50 alors, la participation sera de maximum 50.
// if (participation > 50) {
//   participation = 50;
// }

// console.log("Vous avez le droit à " + participation + "% de participation.");

// Exercice 1 doc 7 // Verifiez que tous les exos soit correcte et ajouter des commentaire.

// let i = 1;
// let prenom;

// while (prenom != "") {
//     prenom = prompt("Saisissez le prenom" + i);
//     console.log(prenom);
//     i++;
// }
// console.log(i-2);

// Exercice 2 doc 7

// let N = prompt("Saisissez votre nombre.");

// Boucle qui part de N - 1 jusqu'à 0 pour afficher tous les nombres inférieurs à N
// for (let i = N - 1; i>=0; i--) {
//     console.log(i);
// }

// Exercice 3 doc 7

// let N = parseInt(prompt("Saisissez votre nombre."));
// let sum = 0;

// Boucle qui part de N - 1 jusqu'à 1 pour additionner les nombres inférieurs à N
// for (let i = N - 1; i > 0; i--) {
//   sum += i;
// }
// console.log("La somme des entiers inférieurs à " + N + " est : " + sum);

// Exercice 4 doc 7

// let n1 = parseInt(prompt("Veuillez saisir le premier numero"));
// let n2 = parseInt(prompt("Veuillez saisir le deuxième numero"));
// let sum = 0;

// // Calcul des intervalles de n1 à n2
// for (let i = n1; i<=n2; i++) {
//     sum+=i;
//     console.log(sum);
// }

// Exercice 5 doc 7

// let nbSomme = 0;
// let nbCount = 0;

// while(true){
//     let nbDemande = parseFloat(prompt("Veuillez saisir un nombre (0 pour arreter)"));

//     let nb = parseFloat(nbDemande);

//     // Si le nombre est 0, alors la boucle s'arrête.
//     if (nb === 0) {
//         break;
//     }

//     nbSomme += nb;
//     nbCount++;
// }

// let nbMoyenne = nbSomme / nbCount;

// console.log(nbSomme);
// console.log(nbCount);
// console.log(nbMoyenne);

// Exercice 6 doc 7

// let nbSomme = 0;
// let nbCount = 0;
// let nbMin = 2 ** 53;
// let nbMax = 0;

// while(true){
//     let nbDemande = parseFloat(prompt("Veuillez saisir un nombre (0 pour arreter)"));

//     let nb = parseFloat(nbDemande);

//     if (nb === 0) {
//         break;
//     }

//     nbSomme += nb;
//     nbCount++;

//     if (nb<nbMin) {
//         nbMin = nb;
//     }

//     else if (nb>nbMax) {
//         nbMax = nb;
//     }
// }

// nbMoyenne = nbSomme / nbCount;

// console.log(nbSomme + " est la somme des nombres.");
// console.log(nbCount + " est le nombre de nombres.");
// console.log(nbMoyenne + " est la moyenne des nombres.");
// console.log(nbMin + " est le minimum.");
// console.log(nbMax + " est le maximum");

// Exercice 7 doc 7

// let N = parseInt(prompt("Saisir le multiplicande"));
// let X = parseInt(prompt("Saisir le multiplicateur"));

// for (let i = 1; i<= N; i++) {
//     let NX = i *X;
//     console.log(i + " x " + X + " = " + NX);
// }

// Exercice 8 doc 7

// let mot = prompt("Saisir un mot.");
// let voyelles = "aeiouyAEIOUY";
// let voyellesCount = 0;

// for (let i =0; i < mot.length; i++) {
//     let index = mot.substring(i, i + 1);
//     if (voyelles.indexOf(index) !== -1) {
//         voyellesCount++;
//     }

// }

// console.log(mot);
// console.log(voyellesCount);

// Exercice 9 doc 7

// let jeunes = 0; // Jeunes < 20ans
// let moyen = 0; // Moyens >= 20ans <= 40 ans
// let seniors = 0; // Seniors > 40ans
// let age = 0;

// while(age < 100) {
//     age = prompt("Saisir votre age");
//     if (age < 20) {
//         jeunes++;
//     }
//     else if (age >= 20 && age <= 40) {
//         moyen ++;
//     }
//     else {
//         seniors++;
//     }
//     console.log(age);
// }

// console.log("Il y a " + jeunes + " jeunes.");
// console.log("Il y a " + moyen + " moyens.");

// Exercice 11 doc 7
// let magic = parseInt(Math.floor((Math.random() * 100) + 1));
// let user = parseInt(prompt("Veuillez saisir un nombre entre 0 et 100"));

// while (user != magic) {

//     if (user == magic) {
//         alert("Vous avez gagner !");
//         break;
//     }

//     else if (user < magic) {
//         user = prompt("Veuillez saisir un nombre plus grand.");
//     }

//     else {
//         user = prompt("Veuillez saisir un nombre plus petit");
//     }
// }
// console.log(magic);

let nombre = parseInt(prompt("Veuillez saisir un nombre pour tester s'il est premier :"));

// Variable pour déterminer si le nombre est premier
let estPremier = true;

// Vérifie si le nombre est inférieur ou égal à 1
// if (nombre <= 1) {
//     estPremier = false; // Les nombres <= 1 ne sont pas premiers
// } else {
//     // Vérifie les diviseurs de 2 à la racine carrée du nombre
//     for (let i = 2; i <= Math.sqrt(nombre); i++) {
//         // vérifie si nombre est divisible par i. Si c'est le cas, cela signifie qu'il a un diviseur autre que 1 et lui-même.
//         if (nombre % i === 0) {
//             estPremier = false; // Le nombre n'est pas premier s'il a un diviseur
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