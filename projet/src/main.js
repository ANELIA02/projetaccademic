/*EXERCICE1*/
const titre = "Le Petit Prince";  
const anneePublication = 1943;   
const nombrePages = 96;    
let prix = 3000;
let disponible = true;
let reduction = 0.10;  
let prixReduit = prix - (prix * reduction);  

console.log("Type de 'titre' : " + typeof titre); 
console.log("Type de 'anneePublication' : " + typeof anneePublication); 
console.log("Type de 'prix' : " + typeof prix); 
console.log("Type de 'nombrePages' : " + typeof nombrePages); 
console.log("Type de 'disponible' : " + typeof disponible);
console.log(`Le prix initial du livre est : ${3000}`);
console.log(`Le prix après réduction de 10% est : ${prixReduit.toFixed()}`);
 



/*EXERCICE2*/
let prix1 = 15
let prix2 = 20
let prix3 = 25
let total = prix1 + prix2 + prix3;
let moyenne = total / 3;
let tva = total * 0.20;
let rabais = total * 0.10;
let PrixFinal = total - rabais 


console.log("Le total des prix est : " +total);
console.log("la moyenne est : " + moyenne);
console.log("la tva est : " + tva);
console.log("le PrixFinal est : " + PrixFinal);

if (total > 50){
    console.log("Le total est supérieur à 50€, profitez de votre réduction supplémentaire");
}
else {
    console.log("Le total est inférieur ou égal à 50€, aucune réduction supplémentaire");
}



/*EXERCICE3*/
function celsiusVersFahrenheitClassique(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusVersFahrenheitClassique(25));  


const celsiusVersFahrenheit = (celsius) => (celsius * 9/5) + 32;

console.log(celsiusVersFahrenheit(25));  

function typeTemperature(temp) {
    if (temp < 0) {
        return "Glaciale";
    } else if (temp >= 0 && temp <= 15) {
        return "Froide";
    } else if (temp > 15 && temp <= 25) {
        return "Tempérée";
    } else if (temp > 25 && temp <= 35) {
        return "Chaude";
    } else {
        return "Très chaude";
    }
}
console.log(typeTemperature(10));  

/*EXERCICE4*/
function noteVersMention(note) {
    let mention;
    
    if (note >= 90) {
        mention = "A";
    } else if (note >= 80) {
        mention = "B";
    } else if (note >= 70) {
        mention = "C";
    } else if (note >= 60) {
        mention = "D";
    } else {
        mention = "F";
    }

    
    if (note % 10 === 8 || note % 10 === 9) {
        mention += "+";
    } else if (note % 10 === 0 || note % 10 === 1) {
        mention += "-";
    }
    return mention;
}


console.log(noteVersMention(88));  






function fizzBuzz() {
    
    for (let nombre = 1; nombre <= 100; nombre++) {
        
        let resultat = '';
        
        
        if (nombre % 3 === 0) {
            resultat += 'Fizz';
        }
        
        
        if (nombre % 5 === 0) {
            resultat += 'Buzz';
        }
        
        
       else if (resultat === '') {
            resultat = nombre;
        }
        
        
        console.log(resultat);
    }
}

fizzBuzz();

/*
 Partie2*/

 function jeuDevinette() {
    
    const nombreSecret = Math.floor(Math.random() * 100) + 1;
  
    let essais = 0;
    let devine = false;
  
    while (!devine) {
      const tentative = parseInt(prompt("Devinez un nombre entre 1 et 100 :"));
  
      essais++;
  
      if (isNaN(tentative)) {
        alert("Veuillez entrer un nombre valide.");
        essais--; 
      } else if (tentative < nombreSecret) {
        alert("Trop petit !");
      } else if (tentative > nombreSecret) {
        alert("Trop grand !");
      } else {
        alert(`Félicitations ! Vous avez trouvé le nombre ${nombreSecret} en ${essais} essais.`);
        devine = true;
      }
    }
  }
  
  jeuDevinette();

/*
 Partie3*/
 function calculatrice() {
    let continuer = true;
  
    while (continuer) {
      const nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
      const operateur = prompt("Entrez l'opération (+, -, *, /) :");
      const nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));
  
      if (isNaN(nombre1) || isNaN(nombre2)) {
        console.error("Veuillez entrer des nombres valides.");
      } else {
        let resultat;
  
        switch (operateur) {
          case "+":
            resultat = nombre1 + nombre2;
            break;
          case "-":
            resultat = nombre1 - nombre2;
            break;
          case "*":
            resultat = nombre1 * nombre2;
            break;
          case "/":
            if (nombre2 === 0) {
              console.error("Division par zéro impossible.");
            } else {
              resultat = nombre1 / nombre2;
            }
            break;
          default:
            console.error("Opérateur invalide.");
            continue;
        }
  
        if (resultat !== undefined) {
          console.log(`Le résultat est : ${resultat}`);
        }
  
        const reponse = prompt("Voulez-vous continuer ? (oui/non)");
        continuer = reponse.toLowerCase() === "oui";
      }
    }
  }
  
  calculatrice();





  class GestionnaireDeTaches {
    constructor() {
      this.taches = [];
    }
  
    ajouterTache(titre, description, dateEcheance, priorite) {
      const nouvelleTache = {
        titre,
        description,
        dateEcheance,
        statut: 'à faire', 
        priorite,
      };
      this.taches.push(nouvelleTache);
    }
  

    marquerCommeTerminee(index) {
      if (this.taches[index]) {
        this.taches[index].statut = 'terminé';
      }
    }
  
    
    filtrerTachesParStatut(statut) {
      return this.taches.filter(tache => tache.statut === statut);
    }
  
    
    trierTachesParPriorite() {
      return this.taches.sort((a, b) => a.priorite - b.priorite);
    }
  
    
    calculerPourcentageTachesTerminees() {
      const tachesTerminees = this.taches.filter(tache => tache.statut === 'terminé');
      return (tachesTerminees.length / this.taches.length) * 100;
    }
  

    afficherResume() {
      const totalTaches = this.taches.length;
      const tachesParStatut = this.taches.reduce((acc, tache) => {
        acc[tache.statut] = (acc[tache.statut] || 0) + 1;
        return acc;
      }, {});
  
      console.log(`Résumé des tâches :`);
      console.log(`Nombre total de tâches : ${totalTaches}`);
      console.log(`Nombre de tâches par statut :`);
      for (let statut in tachesParStatut) {
        console.log(`${statut} : ${tachesParStatut[statut]}`);
      }
      console.log(`Pourcentage de tâches terminées : ${this.calculerPourcentageTachesTerminees()}%`);
    }
  }
  
  
  const gestionnaire = new GestionnaireDeTaches();
  
  gestionnaire.ajouterTache('Faire la vaisselle', 'Laver la vaisselle après le dîner', '2025-01-30', 3);
  gestionnaire.ajouterTache('Terminer le projet', 'Finaliser le rapport du projet', '2025-02-10', 1);
  gestionnaire.ajouterTache('Répondre aux emails', 'Répondre aux emails urgents', '2025-01-31', 2);
  
  
  gestionnaire.marquerCommeTerminee(0);
  
  
  const tachesAFaire = gestionnaire.filtrerTachesParStatut('à faire');
  console.log('Tâches à faire :', tachesAFaire);
  
  
  const tachesTriees = gestionnaire.trierTachesParPriorite();
  console.log('Tâches triées par priorité :', tachesTriees);
  

  gestionnaire.afficherResume();
  