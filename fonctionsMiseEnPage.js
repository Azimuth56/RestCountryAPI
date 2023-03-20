function genererTableauPays() {
  var corpsTableau = document.getElementById("corpsTableau");
  var tabList = [];
  
  var l = paysdebut;
  
  while (l < paysfin) {
    if(allCountry[l] == undefined){
      break;
    }
    
    tabList.push(allCountry[l]);
    l = l + 1;
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