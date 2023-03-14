class Country {
  constructor(alpha3, superficie, paysFrontalier, capital, continent, gentile, drapeau, nom, population, topLevelDomain, currencies, languages) {
    this.alpha3 = alpha3;
    this.superficie = superficie;
    this.paysFrontalier = paysFrontalier;
    this.capital = capital;
    this.continent = continent;
    this.gentile = gentile;
    this.drapeau = drapeau;
    this.nom = nom;
    this.population = population;
    this.topLevelDomain = topLevelDomain;
    this.currencies = currencies
    this.languages = languages;
  }

  toString() {
    return this.nom;
  }

  getPopDensity() {
    return this.population / this.superficie;
  }

  getBorders() {
    let borderCountries = [];
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].nom !== this.nom && this.paysFrontalier.includes(countries[i].nom)) {
        borderCountries.push(countries[i]);
      }
    }
    return borderCountries;
  }

  getCurrencies() {
    return this.currencies;
  }

  getLanguage() {
    return this.language;
  }
}

class Currency {
  constructor(name, code, symbol) {
    this.name = name;
    this.code = code;
    this.symbol = symbol;
  }
}

class Language {
  constructor(iso639_1, iso639_2, name, nativeName) {
    this.iso639_1 = iso639_1;
    this.iso639_2 = iso639_2;
    this.name = name;
    this.nativeName = nativeName;
  }
}


function fileDB() {
  var tabObjet = {};
  var all_currencies = {};
  var all_languages = {};

  for (var i = 0; i < countries.length; i += 1) {
    let c = countries[i];

    let tabMonnaiesTemp = [];
    let tabLangagesTemp = [];

    if ("currencies" in c) {
      for (var j = 0; j < c.currencies.length; j += 1) {
        let m = c.currencies[j];

        if (!(m.code in all_currencies)) {
          all_currencies[m.code] = new Currency(m.name, m.code, m.symbol);
        }

        tabMonnaiesTemp.push(all_currencies[m.code]);
      }
    }

    if ("languages" in c) {
      for (var k = 0; k < c.languages.length; k += 1) {
        let l = c.languages[k];

        if (!(l.iso639_1 in all_languages)) {
          all_languages[l.iso639_1] = new Language(l.iso639_1, l.iso639_2, l.name, l.nativeName);
        }

        tabLangagesTemp.push(all_languages[l.iso639_1]);
      }
    }

    var languesASelectionner = ["fr", "de", "es", "it"];
    var tabNomTemp = { "en": c.name };

    for (var langue of languesASelectionner) {
      if (c.translations[langue] != undefined) {
        tabNomTemp[langue] = c.translations[langue];
      }
    }

    tabObjet[c.alpha3Code] =
      new Country(c.alpha3Code, c.area, c.borders, c.capital,
        c.region, c.demonym, c.flags,
        tabNomTemp, c.population, c.topLevelDomain,
        tabMonnaiesTemp, tabLangagesTemp);
  }

  return { "pays": tabObjet, "monnaies": all_currencies, "langages": all_languages };
}

var ressources = fileDB();