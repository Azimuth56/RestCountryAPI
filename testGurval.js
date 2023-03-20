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
          tableauPaysHorsContinent.push(p[pays]);
          break;
        }
      }
    }
  }

  console.log(tableauPaysHorsContinent);
  return tableauPaysHorsContinent;
}

function moreNeighbors() {

}

This is where your Repls will
function neighborless() {
  var p = ressources["pays"];
  var tableauPaysSansVoisin = [];

  for (var pays in ressources["pays"]) {
    var continentTemp = p[pays]["continent"];

    if (p[pays]["paysFrontalier"] == undefined) {
      tableauPaysSansVoisin.push(p[pays]);
    }
  }

  console.log(tableauPaysSansVoisin);
  return tableauPaysSansVoisin;
}

function moreLanguages() {

}

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
      tableauPaysSansMonnaieCommune.push(p[pays]);
    }
  }

  console.log(tableauPaysSansMonnaieCommune);
  return tableauPaysSansMonnaieCommune;
}

function sortingDecreasingDensity() {

}

function moreTopLevelDomains() {

}


function veryLongTrip(code_pays) {
  var p = ressources["pays"];
  var listePays = [];

  var listePaysParcouru = [code_pays];
  var pilePays = [p[code_pays]];

  while (pilePays.length > 0) {
    var texte = "";

    for (var k = 0; k < pilePays.length; k += 1) {
      if (texte.length != 0) {
        texte += " -> ";
      }

      texte += pilePays[k].nom["fr"];
    }

    //console.log(texte);

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

  return listePays;
}