/*function neighborless() {
  for (let pays in ressources["pays"]) {
    let listefrontalier=ressources["pays"][pays]["paysFrontalier"];
    
    if(listefrontalier==null){
      console.log(ressources["pays"][pays].toString());
    }

  }
}*/

/*
function moreLanguages(){
  let max=1;
  let paysmax=[];
  for(let pays in ressources["pays"]){
    let languepays=ressources["pays"][pays]["languages"];
    let nombrelangue=languepays.length;
    if(nombrelangue>max){
      max=nombrelangue
      paysmax=[]; //on vide le tableau
      paysmax.push(ressources["pays"][pays]);
    }
    else if(nombrelangue==max){
      paysmax.push(ressources["pays"][pays]);
    }
    
    
    
  }

  for(let p in paysmax){
    console.log(paysmax[p].toString()); //on affiche le nom du pays
    for(let j in paysmax[p]["languages"]){
      console.log(paysmax[p]["languages"][j]); //on affiche les langues du pays
    }
    
  }


}*/


//Q2

/*function moreNeighbors(){
  let max=1;
  let paysmax=[];
  for(let pays in ressources["pays"]){
    let voisinpays=ressources["pays"][pays]["paysFrontalier"];
    if(voisinpays!=undefined){
      let nombrevoisin=voisinpays.length;
      if(nombrevoisin>max){
        max=nombrevoisin
        paysmax=[]; //on vide le tableau
        paysmax.push(ressources["pays"][pays]);
      }
      else if(nombrevoisin==max){
        paysmax.push(ressources["pays"][pays]);
      }
    }
    
    
  
  
  
  }

  for(let p in paysmax){
    console.log(paysmax[p].toString()); //on affiche le nom du pays
    for(let j in paysmax[p]["paysFrontalier"]){
      console.log(paysmax[p]["paysFrontalier"][j]); //on affiche les pays frontalier du pays
    }
    
  }
  
  
}


//Q9