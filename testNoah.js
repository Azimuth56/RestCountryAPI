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

// Question 8
function moreTopLevelDomains() {
  console.log("Question 7 : Liste des pays avec le plus de nom de domaine")
  // on parcours tout les pays
  for(let i in ressources["pays"]){
    // si un pays à au moins 2 nom de domaines
    if(ressources["pays"][i]["topLevelDomain"]["length"] >=2){
      // alors on affiche son nom
      console.log(ressources["pays"][i]["nom"]["fr"]);
    }
  }
}