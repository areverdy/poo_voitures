import { Voiture } from "./Voiture";
import { Garage } from "./Garage";
import { Vehicule } from "./Vehicule";
import { Moto } from "./Moto";

const voiture1 = new Voiture("Peugeot","208", "FY-700-TP","Bleu Vertigo", 5954, 22000, 2021)
const voiture2 = new Voiture("Renault","CLio","EN-214-BB", "Rouge Rubis", 37245, 14500,2017)
const voiture3 = new Voiture("Citroën", "C3","AY-250-PP", "Vert Hurlevent", 87356, 4199, 2002)
const voiture4 = new Voiture("Seat", "Ibiza", "BN-435-AG", "Gris Luna", 57659, 3850, 2012)
const voiture5 = new Voiture("DS", "ds3", "GC-600-AM","Noir Perla", 2789, 29840,2023 )
// console.log(voiture1,voiture2,voiture3,voiture4,voiture5)

const garage1 = new Garage("Chez Berbert",[voiture1,voiture2,voiture3,voiture4,voiture5])
// console.log(garage1)

garage1.voiturelamoinschere([voiture1, voiture2, voiture3, voiture4, voiture5])

garage1.voiturelapluschere([voiture1,voiture2,voiture3,voiture4,voiture5])

const voiture6= new Voiture("Peugeot","3008","GH-521-ZA","Bleu Vertigo",1457,42599,2023)
garage1.couleurvoiture([voiture1,voiture2,voiture3,voiture4,voiture5,voiture6])

//Vérifier tous les véhicules présents dans le garage1
//garage1.listedevehicules.forEach((vehicule)=> console.log(vehicule.constructor.name))

//Création d'un nouveau véhicule de la classe Moto
garage1.listedevehicules.push(new Moto("Yamaha", "125", "GC-600-AM","Noir", 2789, 29840,2023))

//Vérifier que l'ajout de la moto est bien inclus ds la liste des véhicules du garage1
garage1.listedevehicules.forEach((vehicule)=> console.log(vehicule.constructor.name));
