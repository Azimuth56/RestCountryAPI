//Q1
function outsideTheContinent() {
  var p = ressources["pays"];
  var tableauPaysHorsContinent = [];
  console.log(p);

  for (var pays in ressources["pays"]) {
    var continentTemp = p[pays]["continent"];

    for (let pF in p[pays]["paysFrontalier"]) {
      var codePF = p[pays]["paysFrontalier"][pF];

      if (p[codePF] != undefined) {
        if (p[codePF]["continent"] != continentTemp) {
          console.log(p[pays].toString());
          tableauPaysHorsContinent.push(p[pays]);
          break;
        }
      }
    }
  }

  console.log(tableauPaysHorsContinent);
  return tableauPaysHorsContinent;
}

//Q2

function moreNeighbors() {
  let max = 1; //on initialise le max a un
  let paysmax = []; //on stockera les pays avec le plus de voisins dans un tableau car il peut en y avoir plusieurs
  //on parcours tous les pays
  for (let pays in ressources["pays"]) {
    let voisinpays = ressources["pays"][pays]["paysFrontalier"];
    //si le pays a des voisins
    if (voisinpays != undefined) {
      let nombrevoisin = voisinpays.length; //on regarde combien il a de voisins
      if (nombrevoisin > max) { //s'il a plus de voisins que le max actuel
        max = nombrevoisin//on change le max
        paysmax = []; //on vide le tableau
        paysmax.push(ressources["pays"][pays]); //et on ajoute le pays qui a le nouveau max
      }
      else if (nombrevoisin == max) { //si le pays a autant de voisin que le max actuel
        paysmax.push(ressources["pays"][pays]); // on ajoute le pays au tableau
      }
    }
  }
  //on parcours les pays avec le plus de voisins
  for (let p in paysmax) {
    console.log(paysmax[p].toString()); //on affiche le nom du pays
    for (let j in paysmax[p]["paysFrontalier"]) {
      console.log(paysmax[p]["paysFrontalier"][j]); //on affiche les pays frontalier du pays
    }

  }
}


//Q3
function neighborless() {
  for (let pays in ressources["pays"]) {
    //pour chaque pays on va regarder ses pays frontalier
    let listefrontalier = ressources["pays"][pays]["paysFrontalier"];

    //s'il n'a pas de pays frontalier
    if (listefrontalier == null) {
      //on affiche le pays
      console.log(ressources["pays"][pays].toString());
    }

  }
}


//Q4
function moreLanguages() {
  let max = 1; //on initialise le max a un
  let paysmax = [];//on stockera les pays avec le plus de langue dans un tableau car il peut en y avoir plusieurs
  //on parcours tous les pays
  for (let pays in ressources["pays"]) {
    let languepays = ressources["pays"][pays]["languages"]; //on stock les langue dans languepays
    let nombrelangue = languepays.length; //on regarde combien il y a de langue
    if (nombrelangue > max) { //si le pays a plus de langue que la max actuel
      max = nombrelangue //on met à jours le max
      paysmax = []; //on vide le tableau
      paysmax.push(ressources["pays"][pays]); //on ajoute le pays avec le nouveau max
    }
    else if (nombrelangue == max) { //si le pays a autant de langue que le max actuel
      paysmax.push(ressources["pays"][pays]); //on l'ajoute dans le tableau
    }
  }
  //on parcours les pays parlant le plus de langue
  for (let p in paysmax) {
    console.log(paysmax[p].toString()); //on affiche le nom du pays
    for (let j in paysmax[p]["languages"]) {
      console.log(paysmax[p]["languages"][j]); //on affiche les langues du pays
    }
  }
}

// Q5

function withCommonLanguage() {
  var p = ressources["pays"];
  var tableauPaysLanguesVoisines = {}

  for (var pays in ressources["pays"]) {

    for (let pF in p[pays]["paysFrontalier"]) {
      var codePF = p[pays]["paysFrontalier"][pF];

      if (p[codePF] != undefined) {
        for (var lC1 in p[codePF]["languages"]) {
          let paysValide = false;

          for (var lC2 in p[pays]["languages"]) {
            if (p[codePF]["languages"][lC1]["iso639_1"] == p[pays]["languages"][lC2]["iso639_1"]) {

              console.log(p[pays].toString(p[pays].toString()));
              console.log(p[codePF].toString(p[pays].toString()));
              console.log(ressources["langages"][p[codePF]["languages"][lC1]["iso639_1"]]["name"]);


              tableauPaysLanguesVoisines[p[pays]["alpha3"]] = p[pays];
              paysValide = true;
              break;
            }
          }
          if (paysValide) {
            break;
          }
        }
      }
    }
  }

  console.log(tableauPaysLanguesVoisines);
  return tableauPaysLanguesVoisines;
}

// Q6
function withoutCommonCurrency() {
  var p = ressources["pays"];
  var tableauPaysSansMonnaieCommune = [];
  console.log(p);

  for (var pays in ressources["pays"]) {
    var monnaieCommune = false;

    for (let pF in p[pays]["paysFrontalier"]) {
      var codePF = p[pays]["paysFrontalier"][pF];

      if (p[codePF] != undefined) {
        for (var mB1 in p[codePF]["currencies"]) {
          for (var mB2 in p[pays]["currencies"]) {
            if (p[codePF]["currencies"][mB1] == p[pays]["currencies"][mB2]) {
              monnaieCommune = true;
              break;
            }
          }
        }
      }
    }

    if (monnaieCommune == false) {
      console.log(p[pays].toString());
      tableauPaysSansMonnaieCommune.push(p[pays]);
    }
  }

  console.log(tableauPaysSansMonnaieCommune);
  return tableauPaysSansMonnaieCommune;
}

// Question 7
function sortingDecreasingDensity() {
  // on stock les pays dans le tableau
  tabPays = {}
  // on parcours tout les pays 
  for (let i in ressources["pays"]) {
    // on stock la population du pays actuel
    population = ressources["pays"][i]["population"];
    // on stock la superficie du pays actuel
    superficie = ressources["pays"][i]["superficie"];
    // on calcul la densité avec la formule suivante :
    // formule : nb habitant / km2
    densite = population / superficie;
    // on stock le nom du pays (version française du nom)
    nomPays = ressources["pays"][i]["nom"]["fr"];
    // on ajoute la densité du pays dans le tableau
    tabPays[nomPays] = densite;
  }
  // on trie le tableau de manière décroissant
  const tab = Object.values(ressources["pays"]).sort((item1, item2) => {
    // item2 - item 2 => décroissant
    // item1 - item2 => croissant
    return item2.getPopDensity() - item1.getPopDensity();
  })
  console.log(tab)
}
// Q8

function moreTopLevelDomains() {
  // on parcours tout les pays
  for (let i in ressources["pays"]) {
    // si un pays à au moins 2 nom de domaines
    if (ressources["pays"][i]["topLevelDomain"]["length"] >= 2) {
      // alors on affiche son nom
      console.log(ressources["pays"][i]["nom"]["fr"]);
    }
  }
}

//Q9
function veryLongTrip(code_pays) {
  var p = ressources["pays"];
  var listePays = [];

  var listePaysParcouru = [code_pays];
  var pilePays = [p[code_pays]];

  while (pilePays.length > 0) {
    var texte = "";
    
    for(var k = 0; k < pilePays.length; k +=1){
      if(texte.length != 0){
        texte += " -> ";
      }
      
      texte += pilePays[k].nom["fr"];
    }
    
    console.log(texte);

    var trouve = false;

    if (pilePays[pilePays.length - 1].paysFrontalier != undefined) {
      for (var i = 0; i < pilePays[pilePays.length - 1].paysFrontalier.length; i += 1) {
        var cP = pilePays[pilePays.length - 1].paysFrontalier[i];

        if (!listePaysParcouru.includes(cP)) {
          if (p[cP] != undefined) {
            trouve = true;
            listePays.push(p[cP]);
            pilePays.push(p[cP]);
            listePaysParcouru.push(cP);
            break;
          }
        }
      }
    }

    if (trouve == false) {
      pilePays.pop();
    }
  }

  console.log(listePays)
  return listePays;
}