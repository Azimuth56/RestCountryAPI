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
  let max = 1;
  let paysmax = [];
  for (let pays in ressources["pays"]) {
    let voisinpays = ressources["pays"][pays]["paysFrontalier"];
    if (voisinpays != undefined) {
      let nombrevoisin = voisinpays.length;
      if (nombrevoisin > max) {
        max = nombrevoisin
        paysmax = []; //on vide le tableau
        paysmax.push(ressources["pays"][pays]);
      }
      else if (nombrevoisin == max) {
        paysmax.push(ressources["pays"][pays]);
      }
    }





  }

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
    let listefrontalier = ressources["pays"][pays]["paysFrontalier"];

    if (listefrontalier == null) {
      console.log(ressources["pays"][pays].toString());
    }

  }
}


//Q4
function moreLanguages() {
  let max = 1;
  let paysmax = [];
  for (let pays in ressources["pays"]) {
    let languepays = ressources["pays"][pays]["languages"];
    let nombrelangue = languepays.length;
    if (nombrelangue > max) {
      max = nombrelangue
      paysmax = []; //on vide le tableau
      paysmax.push(ressources["pays"][pays]);
    }
    else if (nombrelangue == max) {
      paysmax.push(ressources["pays"][pays]);
    }



  }

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
function sortingDecreasingDensity(){
  // formule : nb habitant / km2
  tabPays = {}
  for(let i in ressources["pays"]){
    population = ressources["pays"][i]["population"];
    superficie = ressources["pays"][i]["superficie"];
    densite = population/superficie;
    nomPays = ressources["pays"][i]["nom"]["fr"];
    tabPays[nomPays]=densite;
  }
    const tab = Object.values(ressources["pays"]).sort((item1, item2)=>{
    return  item2.getPopDensity() - item1.getPopDensity();
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