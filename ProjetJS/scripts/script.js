// Exercice doc 4

// let nom = prompt("Entrez votre nom");
// let prenom = prompt("Entrez votre prénom");
// let sexe = confirm("Êtes-vous un homme?");
// console.log(nom);
// console.log(prenom);
// console.log(sexe);
// if (sexe==true) {
//     alert("Bonjour Monsieur " + nom + " " + prenom + "!\n Bienvenue sur notre site web !")
// }
// else{
//     alert("Bonjour Madame " + nom + " " + prenom + "!\n Bienvenue sur notre site web !")
// }

// Exercice 1 doc 6

// let nombre = prompt("Entrer un nombre");
// if (nombre%2==0) {
//     console.log(nombre + " est paire")
// }
// else {
//     console.log(nombre + " est impaire")
// }

// Exercice 2 doc 6

// let annee = prompt("Quel est votre année de naissance ?");
// let age = 2024 - annee;
// if (age<18) {
//     console.log(age + " Vous êtes mineur")
// }
// else {
//     console.log(age + " Vous êtes majeur")
// }

// Exercice 3 doc 6

// Déclaration des variables
// let num1 = parseInt(prompt("Entrez votre premier chiffre"));
// let operateur = prompt("Entrez votre opération");
// let num2 = parseInt(prompt("Entrez votre deuxième chiffre"));
// let resultat;

// Condition pour les différent opérateur
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

// let maried = confirm("Êtes vous marié ?");
// let enfant = prompt("Combien avez-vous d'enfant ?");
// let salaire = prompt("Quel est votre salaire ?");
// let participation = 0;

// if (maried == true) {
//   participation += 25;
// } else {
//   participation += 20;
// }

// for (let i = 0; i < enfant; i++) {
//   participation += 10;
// }

// if (salaire < 1200) {
//   participation += 10;
// }

// if (participation >= 50) {
//   participation = 50;
// }

// console.log("Vous avez le droit à " + participation + "% de participation.");

// Exercice 1 doc 7

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

// for (let i = N; i>=0; i--) {
//     console.log(i);
// }

// Exercice 3 doc 7 

// let N = parseInt(prompt("Saisissez votre nombre."));
// let sum = 0;

// for (let i = N; i>=0; i--) {
//     sum += i
// }

// console.log(sum);