function genererTableauPays(filtre = false) {
  var corpsTableau = document.getElementById("corpsTableau");
  var tabList = [];

  var i = paysdebut;
  var l = paysdebut;

  while (l < paysfin) {
    if (allCountry[i] == undefined) {
      break;
    }

    booleenContinent = true;
    booleenLangues = true;
    booleenPays = true;

    if (filtre != false) {
      var listeContinents = document.getElementById("listeContinents");
      var listeLangues = document.getElementById("listeLangues");
      var champPays = document.getElementById("champPays");

      if (listeContinents.value != "-") {
        if (listeContinents.value != allCountry[i].continent) {
          booleenContinent = false;
        }
      }

      if (listeLangues.value != "-") {
        var trouveTemp = false;

        for (var j = 0; j < allCountry[i].languages.length; j += 1) {
          if (allCountry[i].languages[j].name == listeLangues.value) {
            trouveTemp = true;
          }
        }

        if (trouveTemp == false) {
          booleenLangues = false;
        }
      }

      if (champPays.value != "") {
        var regex = "" + champPays.value;
        var re = new RegExp(regex, "g");

        console.log(allCountry[i].nom["fr"].match(re));
        if (allCountry[i].nom["fr"].match(re) == null) {
          booleenPays = false;
        }
      }
    }


    if (booleenContinent && booleenLangues && booleenPays) {
      tabList.push(allCountry[i]);
      l += 1;
    }

    i += 1;
  }

  corpsTableau.innerHTML = "";

  for (let pays in tabList) {
    // création de la ligne (du tr)
    let ligne = document.createElement("tr");
    // création des données (td)
    // nom
    let nomContent = document.createElement("td");
    nomContent.textContent = tabList[pays]["nom"]["fr"];

    // population
    let population = document.createElement("td");
    population.textContent = tabList[pays]["population"];

    // surface
    let surface = document.createElement("td");
    surface.textContent = tabList[pays]["superficie"];

    // densite
    let densite = document.createElement("td");
    densite.textContent = tabList[pays].getPopDensity();

    // continent
    let continent = document.createElement("td");
    continent.textContent = tabList[pays]["continent"];

    // drapeau 
    let drapeau = document.createElement("td");
    let drapeauIMG = document.createElement("img");
    drapeauIMG.src = tabList[pays]["drapeau"]["svg"]
    drapeau.append(drapeauIMG)

    ligne.append(nomContent);
    ligne.append(population);
    ligne.append(surface);
    ligne.append(densite);
    ligne.append(continent);
    ligne.append(drapeau);

    corpsTableau.append(ligne);
  }
}


function genererListeContinents() {
  var tabContinent = [];

  for (var i = 0; i < allCountry.length; i += 1) {
    if (!tabContinent.includes(allCountry[i].continent)) {
      tabContinent.push(allCountry[i].continent);
    }
  }

  var liste = document.createElement("select");
  liste.setAttribute("id", "listeContinents");

  var optionTemp = document.createElement("option");
  optionTemp.value = "-";
  optionTemp.innerHTML = "Ne sélectionner aucun continent";
  liste.append(optionTemp);

  for (var i = 0; i < tabContinent.length; i += 1) {
    var optionTemp = document.createElement("option");
    optionTemp.value = tabContinent[i];
    optionTemp.innerHTML = tabContinent[i];
    liste.append(optionTemp);
  }


  var encartFiltres = document.getElementById("encartFiltres");
  encartFiltres.append(liste);

  liste.addEventListener("change", function() {
    genererTableauPays(true);
  });
}

function genererListeLangues() {
  var tabLangues = [];

  for (var i = 0; i < allCountry.length; i += 1) {
    for (var language of allCountry[i].languages) {
      if (!tabLangues.includes(language["name"])) {
        tabLangues.push(language["name"]);
      }
    }
  }

  var liste = document.createElement("select");
  liste.setAttribute("id", "listeLangues");

  var optionTemp = document.createElement("option");
  optionTemp.value = "-";
  optionTemp.innerHTML = "Ne sélectionner aucune langue.";
  liste.append(optionTemp);

  for (var i = 0; i < tabLangues.length; i += 1) {
    var optionTemp = document.createElement("option");
    optionTemp.value = tabLangues[i];
    optionTemp.innerHTML = tabLangues[i];
    liste.append(optionTemp);
  }

  var encartFiltres = document.getElementById("encartFiltres");
  encartFiltres.append(liste);

  liste.addEventListener("change", function() {
    genererTableauPays(true);
  });

}

function genererChampPays() {
  var champPays = document.createElement("input");
  champPays.type = "text";
  champPays.id = "champPays";
  champPays.placeholder = "Entrez le nom d'un pays"

  var encartFiltres = document.getElementById("encartFiltres");
  encartFiltres.append(champPays);

  champPays.addEventListener("change", function() {
    genererTableauPays(true);
  });
}
